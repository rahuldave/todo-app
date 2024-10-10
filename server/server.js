const express = require("express");
const next = require("next");
const { initDatabase } = require("./database");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  initDatabase().then(() => {
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  });
});
