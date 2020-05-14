import React from 'react'

const Button = (props) => {
  console.log(props)
  
  return(
    <button
      onClick={(e) => props.clickHandler(e)} 
      className={props.button.css}
      value={props.button.label}
    >
      {props.button.label}
    </button>
  )
}

export default Button