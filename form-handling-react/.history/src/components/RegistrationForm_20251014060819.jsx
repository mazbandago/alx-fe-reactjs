import React, { useState } from 'react'

function RegistrationForm() {
    const[userName, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password,SetPassword] = useState('');

const handleOnSubmit = (e) =>{
    e.preventDefault();
    console.log(userName);
    console.log(email);
    console.log(password

    );


}


  return (
    <form onSubmit={handleOnSubmit}>
        <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} />
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} />
        <button type="submit">submit</button>
    </form>
   
  )
}

export default RegistrationForm;