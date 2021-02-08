import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const SignUpConfirmation = ({ setLoadHomeComponent }) => {
  const handleClick = e => {
    e.preventDefault()

    setLoadHomeComponent('logIn')
  }

  return (
    <Col className='d-flex align-items-center'>
      <Container className='h-auto bg-dark'>
        <Row>
          <Col>
            <h1 className='text-white text-center'>Sign Up Confirmation</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-white text-center'>You have now been signed up to FoodApp! <br/> Please <a className='font-italic text-decoration-underline' onClick={handleClick}>return to the Log In page</a> to log into the app.</p>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}

export default SignUpConfirmation