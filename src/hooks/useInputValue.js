import { useState } from 'react'

const useInputValue = ( defaultValue = '' ) => {
  const [value, setValue] = useState( defaultValue )
  const onChange = event => setValue( event.target.value )
  const clear = () => setValue( defaultValue )
  return {
    bind: {
      value,
      onChange,
    },
    value,
    clear,
  }
}

export default useInputValue