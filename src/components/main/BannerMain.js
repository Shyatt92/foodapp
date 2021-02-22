import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const BannerHome = ({ setLoadComponent, setUserInfo, setIndividualRecipe }) => {

  const handleClick = e => {
    setLoadComponent(e.target.name)
    setIndividualRecipe(null)
  }

  const handleLogOut = e => {
    e.preventDefault()
    window.localStorage.removeItem('loggedUser')
    setLoadComponent('home')
    setUserInfo({
      email: '',
      password: '',
      signUpEmail: '',
      firstName: '',
      surname: '',
      username: '',
      token: null
    })
  }

  return (
    <Navbar collapseOnSelect className="navbar-dark w-100" fixed="top" bg="dark" expand="sm" variant='dark' >
      <Navbar.Brand href="#home">FoodApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#recipes" name="recipes" onClick={handleClick}>Recipes</Nav.Link>
          <Nav.Link href="#stock" name="stock" onClick={handleClick}>Stock</Nav.Link>
          <Nav.Link href="#mealPlan" name="mealPlan" onClick={handleClick}>Meal Plan</Nav.Link>
          <Nav.Link href="#shopping" name="shopping" onClick={handleClick}>Shopping</Nav.Link>
          <Nav.Link href='#logOut' name='logOut' onClick={handleLogOut}>Log Out</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BannerHome