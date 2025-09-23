import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import App from '../App';
import Navbar from './Navbar';


function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(mazbandago);
      setUser(data);
    
    } catch (err) {
      setError("Like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className='form-div'>
        <form className='cont' onSubmit ={handleSubmit}>
          <label htmlFor="usernames">Github Username</label>
          <input type="text" id='usernames' value={username} placeholder='Enter your Github username Here' onChange={(e) => setUsername(e.target.value)} />
          <button type ="submit">Submit</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className='err'>{error}</p>}
        {user && (
         <div className="user-card">
           <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.name || user.login}</h2>
           <a href={user.html_url} target="_blank" rel="noopener noreferrer">
             View Profile
           </a>
         </div>
      )}
      </div>
      <App />
    </>
  )
}

export default Search;