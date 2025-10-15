import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import UserProfile from './components/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile/*' element={<ProtectedRoute><Profile /></ProtectedRoute>}>
          <Route path='details' element={<ProfileDetails/>}/>
          <Route path='settings' element={<ProfileSettings/>}/>
        </Route>
        <Route path='/profile/:userId' element={<UserProfile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;