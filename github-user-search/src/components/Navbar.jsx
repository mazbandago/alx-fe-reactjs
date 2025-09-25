import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white font-bold py-6 px-6 flex justify-between items-center z-50 shadow-md">
      <Link to="/" className="hover:underline">SearchPage</Link>
      <Link to="/About" className="hover:underline">About</Link>
    </nav>
  );
}

export default Navbar;
