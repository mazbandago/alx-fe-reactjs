import React from 'react'
import UserDetails from './UserDetails'

export default function UserInfo({userData}) {
  return (
    <div>
        <UserDetails  userData = {userData}/>
    </div>
  )
}
