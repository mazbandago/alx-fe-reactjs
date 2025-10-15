import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <nav>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* This renders nested routes */}
    </div>
  )
}

export default Profile;