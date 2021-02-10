import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const LoginForm = ({ setUserEmail, setUserPassword, setSignUpEmail, userEmail, userPassword, signUpEmail, setLoadComponent, handleLogin }) => {
  const handleSignUpClick = e => {
    e.preventDefault()
    setLoadComponent(e.target.name)
  }

  return (
    <Row className='d-flex h-100 pt-5'>
      <Col className="d-flex align-items-center">
        <Container className="bg-dark h-50">
          <Row className='h-100'>
            <Col className="col-12 d-md-none py-3" >
              <Tabs defaultActiveKey="login" id="loginFormTabs">
                <Tab eventKey="login" title="Login">
                  <Form className="w-75 mx-auto my-5">
                    <Form.Group controlId="tabLoginEmail">
                      <Form.Label className="text-white">Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={setUserEmail} required />
                    </Form.Group>

                    <Form.Group controlId="tabLoginPassword">
                      <Form.Label className="text-white">Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={userPassword} onChange={setUserPassword} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Log In
                    </Button>
                  </Form>
                </Tab>
                <Tab eventKey="signUp" title="Sign Up">
                  <Form className="w-75 mx-auto my-5" name='signUp' onSubmit={handleSignUpClick}>
                    <Form.Group controlId="tabSignUpEmail">
                      <Form.Label className="text-white">Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={signUpEmail} onChange={setSignUpEmail} required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </Form>
                </Tab>
              </Tabs>
            </Col>
            <Col className="col-6 d-none d-md-flex border border-white">
              <Form className="w-75 my-auto mx-auto" onSubmit={handleLogin}>
                <Form.Group controlId="formLoginEmail">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={userEmail} onChange={setUserEmail} required />
                </Form.Group>

                <Form.Group controlId="formLoginPassword">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={userPassword} onChange={setUserPassword} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Log In
                </Button>
              </Form>
            </Col>
            <Col className="col-6 d-none d-md-flex border border-white">
              <Form className="w-75 my-auto mx-auto" name='signUp' onSubmit={handleSignUpClick}>
                <Form.Group controlId="formSignUpEmail">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={signUpEmail} onChange={setSignUpEmail} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}

export default LoginForm