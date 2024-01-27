import { selectLoading } from 'app/app-redux/AppSlice'
import React from 'react'
import { useSelector } from 'react-redux'
import './Spinner.css'

const Spinner = () => {
  const loadingFlag = useSelector( selectLoading )

  return (
    loadingFlag &&
    <div className="spinner-modal">
      <div className="spinner-container">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner
