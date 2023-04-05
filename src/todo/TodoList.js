import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({todos}) => {

  return (
    <ul className='todo-list'>
      {todos.map( ( todo, idx ) => <TodoItem index={idx} key={todo.id} todo={todo}/> )}
    </ul>
  )
}

export default TodoList