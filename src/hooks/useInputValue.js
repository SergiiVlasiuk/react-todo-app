import { useState } from 'react'

const useInputValue = ( defaultVlaue='' ) => {
  const[value, setValue]=useState( defaultVlaue )

  return {
    bind: {
      value,
      onChange: event => setValue( event.target.value ),
    },
    clear : () => setValue( '' ),
    value : ()=>value
  }
}

export default useInputValue
