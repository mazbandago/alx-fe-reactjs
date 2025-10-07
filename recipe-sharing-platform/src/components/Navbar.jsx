import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='bg-cyan-300 flex items-center justify-between p-4 rounded-t-2xl w-full'>
        <Link className='font-bold border p-2 rounded-xl bg-amber-100 shadow-xl hover:shadow-lg/30  ' to="/">Home</Link>
        <Link className='font-bold border p-2 rounded-xl bg-amber-100 shadow-xl hover:shadow-lg/30 ' to="/AddRecipe">AddRecipe</Link>
        <Link className='font-bold border p-2 rounded-xl bg-amber-100 shadow-xl hover:shadow-lg/30 ' to="/About">About</Link>

    </div>
  )
} 

export default Navbar;
