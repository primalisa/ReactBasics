import React from 'react'
import s from "./errormodal.module.css"
import Card from './Card'
import Button from './Button'

const ErrorModal =(props) =>
{
  return(
    <div>
      <div className={s.backdrop} onClick={props.onConfirm}>


      </div>

    <Card className={s.modal}>

      <header className={s.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={s.content}>
        <p>
          {props.desc}
        </p>
      </div>
      <footer className={s.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>

      </footer>
    </Card>
    </div>




  )
}

export default ErrorModal