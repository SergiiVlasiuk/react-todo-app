import ContextTodo from 'ContextTodo'
import React, { useContext } from 'react'

const TodoItem = ({todo, index}) => {
  const {id, title, completed} = todo
  const itemClasses = []
  if ( completed ) itemClasses.push( 'done' )

  const {removeTodo, onToggleTodo} = useContext( ContextTodo )

  return (
    <li key={id} className='todo-item'>
      <span className={itemClasses.join( ' ' )}>
        <input 
          type="checkbox"
          checked={completed}
          onChange={onToggleTodo.bind( null, id )}/>
        <strong>
          {index + 1}
        </strong>
        &nbsp;{title}
      </span>
      <button 
        className='rm'
        onClick={removeTodo.bind( null, id )}>
        &times;
      </button>
    </li>
  )
}

export default TodoItem