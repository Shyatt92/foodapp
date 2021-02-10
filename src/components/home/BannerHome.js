import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const BannerHome = ({ setLoadComponent }) => {

  const handleClick = e => {
    setLoadComponent(e.target.name)
  }

  return (
    <Navbar collapseOnSelect className="navbar-dark w-100" fixed="top" bg="dark" expand="sm" variant='dark' >
      <Navbar.Brand href="#home">FoodApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" name="home" onClick={handleClick}>Home</Nav.Link>
          <Nav.Link href="#aboutUs" name="aboutUs" onClick={handleClick}>About Us</Nav.Link>
          <Nav.Link href="#logIn" name="logIn" onClick={handleClick}>Sign Up/Log In</Nav.Link>
          <Nav.Link href="#contactUs" name="contactUs" onClick={handleClick}>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default BannerHome