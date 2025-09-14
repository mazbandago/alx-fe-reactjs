import React from 'react'
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { Route, Routes, Router} from 'react-router-dom';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <Routes>
      <Route path='/' element = {<RecipeList />} />
      <Route path ="/recipes/:id" element ={<RecipeDetailsWrapper />} />
      </Routes>

    </div>
  );
}

export default App;