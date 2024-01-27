import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTaskCompletion, deleteTask } from 'app/todo-redux/TodoSlice'
import './TodoItem.css'

const TodoItem = ({ todo, index }) => {
  const { id, title, completed } = todo
  const dispatch = useDispatch()

  const classes = []
  if ( completed ) classes.push( 'done' )
  return (
    <li className="todo-item">
      <span
        className={classes.join( ' ' )}
        onClick={() => dispatch( toggleTaskCompletion( id ) )}>
        <input checked={completed}
          onChange={() => {}}
          type="checkbox"/>
        &nbsp;
        <strong>{index + 1}</strong>&nbsp;{title}
      </span>{' '}
      <button
        className="rm"
        onClick = {() => dispatch( deleteTask( id ) )}
      >
        &times;
      </button>
    </li>
  )
}

export default TodoItem
