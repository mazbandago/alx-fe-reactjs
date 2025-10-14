import React, { useState } from 'react'

function RegistrationForm() {
    const[userName, setUsername] = useState('');
    const[email, setEmail] = useState('');
    const[password,SetPassword] = useState('');

const handleSubmit = () =>{

}


  return (
    <form>
        <input type="text" value={userName}  />
    </form>
   
  )
}

export default RegistrationForm;