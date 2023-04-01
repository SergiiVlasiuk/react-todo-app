import {createContext} from 'react'

const ContextTodo = createContext({
  removeTodo   : null,
  onToggleTodo : null
})

export default ContextTodo
