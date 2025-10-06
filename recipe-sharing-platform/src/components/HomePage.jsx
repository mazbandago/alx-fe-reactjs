import React, { useEffect, useState } from 'react'
import fetchRecipes from '../data.json'
import { Link } from 'react-router-dom';

function HomePage() {
    const[recipes,setRecipes] = useState([]);
    const[loading,setloading] = useState(true);
    

    useEffect(() =>{
        setTimeout(()=>{
            setRecipes(fetchRecipes)
            setloading(false);
        },1000)
    },[])


  return (
    <>
    <h1 className='p-4 mx-auto text-2xl font-bold sm:text-3xl text-center tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600'>List of Recipes</h1>
    {loading && <p className='flex justify-center items-center text-5xl font-bold text-center my-5 min-h-screen rounded-xl border bg-blue-400 hover:bg-blue-600'>Loading...</p>}
{/* 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl border-2 mb-2" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </Link>
      ))}
    </div> */}

    <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
    {recipes && recipes.length > 0 &&(
        recipes.map((recipe) =>(
          <Link to ={`/recipe/${recipe.id}`} key={recipe.id} className='mx-auto mb-4 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg/500 overflow-hidden transition-all transform duration-300 hover: scale-[1.02] hover:shadow-2xl hover:border-blue-500 cursor-pointer group'  >
            <div>
              <img src={recipe.image} alt={recipe.tittle} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl border-2 mb-2' />
              <h2 className='text-xl font-medium mb-2'>{recipe.title}</h2>
              <p className='mb-2'>{recipe.summary}</p>
                
            </div>
          </Link>
        ))
    )}
    </div>
    </>
  )
}

export default HomePage;


