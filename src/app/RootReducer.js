import { combineReducers } from '@reduxjs/toolkit'
import appReducer from './app-redux/AppSlice'
import todoReducer from './todo-redux/TodoSlice'

const RootReducer = combineReducers({
  app   : appReducer,
  todos : todoReducer,
})

export default RootReducer
