import React from 'react'
import { BrowserRouter, Route, Router, Routes  } from 'react-router-dom';
import HomePage from './components/HomePage';



function App() {
  return (
    <Router>
        <Routes>
            <Route path = "/" element={<HomePage/>}/>
            <Route path = "/recipe/:id" element = {<RecipeDetail/>} />
        </Routes>
    </Router>
  )
}

export default App;