
import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/recipe/:id' element={<RecipeDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;