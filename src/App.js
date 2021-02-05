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
import ContactUs from './components/home/ContactUs'

//import loginService from './services/login'

function App() {
  const [ loadHomeComponent, setLoadHomeComponent ] = useState('home')
  const [ userInfo, setUserInfo ] = useState({})

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
        />
      )
    } else if (loadHomeComponent === 'contactUs') {
      return (
        <ContactUs />
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
