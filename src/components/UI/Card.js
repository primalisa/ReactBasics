import React from 'react'
import s from "./card.module.css"


const Card =(props) =>
{
  const classes=s.card +" "+ props.className;

  return (

    <div className={classes}>
      {props.children}

    </div>
  )
}

export default Card;