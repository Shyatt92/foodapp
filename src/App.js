import React, { useState } from 'react'
import './App.css'
import BannerHome from './components/BannerHome'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {
  const [ loadHomeComponent, setLoadHomeComponent ] = useState('home')

  const componentToLoad = () => {
    if (loadHomeComponent === 'logIn') {
      return (<LoginForm setLoadHomeComponent={setLoadHomeComponent} />)
    } else if (loadHomeComponent === 'about') {
      return (<AboutUs />)
    } else if (loadHomeComponent === 'contact') {
      return (<ContactUs />)
    } else  if (loadHomeComponent === 'home') {
      return (<HomePage />)
    } else if (loadHomeComponent === 'login') {
      return (<h1>Logged In!</h1>)
    } else if (loadHomeComponent === 'signup') {
      return (<h1>Let&apos;s Get You Signed Up!</h1>)
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
