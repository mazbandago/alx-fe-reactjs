import React, { useEffect, useState } from 'react'
import fetchRecipes from '../data.json'

function HomePage() {
    const[recipes,setRecipes] = useState([]);
    const[loading,setloading] = useState(true);
    

    useEffect(() =>{
        setTimeout(()=>{
            setRecipes(fetchRecipes)
            setloading(false);
        },7000)
    },[])


  return (
    <>
    <h1 className='p-4 mx-auto text-2xl font-bold sm:text-3xl text-center tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-blue-600'>List of Recipes</h1>
    {loading && <p className='flex justify-center items-center text-5xl font-bold text-center my-5 min-h-screen rounded-xl border bg-blue-400 hover:bg-blue-600'>Loading...</p>}
    {recipes && recipes.length > 0 &&(
        recipes.map((recipe) =>(
            <div key={recipe.id} className='p-4 grid mx-auto mb-4 max-w-sm bg-white border border-gray-200 rounded-lg/500 shadow-lg overflow-hidden transition-all transform duration-300 hover: scale-[1.02] hover:shadow-2xl hover:border-blue-500 cursor-pointer group'>
                <h2 className='text-xl font-medium mb-2'>{recipe.title}</h2>
                <p className='mb-2'>{recipe.summary}</p>
                <img src={recipe.image} alt={recipe.tittle} className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl border-2 mb-2' />
            </div>
        ))
    )}
    </>
  )
}

export default HomePage;


