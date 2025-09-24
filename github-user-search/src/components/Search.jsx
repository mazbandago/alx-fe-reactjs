import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { useQuery } from "@tanstack/react-query";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [searchParams, setSearchParams] = useState(null);

 const { data:users, isLoading, isError } = useQuery({
    queryKey: ["githubUser", searchParams],
    queryFn: () => fetchUserData(searchParams),
    enabled: !!searchParams, // Only run when there's input
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
 
  
   const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      username:username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    });
  };
  
  return (
    <>
      <div className='form-div'>
        <form className='cont' onSubmit ={handleSubmit}>
          <label htmlFor="usernames">Github Username</label>
          <input type="text" id='usernames' value={username} placeholder='Enter your Github username Here' onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          placeholder="e.g. Ghana"
          onChange={(e) => setLocation(e.target.value)}
          // className="w-full p-2 border rounded"
        />
        <label htmlFor="minRepos">Minimum Repositories</label>
        <input
          type="number"
          id="minRepos"
          value={minRepos}
          placeholder="e.g. 10"
          onChange={(e) => setMinRepos(e.target.value)}
          // className="w-full p-2 border rounded"
        />
          <button type ="submit">Submit</button>
        </form>

        {isLoading && <p style={{marginTop: "16px"}}>Loading...</p>}
        {isError && <p className='err'>"Looks like we can't find the user"</p>}
        {users && users.length > 0 && (
         <div style={{marginTop:"24px", display:'grid', gap:"16px"}}>
          {users.map((user) => (
            <div key ={user.id}className='user-card'>
              <img src={user.avatar_url} alt={user.login} style={{width:"100px", height:"100px", borderRadius:"50px"}} />
              <h2 style={{fontSize:"18px", fontWeight:"bold"}}>{user.name || user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
         </div>
      )}
      </div>
    </>
  )
}

export default Search;