import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import './AddTodo.css'
import useInputValue from 'hooks/useInputValue'

const AddTodo = () => {
  const { onCreate } = useContext( TodoContext )
  const input = useInputValue()
  const {bind, clear, value} = input

  function formSubmitHandler( event ) {
    event.preventDefault()
    if ( value.trim() ) {
      onCreate( value )
      clear()
    }
  }

  return (
    <form className="add-todo" onSubmit={formSubmitHandler}>
      <input
        type="text"
        {...bind}
      />
      <button type="submit">Add Todo item</button>
    </form>
  )
}

export default AddTodo
