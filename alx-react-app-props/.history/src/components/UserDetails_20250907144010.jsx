import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'


const data = useContext(UserContext)
console.log(data);
export default function UserDetails({userData}) {
  return (
    <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
    </div>
  )
}
