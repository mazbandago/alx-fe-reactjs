import React, { useState } from 'react'
import Navbar from './components/Navbar';
import {useNavigate} from 'react-router-dom';

function AddRecipeForm() {
    const[title, setTitle] = useState('')
    const[ingredients, setIngredient] = useState('')
    const[instructions, setInstructions] = useState('')
    const[errors, setErrors] =useState({})

     const navigate = useNavigate();

    const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required.';
    else if (ingredients.split(',').length < 2) newErrors.ingredients = 'Include at least two ingredients.';
    if (!instructions.trim()) newErrors.instructions = 'Preparation steps are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    function handleSubmit (e){
        e.preventDefault();
        if(!validateForm()) return;
        
        const addRecipe = {
            title,
            ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()).filter(ingredient => ingredient),
            // FIX: Added parentheses to .trim()
            instructions: instructions.split('.').map((instruction) => instruction.trim()).filter(instruction => instruction),
            // Ensure a unique ID is created for the recipe
            id: 'user-' + Date.now().toString(), 
            summary: `A user-submitted recipe for ${title}`,
            image: "https://placehold.co/400x250/FACC15/000?text=New+Recipe"
        }
        console.log(addRecipe)
        const storedData = JSON.parse(localStorage.getItem('recipe')) || [];

        // FIX: Check if storedData is an array. If it's a single object, wrap it in an array.
        // If it's null, default to an empty array.
        let addrecipeParse = [];
        if (Array.isArray(storedData)) {
            addrecipeParse = storedData;
        } else if (storedData) {
            // If it's a single object (non-array, non-null), start a new array with it.
            addrecipeParse = [storedData];
        }

        localStorage.setItem('recipe', JSON.stringify([...addrecipeParse, addRecipe]))
    //    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    //    localStorage.setItem('recipes', JSON.stringify([...storedRecipes, newRecipe]));

        setTitle('')
        setInstructions('')
        setIngredient('');
        setErrors({});

        navigate("/About");
    }
    

  return (
    <div>
        <Navbar />
        <form onSubmit={handleSubmit} className='flex flex-col mx-auto max-w-2xl space-y-6 p-6'>
          <h2 className='font-bold text-2xl text-center mt-4 p-4 mx-auto'>CREATE AND ADD RECIPE</h2>
          <label className='block font-bold mb-2' htmlFor="recipeTittle">Recipe Title:</label>
          <input type='text' onChange ={(e)=>setTitle(e.target.value)} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' value = {title} />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          <label  className='block font-bold mb-2' htmlFor="ingredients">Ingredients</label>
          <textarea onChange ={(e)=>setIngredient(e.target.value)} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' value = {ingredients} />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          <label  className='block font-bold mb-2' htmlFor="prepStep">Preparation Step</label>
          <textarea onChange ={(e)=>setInstructions(e.target.value)} className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' value = {instructions} />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          <button type='submit' className='w-full p-2 mt-4 border bg-amber-100 font-bold rounded shadow-2xs hover:shadow-lg/30 hover:bg-cyan-300 transition duration-300'>Submit</button>
        </form>
    </div>
  )
}

export default AddRecipeForm;