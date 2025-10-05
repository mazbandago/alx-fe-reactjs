import React from 'react'
import { useState, useEffect } from 'react';
import fetchRecipes from '../data.json'
import { useParams } from 'react-router-dom';

function RecipeDetail() {
    const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = fetchRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

   if (!recipe) {
    return (
      <div className="text-center mt-10 text-gray-600">
        Loading recipe details...
      </div>
    );
  }


  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default RecipeDetail;