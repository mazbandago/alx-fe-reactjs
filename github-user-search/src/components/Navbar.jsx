import React from 'react'
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="bg-black text-white font-bold p-4 flex justify-between items-center">
      <Link to="/" className="hover:underline">SearchPage</Link>
      <Link to="/About" className="hover:underline">About</Link>
    </nav>
  );
}

export default Navbar;