import React, { useState, useEffect } from 'react'
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

import BannerMain from './components/main/BannerMain'
import Recipes from './components/main/Recipes'

import loginService from './services/login'
import signupService from './services/signup'
import recipeService from './services/recipe'

const App = () => {
  const [ loadComponent, setLoadComponent ] = useState('home')
  const [ userInfo, setUserInfo ] = useState({
    email: '',
    password: '',
    signUpEmail: '',
    firstName: '',
    surname: '',
    username: '',
    token: null,
    recipes: []
  })
  const [ individualRecipe, setIndividualRecipe ] = useState(null)

  useEffect(async () => {
    const loggedUserJSON = await window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = await JSON.parse(loggedUserJSON)
      const recipes = await recipeService.get({ user })
      setUserInfo({ ...userInfo, email: user.email, username: user.usename, firstName: user.firstName, surname: user.surname, token: user.token, recipes: recipes })
      recipeService.setToken(user.token)
      setLoadComponent('recipes')
    }
  }, [])

  const handleSignUp = async event => {
    event.preventDefault()
    await signupService.signUp(userInfo)

    setLoadComponent('signUpConfirmation')

    setUserInfo({
      email: '',
      password: '',
      signUpEmail: '',
      firstName: '',
      surname: '',
      username: '',
      token: null,
      recipes: []
    })
  }

  const handleLogin = async event => {
    event.preventDefault()

    const user = await loginService.login(userInfo)

    window.localStorage.setItem(
      'loggedUser', JSON.stringify(user)
    )

    recipeService.setToken(user.token)
    setUserInfo({ ...userInfo, email: user.email, username: user.username, firstName: user.firstName, surname: user.surname, token: user.token, recipes: user.recipes })
    setLoadComponent('recipes')
  }

  const componentToLoad = () => {
    if (loadComponent === 'home') {
      return (
        <HomePage />
      )
    } else if (loadComponent === 'aboutUs') {
      return (
        <AboutUs />
      )
    } else if (loadComponent === 'logIn') {
      return (
        <LoginForm
          setUserEmail={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
          setUserPassword={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
          setSignUpEmail={({ target }) => setUserInfo({ ...userInfo, signUpEmail: target.value })}
          userEmail={userInfo.email}
          userPassword={userInfo.password}
          userSignUpEmail={userInfo.signUpEmail}
          setLoadComponent={setLoadComponent}
          handleLogin={handleLogin}
        />
      )
    } else if (loadComponent === 'contactUs') {
      return (
        <ContactUs />
      )
    } else if(loadComponent === 'signUp') {
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
    } else if(loadComponent === 'signUpConfirmation') {
      return (
        <SignUpConfirmation setLoadHomeComponent={setLoadComponent} />
      )
    }
  }

  const mainComponentToLoad = () => {
    if (loadComponent === 'recipes') {
      return (
        <Recipes userInfo={userInfo} setUserInfo={setUserInfo} individualRecipe={individualRecipe} setIndividualRecipe={setIndividualRecipe} />
      )
    }
  }

  return (
    <Container className="bg-light vh-100" fluid>
      <Row>
        <Col className="p-0">
          {userInfo.token === null
            ? <BannerHome setLoadComponent={setLoadComponent} />
            : <BannerMain setLoadComponent={setLoadComponent} setUserInfo={setUserInfo} setIndividualRecipe={setIndividualRecipe} />
          }
        </Col>
      </Row>
      {userInfo.token === null
        ? componentToLoad()
        : mainComponentToLoad()
      }
    </Container>
  )
}

export default App
