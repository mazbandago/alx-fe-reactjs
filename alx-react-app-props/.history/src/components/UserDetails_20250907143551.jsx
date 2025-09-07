import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'


const consumeUserContext = useContext(UserContext)
console.log(consumeUserContext)
export default function UserDetails({userData}) {
  return (
    <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
    </div>
  )
}
