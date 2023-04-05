import Modal from 'components/modal/Modal'
import Spinner from 'components/Spinner'
import React, { useEffect, useState } from 'react'
// import AddTodo from 'todo/AddTodo'
import TodoContext from 'todo/TodoContext'
import TodoList from 'todo/TodoList'

const AddTodo = React.lazy( () =>
  waitForALittle( () => import( './todo/AddTodo' ), 4000 )
)

function waitForALittle( data, timeout = 2000 ) {
  return new Promise( ( resolve ) => {
    setTimeout( () => {
      if ( typeof data === 'function' ) {
        return resolve( data() )
        // return data()
      }
      return resolve( data )
    }, timeout )
  })
}

// console.log(waitForALittle())

function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading]=useState( true )
  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=5' )
      .then( response => response.json() )
      .then( waitForALittle )
      .then( setTodos )
      .finally( () => setLoading( false ) )
  }, [])
  const onToggleTodo = id => {
    setTodos( todos.map( todo => {
      if ( todo.id==id )todo.completed= !todo.completed
      return todo
    }) )
  }
  const onRemove = idParam => {
    setTodos( todos.filter( ({id}) => id!=idParam ) )
  }
  const onCreate = title => {
    setTodos([ ...todos, {
      id        : new Date().getTime(),
      title,
      completed : false,
    }])
  }
  return (
    <TodoContext.Provider value={{onToggleTodo, onRemove, onCreate}}>
      <div className='container'>
        <h1>Hello World</h1>
        <Modal/>
        <React.Suspense fallback={<Spinner/>}>
          <AddTodo/>
        </React.Suspense>
        {
          todos.length
            ? <TodoList todos={todos} />
            : loading
              ? <Spinner/>
              :<p>no todos</p>
        }
      </div>
    </TodoContext.Provider>
  )
}

export default App
