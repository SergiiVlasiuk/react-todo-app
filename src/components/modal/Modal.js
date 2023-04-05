import React, { useState } from 'react'
import './Modal.css'

const Modal = () => {
  const [isOpen, setOpen] = useState( false )

  return (
    <>
      <button className="modal-button section" onClick={setOpen.bind( null, true )}>
        Open Modal
      </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal Title</h1>
            <p className="modal-body-main">I am modal</p>
            <button
              className="modal-button"
              onClick={setOpen.bind( null, false )}
            >
              Close Body
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
