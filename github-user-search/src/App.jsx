
import React from 'react'
import Navbar from './components/Navbar';
import Search from './components/Search';



function App() {
  return (
    <>
      <Navbar />
      <div className='app-cont'>
      <h1>Github User Search </h1>
      <p>The GitHub User Search is an Application that will allow you to search for GitHub profiles. It has a search input, through which will display results. The result includes basic user information, and link to GitHub user profiles.</p>
      <Search />
      </div>
    </>
  )
}

export default App;