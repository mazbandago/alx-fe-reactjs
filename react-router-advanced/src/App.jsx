import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile />}>
          <Route path='details' element={<ProfileDetails />} />
          <Route path='settings' element={<ProfileSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;