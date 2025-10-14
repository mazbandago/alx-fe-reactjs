import React, { useState } from 'react'

function RegistrationForm() {
    const[userName, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password,SetPassword] = useState('');

const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log(userName);
    console.log(email);
    console.log(password);


}


  return (
    <div className='p-6 mx-auto max-w-4xl mt-8 mb-8 bg-white-600'>
    <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center'>
        <input type="text" placeholder='Enter Your Full Name' value={userName} onChange={(e)=>setUsername(e.target.value)}
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <input type="email" placeholder='Enter Your Email Here' required value={email} onChange={(e)=>setEmail(e.target.value)} 
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <input type="password" required value={password} onChange={(e)=>SetPassword(e.target.value)} />
        <button type="submit" className='border py-3 px-2 rounded font-bold text-2xl bg-amber-400 hover:bg-amber-200 transition-transform duration-300 hover:scale-120 shadow-2xl'>submit</button>
    </form>
    </div>
   
  )
}

export default RegistrationForm;