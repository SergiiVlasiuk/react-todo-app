import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import './TodoItem.css'

const TodoItem = ({ todo, index }) => {
  const { id, title, completed } = todo
  const itemClasses = []
  if ( completed ) itemClasses.push( 'done' )
  const { onToggleTodo, onRemove } = useContext( TodoContext )

  return (
    <li className={'todo-item ' + itemClasses.join( ' ' )} key={id}>
      <span onClick={onToggleTodo.bind( null, id )}>
        <input
          checked={completed}
          // onChange={onToggleTodo.bind( null, id )}
          onChange={() => {}} // to prevent console issue
          type="checkbox"
        />
        <strong>{index + 1}</strong>
        &nbsp;{title}
      </span>
      <button className="rm" onClick={onRemove.bind( null, id )}>
        &times;
      </button>
    </li>
  )
}

export default TodoItem
