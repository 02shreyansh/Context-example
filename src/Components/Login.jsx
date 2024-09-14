import React, {  useState } from 'react'
import useUser from '../Context/UserContext';


const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const {setUserr,user}=useUser()
  const submitHandle=(e)=>{
    e.preventDefault();
    setUserr({username,password})
  }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      {" "}
      <input type="password" placeholder='*********' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      {" "}
      <button onClick={submitHandle}>Submit</button>
    </div>
  )
}

export default Login
