import React from 'react'
import useUser from '../Context/UserContext'
const Profile = () => {
    const {user}=useUser()
    if(!user) return <div>Please Login</div>
  return (
    <div>Welcome : {user.username}</div>
  )
}

export default Profile
