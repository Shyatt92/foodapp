import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUpForm = ({
  signUpEmail, fName, surname, username, password, setSignUpEmail, setFName, setSurname, setUsername, setPassword
}) => {
  let confirmPassword

  const setConfirmPassword = e => {
    console.log(e.target.value)
    confirmPassword = e.target.value
  }

  const verifyPassword = () => {
    if (password !== confirmPassword) {
      document.getElementById('verifyMessage').style.color = 'red'
      document.getElementById('verifyMessage').innerHTML = 'Passwords do not match'
    } else {
      document.getElementById('verifyMessage').innerHTML = ''
    }
  }

  return (
    <Col className='d-flex align-items-center'>
      <Container className='bg-dark'>
        <Row>
          <Col>
            <Form className="mx-auto my-5 w-75">
              <Form.Row>
                <Col>
                  <Form.Group controlId='signUpFName'>
                    <Form.Label className='text-white'>First Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter First Name' value={fName} onChange={setFName} required/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='signUpSurname'>
                    <Form.Label className='text-white'>Surname</Form.Label>
                    <Form.Control type='text' placeholder='Enter Surname' value={surname} onChange={setSurname} required/>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group controlId="tabSignUpEmail">
                    <Form.Label className="text-white">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={signUpEmail} onChange={setSignUpEmail} required/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='signUpUsername'>
                    <Form.Label className='text-white'>Username</Form.Label>
                    <Form.Control type='text' placeholder='Choose Username' value={username} onChange={setUsername} required/>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group controlId='signUpPassword'>
                    <Form.Label className='text-white'>Password</Form.Label>
                    <Form.Control type='password' placeholder='Create Password' value={password} onChange={setPassword} required/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId='signUpPasswordVerify'>
                    <Form.Label className='text-white'>Verify Password</Form.Label>
                    <Form.Control type='password' placeholder='Re-enter Password' value={confirmPassword} onChange={setConfirmPassword} onKeyUp={verifyPassword} required/>
                    <span id='verifyMessage'></span>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Col>
  )
}

export default SignUpForm