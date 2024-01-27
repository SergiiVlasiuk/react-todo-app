import Button from 'components/button/Button'
import useInputValue from 'hooks/useInputValue'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from 'app/todo-redux/TodoSlice'
import './AddTodo.css'


const AddTodo = () => {
  const {bind, value, clear} = useInputValue()
  const submitHandler = event => {
    event.preventDefault()
    if ( value.trim() ) {
      dispatch( addTask({
        id        : new Date().getTime(),
        completed : false,
        title     : value,
      }) )
      clear()
    }
  }

  const dispatch = useDispatch()
  return (
    <form className='add-todo' onSubmit={submitHandler}>
      <input type="text" {...bind}/>
      <Button>Add Item</Button>
    </form>
  )
}

export default AddTodo
