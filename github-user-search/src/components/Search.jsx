import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    try {
      const results = await fetchUserData({
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos.trim(),
      });
      setUsers(results);
    } catch (error) {
      console.error("Error fetching users:", error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='form-div p-4 max-w-xl mx-auto'>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label htmlFor="usernames">Github Username</label>
        <input
          type="text"
          id="usernames"
          value={username}
          placeholder="Enter your Github username Here"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          placeholder="e.g. Ghana"
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <label htmlFor="minRepos">Minimum Repositories</label>
        <input
          type="number"
          id="minRepos"
          value={minRepos}
          placeholder="e.g. 10"
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {isLoading && <p className="mt-4">Loading...</p>}
      {isError && <p className="mt-4 text-red-500">Looks like we can't find the user</p>}
      {users.length > 0 && (
        <div className="mt-6 grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="user-card p-4 border rounded shadow">
              <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
              <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;




// import React from 'react'
// import { useState } from 'react';
// import { fetchUserData } from '../services/githubService';
// import { useQuery } from "@tanstack/react-query";

// function Search() {
//   const [username, setUsername] = useState("");
//   const [location, setLocation] = useState("");
//   const [minRepos, setMinRepos] = useState("");
//   const [searchParams, setSearchParams] = useState(null);

//  const { data:users, isLoading, isError } = useQuery({
//     queryKey: ["githubUser", searchParams],
//     queryFn: () => fetchUserData(searchParams),
//     enabled: !!searchParams, // Only run when there's input
//     staleTime: 1000 * 60 * 5, // 5 minutes
//   });
 
  
//    const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearchParams({
//       username:username.trim(),
//       location: location.trim(),
//       minRepos: minRepos.trim(),
//     });
//   };
  
//   return (
//     <>
//       <div className='form-div p-4 max-w-xl mx-auto" '>
//         <form className= "space-y-4" onSubmit ={handleSubmit}>
//           <label htmlFor="usernames">Github Username</label>
//           <input type="text" id='usernames' value={username} placeholder='Enter your Github username Here' onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded" />
//         <label htmlFor="location">Location</label>
//         <input
//           type="text"
//           id="location"
//           value={location}
//           placeholder="e.g. Ghana"
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//         <label htmlFor="minRepos">Minimum Repositories</label>
//         <input
//           type="number"
//           id="minRepos"
//           value={minRepos}
//           placeholder="e.g. 10"
//           onChange={(e) => setMinRepos(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//           <button type ="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
//         </form>

//         {isLoading && <p className="mt-4">Loading...</p>}
//         {isError && <p className="mt-4 text-red-500">"Looks like we can't find the user"</p>}
//         {users && users.length > 0 && (
//          <div className="mt-6 grid gap-4">
//           {users.map((user) => (
//             <div key ={user.id} className="user-card p-4 border rounded shadow">
//               <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full"/>
//               <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
//               <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline" >
//                 View Profile
//               </a>
//             </div>
//           ))}
//          </div>
//       )}
//       </div>
//     </>
//   )
// }

// export default Search;