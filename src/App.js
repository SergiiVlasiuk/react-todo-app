import Loader from 'components/Loader'
import Modal from 'components/Modal'
import ContextTodo from 'ContextTodo'
import React, { useEffect, useState } from 'react'
// import AddTodo from 'todo/AddTodo'
import TodoList from 'todo/TodoList'
const AddTodo = React.lazy( () => new Promise(
  resolve => setTimeout( () => {
    resolve( import( './todo/AddTodo' ) )
  }, 5000 )
) )

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn english', done: false},
    { id: 2, title: 'Learn js', done: true},
    { id: 3, title: 'Make todo list application', done: false},
  ])
  const[loading, setLoading]=useState( true )
  useEffect( ()=>{
    fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=5' )
      .then( response => response.json() )
      .then( todos => {
        setTimeout ( ()=>{
          setTodos( todos )
          setLoading( false )
        }, 2000 )
      })
  }, [])
  const removeTodo = id =>
    setTodos( todos.filter( todo => id!=todo.id ) )
  const onToggleTodo = id =>
    setTodos( todos.map( todo => {
      if ( todo.id == id ) todo.done = !todo.done
      return todo
    }) )
  const onCreate = title =>
    setTodos([
      ...todos,
      {
        id   : Date.now(),
        title,
        done : false,
      }
    ])

  return (
    <ContextTodo.Provider value={{removeTodo, onToggleTodo}}>
      <div className="container">
        <h1>Todo list</h1>
        <Modal/>
        <React.Suspense fallback={<Loader/>}>
          <AddTodo onCreate={onCreate}/>
        </React.Suspense>
        {loading && <Loader/>}
        {todos.length
          ?<TodoList todos={todos}/>
          : loading ? null : <p>no todos</p>
        }
      </div>
    </ContextTodo.Provider>
  )
}

export default App
