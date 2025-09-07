import React from 'react'
import UserInfo from './UserProfile'

export default function ProfilePage({userData}) {
  return (
    <div>
        <UserInfo userData = {userData}/>
    </div>
  )
}
