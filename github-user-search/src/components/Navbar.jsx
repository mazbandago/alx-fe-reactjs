import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
        <Link to= "/">SearchPage</Link>
        <Link to= "/About">About</Link>
    </nav>
  )
}

export default Navbar;