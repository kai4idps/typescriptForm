type Todo = {
  text: string
  complete: boolean
}
type ToggleTodo = (selectTodo: Todo) => void

type AddTodo = (newTodo: string) => void

type SiginUpForm = {
  email: string
  password: string
}

interface TodoListProps {
  todo: Todo
  toggleTodo: ToggleTodo
}
