import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Profile() {

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> 
    </div>
  )
}

export default Profile;