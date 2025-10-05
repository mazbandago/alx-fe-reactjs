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
    <h1 className='p-4 mx-auto text-2xl font-bold sm:text-3xl text-center items-center'>List of Recipes</h1>
    {loading && <p className='flex justify-center items-center text-5xl font-bold text-center my-5 min-h-screen rounded-xl border bg-blue-400 hover:bg-blue-600'>Loading...</p>}
    {recipes && recipes.length > 0 &&(
        recipes.map((recipe) =>(
            <div key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.summary}</p>
                <img src={recipe.image} alt={recipe.tittle} />
            </div>
        ))
    )}
    </>
  )
}

export default HomePage;