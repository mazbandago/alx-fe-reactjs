import { useState } from 'react'

function Registration() {
    const[formData, setFormData] = useState({username:"",email:"",password:""});

    const handleonChange = (e)=>{
        const{name, value} = e.target;
        setFormData(prevData =>({...prevData, [name]:value }))
    }

    const handleonSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
        setFormData({username:"",email:"", password:""})
    }

  return (
   <form onSubmit={handleonSubmit}>
    <input type="text" name="username" value={formData.username} onChange={handleonChange}  required />
    <input type="email" name="email" value ={formData.email} onChange={handleonChange} required/>
    <input type="password"  name="password" value={formData.password} onChange={handleonChange} required/>
    <button type="submit">Submit</button>
   </form>
  )
}

export default Registration;