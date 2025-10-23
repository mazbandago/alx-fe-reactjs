import React, { useState } from 'react'
import React from 'react';

function App() {
  return (
    <div>
      <Registration/>
    </div>
  )
}

export default App;
export function Registration() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleonChange = () => {
        const { name, value } = e.value;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleonSubmit = (e) => {
        e.preventDefaut();
        setFormData({ username: "", email: "", password: "" });
    };

    return (
        <form>
            <input type="text" name="username" onChange={() =} />
            <input type="email" name="email" onChange={() =} />
            <input type="password" name="password" onChange={() =} />
            <button>Submit</button>

        </form>
    );
}
