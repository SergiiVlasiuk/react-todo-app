import Context from 'context'
import Loader from 'Loader'
import Modal from 'modal/Modal'
import React, { useEffect, useState } from 'react'
// import AddTodo from 'todo/AddTodo'
import TodoList from 'todo/TodoList'
// import styles from './styles/modules/app.module.scss'

// const AddTodo = React.lazy( () => import ( 'todo/AddTodo' ) )
const AddTodo = React.lazy(
  () =>
    new Promise( resolve => {
      setTimeout( () => {
        resolve( import( 'todo/AddTodo' ) )
      }, 4000 )
    })
)

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: 'Learn css', done: false},
    // { id: 2, title: 'Learn scala', done: false},
    // { id: 3, title: 'Learn java', done: true},
  ])
  const [loading, setLoading] = useState( true )

  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=5' )
      .then( response => response.json() )
      .then( todos => {
        setTimeout( () => {
          setTodos( todos )
          setLoading( false )
        }, 2000 )
      })
  }, [])

  const toggleTodo = id => {
    setTodos(
      todos.map( todo => {
        if ( todo.id == id ) {
          todo.done = !todo.done
        }
        return todo
      })
    )
  }

  const removeTodo = id => {
    setTodos( todos.filter( todo => todo.id != id ) )
  }

  function addTodo( title ) {
    setTodos( todos.concat({
      id   : Date.now(),
      title,
      done : false,
    }) )
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="container">
        <div className="wrapper">
          <Modal/>
          <React.Suspense fallback={<p>...loading</p>}>
            <AddTodo onCreate={addTodo}/>
          </React.Suspense>
          {loading && <Loader/>}
          { todos.length
            ? <TodoList
              todoList={todos}
              onToggle={toggleTodo}
            />
            : loading ? null : <p>No todos!</p>}
        </div>
      </div>
    </Context.Provider>
  )
}

export default App
