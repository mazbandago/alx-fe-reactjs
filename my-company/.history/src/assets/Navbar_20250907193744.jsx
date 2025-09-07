import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css";

export default function Navbar() {
  return (
<header className='headerContainer'>
    <nav className='navContainer'>
        <img src="https://th.bing.com/th/id/OIP.2ueeyhHbHKiotIAnqVV3KAHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="avater-logo" />
        <span>MazBandago</span>
        <Link to ="/">Home</Link>
        <Link to ="About">About</Link>
        <Link to ="Contact">Contact</Link>
        <Link to ="Service">Service</Link>
    </nav>
</header>
    
  )
}
