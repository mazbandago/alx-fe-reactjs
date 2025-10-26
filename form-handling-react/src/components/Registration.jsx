import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Submitting:', formData);
      // Simulate API call here
    }
  };

  return (
    <form onSubmit={handleSubmit} className='p-6 mx-auto max-w-4xl bg-white rounded-2xl border-0 shadow-xl hover:shadow-lg/200 mb-10'>
      <div className=''>
        <label  className='font-bold'>Username:</label>
        <input name="username" value={formData.username} onChange={handleChange} className='p-3 border-1 mb-4 text-2xl text-gray-600 rounded border-gray-700 mt-8 w-full'/>
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label className='font-bold '>Email:</label>
        <input name="email" value={formData.email} onChange={handleChange} className='p-3 border-1 mb-4 text-2xl text-gray-600 rounded border-gray-700 mt-8 w-full'/>
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label className='font-bold'>Password:</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange}className='p-3 border-1 mb-4 text-2xl text-gray-600 rounded border-gray-700 mt-8 w-full'/>
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit" className='border p-2 rounded bg-amber-400 mx-auto hover:bg-amber-700'>Register</button>
    </form> 
  );
}
