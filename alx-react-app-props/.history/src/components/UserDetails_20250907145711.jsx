import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'


const {userData} = useContext(UserContext)
console.log(userData);
export default function UserDetails() {
  return (
    <div>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
    </div>
  )
}
