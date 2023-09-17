import React from 'react'
import './CheckoutInput.scss'

const CheckoutInput = (props) => {
  return (
    <>
        <input {...props} value={props.value} onChange={(e) => props.onChange(e)} />
        <p className="errorMessage">{props.errorMessage}</p>
    </>
  )
}

export default CheckoutInput