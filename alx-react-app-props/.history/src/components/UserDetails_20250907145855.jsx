import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'


const data = useContext(UserContext)
console.log(data);
export default function UserDetails() {
  return (
    <div>
        <p>Name: {data.name}</p>
        <p>Email: {userData.email}</p>
    </div>
  )
}
