import React, { useEffect, useState } from 'react'
import fetchRecipes from '../data.json'

function HomePage() {
    const[recipes,setRecipes] = useState([]);
    const[loading,setloading] = useState(true);
    

    useEffect(() =>{
        setTimeout(()=>{
            setRecipes(fetchRecipes)
            setloading(false);
        },5000)
    },[])


  return (
    <>
    <h1>List of Recipes</h1>
    {loading && <p>Loading...</p>}
    {recipes && recipes.length > 0 &&(
        recipes.map((recipe) =>(
            <div key={recipe.id}>
                <h2>{recipe.tittle}</h2>
                <p>{recipe.summary}</p>
                <img src={recipe.image} alt={recipe.tittle} />
            </div>
        ))
    )}
    </>
  )
}

export default HomePage;