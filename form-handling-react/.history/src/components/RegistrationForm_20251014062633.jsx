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
    <div className='p-6 mx-auto '>
    <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center'>
        <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)}
        className='border-1 rounded p-3'
        />
        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" required value={password} onChange={(e)=>SetPassword(e.target.value)} />
        <button type="submit">submit</button>
    </form>
    </div>
   
  )
}

export default RegistrationForm;