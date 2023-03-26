import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useInputValue( defaultValue = '' ) {
  const [value, setValue] = useState( defaultValue )

  return {
    bind: {
      value,
      onChange: event=>setValue( event.target.value )
    },
    clear: () => setValue( '' )
  }
}

const AddTodo = ({onCreate}) => {
  const {bind, clear} = useInputValue( '' )
  const submitHandler = event => {
    event.preventDefault()
    if ( bind.value.trim() ) {
      onCreate( bind.value )
      clear()
    }
  }
  return (
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
      <input {...bind} />
      <button type="submit">Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default AddTodo