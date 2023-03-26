import React from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

const styles = {
  ul: {
    listStyle : 'none',
    margin    : 0,
    padding   : 0
  }
}

const TodoList = ({todoList, onToggle}) => {
  console.log( todoList )
  return (
    <ul style={styles.ul}>
      {todoList.map( ( item, idx ) => <TodoItem
        key={item.id}
        todo={item} 
        index={idx}
        onChange={onToggle}
      /> )}
    </ul>
  )
}

TodoList.propTypes = {
  todoList : PropTypes.arrayOf( PropTypes.object ).isRequired,
  onToggle : PropTypes.func.isRequired,
}

export default TodoList
