import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading } from 'app/app-redux/AppSlice'
import { fetchTasks } from 'app/todo-redux/TodoSlice'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector( state => state.todos.tasks )
  const loadingFlag = useSelector( selectLoading )
  useEffect( () => {
    dispatch( fetchTasks() )
  }, [dispatch])
  return (
    <>
      {!loadingFlag && ( todos?.length
        ? <ul className="todo-list">
          {todos.map( ( todo, idx ) => (
            <TodoItem index={idx} key={todo.id} todo={todo} />
          ) )}
        </ul>
        : <p>no items</p> )
      }
    </>
  )
}

export default TodoList
