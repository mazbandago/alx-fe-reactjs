import React, { useState } from 'react'

function RegistrationForm() {
    const[userName, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password,SetPassword] = useState('');

const handleSubmit = (e) =>{
    e.preventDefault();
    console.loge(userName)
}


  return (
    <form>
        <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} />
        {userName}
    </form>
   
  )
}

export default RegistrationForm;