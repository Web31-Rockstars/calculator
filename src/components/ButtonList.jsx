import React from 'react'
import data from '../data'

import Button from './Button'

const ButtonList = (props) => {
  console.log(props)
  
  return (
    <main>
        {data.map((button, item) => (
          <Button key={item} button={button} clickHandler={props.clickHandler} />
        ))
        }
    </main>
  )
}

export default ButtonList