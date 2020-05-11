import * as React from "react"
import "./TodoList.css"

export const TodoListItem: React.FC<TodoListProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo)
          }}
        />
        {todo.text}
      </label>
    </li>
  )
}
