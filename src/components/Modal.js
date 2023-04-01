import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {
  const [isOpen, setOpen] = useState( false )
  return (
    <>
      <button onClick={setOpen.bind( null, true )}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <p>the modal</p>
            <button onClick={setOpen.bind( null, false )}>Close modal</button>
          </div>
        </div> )}
    </>
  )
}

export default Modal
