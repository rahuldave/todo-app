import { executeQuery } from "../../server/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const todos = await executeQuery(
      "SELECT * FROM todos ORDER BY created_at DESC",
    );
    res.status(200).json(todos);
  } else if (req.method === "POST") {
    const { text } = req.body;
    await executeQuery("INSERT INTO todos (text) VALUES (?)", [text]);
    res.status(201).json({ message: "Todo created successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
