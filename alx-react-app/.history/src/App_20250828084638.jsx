<<<<<<< HEAD
import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'

export default function App() {
  return (
    <div>
      <WelcomeMessage></WelcomeMessage>
    </div>
  )
}

=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'

function App() {
  return (
     <>
      <WelcomeMessage></WelcomeMessage>
      <Header/>
      <MainContent/>
      <Footer/> 
      <UserProfile name='Alice' age='25' bio='Loves hiking and photography'/>
     </>
  )
}
export default App
>>>>>>> 3d1914ba563396239ef5381c3737faffe01f6fd7
