import { createSlice } from '@reduxjs/toolkit'
import { fetchDataFromServer } from 'components/todo/service/TodoService'
import { startLoading, stopLoading } from 'app/app-redux/AppSlice'

function getLocalTodos() {
  return window.localStorage.getItem( 'todoList' )
}
const getInitialTodo = () => {
  const localTodoList = getLocalTodos()
  if ( localTodoList ) {
    return JSON.parse( localTodoList )
  }
  window.localStorage.setItem( 'todoList', [])
  return []
}

const defaultState = {
  filters: {
    completion  : 'all', // 'all', 'completed', 'active'
    title       : '', // фільтр за назвою завдання
    description : '', // фільтр за описом
  },
  tasks: getInitialTodo(),
}

export const TodoSlice = createSlice({
  name         : 'todos',
  initialState : defaultState,
  reducers     : {
    setTasks: ( state, action ) => {
      state.tasks = action.payload
    },
    addTask: ( state, action ) => {
      state.tasks.push( action.payload )
    },
    updateTask: ( state, action ) => {
      const { id, newData } = action.payload
      const taskIndex = state.tasks.findIndex( task => task.id === id )
      if ( taskIndex !== -1 ) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...newData }
      }
    },
    deleteTask: ( state, action ) => {
      state.tasks = state.tasks.filter( task => task.id !== action.payload )
    },
    toggleTaskCompletion: ( state, action ) => {
      const taskIndex = state.tasks.findIndex( task => task.id === action.payload )
      if ( taskIndex !== -1 ) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
      }
    },
    setFilterCompletion: ( state, action ) => {
      state.filters.completion = action.payload
    },
    setFilterTitle: ( state, action ) => {
      state.filters.title = action.payload
    },
    setFilterDescription: ( state, action ) => {
      state.filters.description = action.payload
    },
  },
})

export const fetchTasks = () => async ( dispatch ) => {
  try {
    dispatch( startLoading() )

    const data = await fetchDataFromServer()
    dispatch( setTasks( data ) )
  } catch ( error ) {
    console.error( 'Error fetching tasks:', error )
  } finally {
    dispatch( stopLoading() )
  }
}

export const {
  setTasks,
  addTask,
  updateTask,
  deleteTask,
  toggleTaskCompletion,
  setFilterCompletion,
  setFilterTitle,
  setFilterDescription,
} = TodoSlice.actions
export default TodoSlice.reducer
