import React from 'react'

import s from "./button.module.css"

const Button =props =>{

  return (

    <button 
    className={s.button} 
    type={props.type || 'button'} 
    onClick={props.onClick}>
      {
        props.children
      }

    </button>
  )
}

export default Button