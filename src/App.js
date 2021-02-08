import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import BannerHome from './components/home/BannerHome'
import HomePage from './components/home/HomePage'
import AboutUs from './components/home/AboutUs'
import LoginForm from './components/home/LoginForm'
import SignUpForm from './components/home/SignUpForm'
import ContactUs from './components/home/ContactUs'
import SignUpConfirmation from './components/home/SignUpConfirmation'

import loginService from './services/login'
import signupService from './services/signup'

function App() {
  const [ loadHomeComponent, setLoadHomeComponent ] = useState('home')
  const [ userInfo, setUserInfo ] = useState({
    email: '',
    password: '',
    signUpEmail: '',
    firstName: '',
    surname: '',
    username: ''
  })

  const handleSignUp = async event => {
    event.preventDefault()
    await signupService.signUp(userInfo)

    setLoadHomeComponent('signUpConfirmation')

    setUserInfo({
      email: '',
      password: '',
      signUpEmail: '',
      firstName: '',
      surname: '',
      username: ''
    })
  }

  const handleLogin = async event => {
    event.preventDefault()

    const user = await loginService.login(userInfo)

    window.localStorage.setItem(
      'loggedUser', JSON.stringify(user)
    )

    setUserInfo({ ...userInfo, email: user.email, username: user.username, firstName: user.firstName, surname: user.surname })
  }

  const componentToLoad = () => {
    if (loadHomeComponent === 'home') {
      return (
        <HomePage />
      )
    } else if (loadHomeComponent === 'aboutUs') {
      return (
        <AboutUs />
      )
    } else if (loadHomeComponent === 'logIn') {
      return (
        <LoginForm
          setUserEmail={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
          setUserPassword={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
          setSignUpEmail={({ target }) => setUserInfo({ ...userInfo, signUpEmail: target.value })}
          userEmail={userInfo.email}
          userPassword={userInfo.password}
          userSignUpEmail={userInfo.signUpEmail}
          setLoadHomeComponent={setLoadHomeComponent}
          handleLogin={handleLogin}
        />
      )
    } else if (loadHomeComponent === 'contactUs') {
      return (
        <ContactUs />
      )
    } else if(loadHomeComponent === 'signUp') {
      return (
        <SignUpForm
          userInfo={userInfo}
          setSignUpEmail={({ target }) => setUserInfo({ ...userInfo, signUpEmail: target.value })}
          setFirstName={({ target }) => setUserInfo({ ...userInfo, firstName: target.value })}
          setSurname={({ target }) => setUserInfo({ ...userInfo, surname: target.value })}
          setUsername={({ target }) => setUserInfo({ ...userInfo, username: target.value })}
          setPassword={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
          handleSignUp={handleSignUp}
        />
      )
    } else if(loadHomeComponent === 'signUpConfirmation') {
      return (
        <SignUpConfirmation setLoadHomeComponent={setLoadHomeComponent} />
      )
    }
  }

  return (
    <Container className="bg-light vh-100" fluid>
      <Row>
        <Col className="p-0">
          <BannerHome setLoadHomeComponent={setLoadHomeComponent} />
        </Col>
      </Row>
      <Row className="d-flex h-100 pt-5">
        {componentToLoad()}
      </Row>
    </Container>
  )
}

export default App
