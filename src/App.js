import React, { useState } from 'react'
import './App.css'
import BannerHome from './components/BannerHome'
import LoginForm from './components/LoginForm'

function App() {
  const [ loadHomeComponent, setLoadHomeComponent ] = useState('home')

  const componentToLoad = () => {
    if (loadHomeComponent === 'login') {
      return (<LoginForm />)
    } else if (loadHomeComponent === 'about') {
      return (<h1>About Us</h1>)
    } else if (loadHomeComponent === 'contact') {
      return (<h1>Contact Us</h1>)
    } else  if (loadHomeComponent === 'home') {
      return (<h1>Home</h1>)
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
