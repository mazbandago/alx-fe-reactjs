import { useState } from 'react'
import React from 'react';
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'
import ProfilePage from './components/ProfilePage';

function App() {
const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
     <>
      <ProfilePage userDate = {userData}/>;
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name='Alice' age='25' bio='Loves hiking and photography' />
     </>
  )
}
export default App
