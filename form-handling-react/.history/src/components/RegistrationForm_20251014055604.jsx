import React, { useState } from 'react'

function RegistrationForm() {
    const[userName, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password,SetPassword] = useState('');

const handleOnSubmit = (e) =>{
    e.preventDefault();
    ("forms submitted successfully")
    console.loge(userName)
}


  return (
    <form onSubmit={handleOnSubmit}>
        <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} />
        {userName}
    </form>
   
  )
}

export default RegistrationForm;