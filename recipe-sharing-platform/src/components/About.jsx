import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

function About() {
const[datas, setData] =useState([]);

// Load user-submitted recipes from localStorage and merge
  useEffect(() => {
    const addrecipeParse = JSON.parse(localStorage.getItem('recipe')) || [];
    if (addrecipeParse.length > 0) {
      setData(addrecipeParse);
    }
  }, []);

  return (
    <>
    <Navbar />
    <h1>Display Ingredients and Instructions</h1>
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {datas.map((data, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{data.title}</h2>
          <p className="text-gray-600">{data.ingredients}</p>
          <p className="text-gray-600">{data.instructions}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default About;