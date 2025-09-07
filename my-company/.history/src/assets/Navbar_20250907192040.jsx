import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <header className='headerContainer'>
        <img src="" alt="avater-logo" />
        <span>MazBandago</span>
        <Link to ="/">Home</Link>
        <Link to ="About">About</Link>
        <Link to ="Contact">Contact</Link>
        <Link to ="Service">Service</Link>
    </header>
    
  )
}
