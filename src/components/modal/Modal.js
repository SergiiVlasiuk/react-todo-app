import {
  selectModalDialogFlag,
  showModalDialog,
  hideModalDialog,
} from 'app/app-redux/AppSlice'
import Button from 'components/button/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Modal.css'

const Modal = () => {
  const modalDialogFlag = useSelector( selectModalDialogFlag )
  const dispatch = useDispatch()

  function setOpen( action ) {
    dispatch( action )
  }
  return (
    <>
      <Button
        attributes={{ onClick: setOpen.bind( null, showModalDialog() ) }}
        classes={['modal-button']}
      >
        Open modal dialog
      </Button>
      {modalDialogFlag && (
        <div className="modal">
          <div className="modal-body">
            <h2>Modal Title</h2>
            <p className="modal-body-main">I am modal</p>
            <Button
              attributes={{ onClick: setOpen.bind( null, hideModalDialog() ) }}
              classes={['modal-button']}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
