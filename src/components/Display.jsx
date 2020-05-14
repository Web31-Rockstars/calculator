import React from 'react'

const Display = (props) => {
  console.log(props)
  
  return (
    <header>
      <div className="display">
        {props.display}
      </div>
    </header>
  )
}

export default Display