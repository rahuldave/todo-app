export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="mb-2">
          <span className="font-bold">{todo.text}</span>
          <span className="text-sm text-gray-500 ml-2">
            {new Date(todo.created_at).toLocaleString()}
          </span>
        </li>
      ))}
    </ul>
  );
}
