
import { createContext } from 'react'

const TodoContext = createContext({
  // setTodos     : null,
  onToggleTodo : null,
  onRemove     : null,
  onCreate     : null,
})

export default TodoContext
