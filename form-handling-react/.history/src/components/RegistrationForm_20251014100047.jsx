import React, { useState } from 'react'

function RegistrationForm() {
    const[formData, setFormData] = useState({name:"", email:"",password:""});

    const handleOnChange = ()=>{
        setFormData(prevData =>({...prevData, name:e.target.value}))
    }
    

const handleOnSubmit = (e) =>{
    e.preventDefault();
    setEmail('')
    setUsername("")
    setPassword("")
}


  return (
    <div className='p-6 mx-auto max-w-4xl mt-12 mb-8 bg-white shadow-lg hover:shadow-lg/50'>
    <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center'>
        <input type="text" placeholder='Enter Your Full Name' name='name' value={formData.name} onChange={handleOnChange}
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <input type="email" placeholder='Enter Your Email Here' name="email" required value={email} onChange={handleOnChange} 
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <input type="password" required name="password" value={password} onChange={handleOnChange} 
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <button type="submit" className='border py-3 px-2 rounded font-bold text-2xl bg-amber-400 hover:bg-amber-200 transition-transform duration-300 hover:scale-120 shadow-2xl'>submit</button>
    </form>
    </div>
   
  )
}

export default RegistrationForm;