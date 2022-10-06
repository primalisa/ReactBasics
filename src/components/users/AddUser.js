import React ,{useState} from "react";
import s from "./AddUser.module.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import Card from "../UI/Card";

const AddUser = (props) => {


  const [userName,setUserName] =useState('')
  const [age,setAge] =useState('')
  const [error,setError]=useState(false)

  const addUserHandler = (event) => {
    event.preventDefault();

    if(userName.trim().length ===0 || age.trim().length ===0)
    {
      return(
      setError({
        title:'Invalid Input',
        desc:'Please enter a valid name and age non empty values '
      }))
    }
    if( +age <1 )
    {
      return (setError({
        title:'Invalid age',
        desc:'Please enter a valid age more than 0 '
      }))
    }

    props.onaddUser(userName,age)
    setUserName('')
    setAge('')

  };

  const onUserNameHandler =(event)=>
  {
   setUserName(event.target.value)

  }
  const onAgeHandler =(event)=>
  {
    setAge(event.target.value)

    
  }
  const errorhandler =()=>{
    setError(null)


  }
  
  return (
    <div>
    {error && <ErrorModal title={error.title} desc={error.desc} onConfirm={errorhandler}></ErrorModal>}

    <Card className={s.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={userName} onChange={onUserNameHandler} />
        <label htmlFor="age">Age</label>
        <input id="age" type="text" value={age} onChange={onAgeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card> 
    </div> 

  );
};

export default AddUser;
