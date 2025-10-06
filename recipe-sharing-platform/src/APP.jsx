import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';





function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path = "/" element={<HomePage/>}/>
            <Route path = "/recipe/:id" element = {<RecipeDetail/>} />
        </Routes>
    </Router>
    </div>
  )
}
export default App;
