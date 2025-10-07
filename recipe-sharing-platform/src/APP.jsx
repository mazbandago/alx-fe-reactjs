
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './AddRecipeForm';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/AddRecipe' element={<AddRecipeForm/>}/>
          <Route path='/recipe/:id' element={<RecipeDetail/>}/>
          <Route path="/About" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;