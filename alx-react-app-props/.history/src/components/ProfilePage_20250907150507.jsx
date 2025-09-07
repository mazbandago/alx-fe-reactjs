import React from 'react'
import UserInfo from './UserInfo'

export default function ProfilePage({userData}) {
  return (
    <div>
        <UserInfo userData = {userData}/>
    </div>
  )
}
