import React, { useState } from 'react'

function RegistrationForm() {
    const[formData, setFormData] = useState({fullName:"", email:"",password:""});

    const handleOnChange = (e)=>{
        const{name,value} = e.target
        setFormData(prevData =>({...prevData, [name]:value}))
    }
    

const handleOnSubmit =(e) =>{
    e.preventDefault();
    console.log(formData)
    setFormData({fullName:"",email:"",password:""})
  
}

  return (
    <div className='p-6 mx-auto max-w-4xl mt-12 mb-8 bg-white shadow-lg hover:shadow-lg/50'>
    <form onSubmit={handleOnSubmit} className='flex flex-col items-center justify-center'>
        <input type="text" placeholder='Enter Your Full Name' required name='fullName' value={formData.fullName} onChange={handleOnChange}
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <input type="email" placeholder='Enter Your Email Here' name="email" required value={formData.email} onChange={handleOnChange} 
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <input type="password" required name="password" value={formData.password} onChange={handleOnChange} 
        className='border-1 rounded p-3 w-full focus:ring-gray-500 text-2xl text-gray-500 mb-6'
        />
        <button type="submit" className='border py-3 px-2 rounded font-bold text-2xl bg-amber-400 hover:bg-amber-200 transition-transform duration-300 hover:scale-120 shadow-2xl'>submit</button>
    </form>
    </div>
   
  )
}

export default RegistrationForm;