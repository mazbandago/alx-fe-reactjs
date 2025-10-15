import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        
       <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav> 
      <h1>This is the Home page</h1>
      
    </div>
  )
}

export default Home;