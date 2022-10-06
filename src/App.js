import React,{useState} from 'react';
import AddUser from './components/users/AddUser';
import UserList from "./components/users/UserList"

function App() {

 const [userList ,setUserList] =useState([])

 const onaddUser =(uName,uage)=>
 {
     setUserList((prev) =>{

      return [ ...prev ,{id:Math.random().toString() ,name:uName ,age:uage}]
 })
 }
  return (
    <div>
      <AddUser onaddUser={onaddUser}/>
      <UserList users={userList}/>

    </div>
  );
}

export default App;
