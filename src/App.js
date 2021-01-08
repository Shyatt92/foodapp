import React, { useState } from 'react'
import './App.css'
import BannerHome from './components/home/BannerHome'
import LoginForm from './components/home/LoginForm'
import HomePage from './components/home/HomePage'
import AboutUs from './components/home/AboutUs'
import ContactUs from './components/home/ContactUs'
import SignUp from './components/home/SignUp'
import Verification from './components/home/Verification'
import Banner from './components/main/Banner'

function App() {
  const [ loadHomeComponent, setLoadHomeComponent ] = useState('home')
  const [ loadAppComponent, setLoadAppComponent ] = useState('recipes')
  const [ userEmail, setUserEmail ] = useState('')
  const [ userFName, setUserFName ] = useState('')

  const appComponentToLoad = () => {
    if (loadAppComponent) {
      return (
        <div className='loaded'>
          <Banner setLoadAppComponent={setLoadAppComponent}/>
        </div>
      )
    }
  }

  const componentToLoad = () => {
    if (loadHomeComponent === 'logIn') {
      return (
        <div className='loaded'>
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
          <LoginForm setLoadHomeComponent={setLoadHomeComponent} setUserEmail={setUserEmail} />
        </div>
      )
    } else if (loadHomeComponent === 'about') {
      return (
        <div className='loaded'>
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
          <AboutUs />
        </div>
      )
    } else if (loadHomeComponent === 'contact') {
      return (
        <div className='loaded'>
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
          <ContactUs />
        </div>
      )
    } else  if (loadHomeComponent === 'home') {
      return (
        <div className='loaded'>
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
          <HomePage />
        </div>
      )
    } else if (loadHomeComponent === 'login') {
      return appComponentToLoad()
    } else if (loadHomeComponent === 'signup') {
      return (
        <div className='loaded'>
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
          <SignUp setLoadHomeComponent={setLoadHomeComponent} userEmail={userEmail} setUserFName={setUserFName} />
        </div>
      )
    } else if (loadHomeComponent === 'verification') {
      return (
        <div className='loaded'>
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
          <Verification userEmail={userEmail} userFName={userFName} />
        </div>
      )
    }
  }

  return (
    <div className="App">
      {componentToLoad()}
    </div>
  )
}

export default App
