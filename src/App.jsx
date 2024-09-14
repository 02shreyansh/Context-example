
import { useState } from "react"
import Login from "./Component/Login"
import Profile from "./Component/Profile"
import { UserContextProvider } from "./Context/UserContext"


function App() {
  const [user,setUser]=useState("");
  const setUserr=(newUser)=>{
    setUser(newUser)
  }
  return (
    <UserContextProvider value={{user,setUserr}}>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
