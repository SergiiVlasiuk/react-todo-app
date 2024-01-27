import React from 'react'
import TodoList from 'components/todo/TodoList'
import Spinner from 'components/spinner/Spinner'
import Modal from 'components/modal/Modal'
// import Wait from 'utils/Wait'
const AddTodo = React.lazy( () => import( './components/todo/AddTodo' ) )
// const AddTodo = React.lazy( () => Wait(
//   () => import( './components/todo/AddTodo' ), 2000
// ) )

function App() {

  return (
    <div className="container">
      <h1>Hello World</h1>
      <Modal/>
      <React.Suspense fallback='loading add todo'>
        <AddTodo/>
      </React.Suspense>
      <Spinner/>
      <TodoList />
    </div>
  )
}

export default App
