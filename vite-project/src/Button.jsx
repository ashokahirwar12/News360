import React from 'react'
import './Button.css';

export const Button = ({data, handlecategories}) => {
  return (
    <div>
        <button onClick={()=> handlecategories(data)}>{data}</button>
    </div>
  )
}
