import React, { useState } from 'react'
import './App.css'
import BannerHome from './components/BannerHome'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import SignUp from './components/SignUp'

function App() {
  const [ loadHomeComponent, setLoadHomeComponent ] = useState('home')
  const [ userEmail, setUserEmail ] = useState('')

  const componentToLoad = () => {
    if (loadHomeComponent === 'logIn') {
      return (<LoginForm setLoadHomeComponent={setLoadHomeComponent} setUserEmail={setUserEmail} />)
    } else if (loadHomeComponent === 'about') {
      return (<AboutUs />)
    } else if (loadHomeComponent === 'contact') {
      return (<ContactUs />)
    } else  if (loadHomeComponent === 'home') {
      return (<HomePage />)
    } else if (loadHomeComponent === 'login') {
      return (<h1>Logged In!</h1>)
    } else if (loadHomeComponent === 'signup') {
      return (<SignUp userEmail={userEmail} />)
    }
  }

  return (
    <div className="App">
      <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
      {componentToLoad()}
    </div>
  )
}

export default App
