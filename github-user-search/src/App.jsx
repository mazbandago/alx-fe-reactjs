import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-cont max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">GitHub User Search</h1>
        <p className="text-gray-600 mb-6">
          The GitHub User Search is an application that allows you to search for GitHub profiles.
          Enter a username, location, or minimum repository count to find users. Results include basic info and profile links.
        </p>
        <Search />
      </div>
    </>
  );
}

export default App;
