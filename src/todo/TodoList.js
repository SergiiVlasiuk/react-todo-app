import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
  return (
    <div>
      <ul className='todo-list'>
        {
          todos.map( ( todo, idx ) =>
            <TodoItem key = {todo.id} todo={todo} index={idx}/> )
        }
      </ul>
    </div>
  )
}

export default TodoList