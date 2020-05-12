import React, { useState } from "react"
import { TodoList } from "./TodoList"
import { AddTodoForm } from "./AddTodoForm"
import MyForm from "./MyForm"
import AddressForm from "./AddressForm"

const initialTodo: Array<Todo> = [
  { text: "LEE", complete: false },
  { text: "LEO", complete: true }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodo)

  const toggleTodo: ToggleTodo = selectTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectTodo) {
        return { ...todo, complete: !todo.complete }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }])
  }
  return (
    <React.Fragment>
      {/* <AddressForm /> */}
      <MyForm
        onSubmit={value => {
          console.log(value)
        }}
      />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  )
}

export default App
