import React, { useState } from 'react'

const useInputValue = ({defaultValue=''}={}) => {
  const [value, setValue] = useState( defaultValue )
  return {
    bind: {
      value,
      onChange: event => setValue( event.target.value ),
    },
    value,
    clear: () => setValue( defaultValue ),
  }
}

export default useInputValue