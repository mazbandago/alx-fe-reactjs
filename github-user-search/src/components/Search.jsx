import React from 'react'
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import { useQuery } from "@tanstack/react-query";

function Search() {
  const [username, setUsername] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

 const { data, isLoading, isError } = useQuery({
    queryKey: ["githubUser", submittedUsername],
    queryFn: () => fetchUserData(submittedUsername),
    enabled: !!submittedUsername, // Only run when there's input
  });
 
  
   const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUsername(username.trim());
  };
  
  return (
    <>
      <div className='form-div'>
        <form className='cont' onSubmit ={handleSubmit}>
          <label htmlFor="usernames">Github Username</label>
          <input type="text" id='usernames' value={username} placeholder='Enter your Github username Here' onChange={(e) => setUsername(e.target.value)} />
          <button type ="submit">Submit</button>
        </form>

        {isLoading && <p>Loading...</p>}
        {isError && <p className='err'>Looks like we can't find the user</p>}
        {data && (
         <div className="user-card">
           <img src={data.avatar_url} alt={data.login} width={100} />
          <h2>{data.name || data.login}</h2>
           <a href={data.html_url} target="_blank" rel="noopener noreferrer">
             View Profile
           </a>
         </div>
      )}
      </div>
    </>
  )
}

export default Search;