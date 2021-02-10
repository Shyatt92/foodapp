import React from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactUs = () => {
  return (
    <Row className='d-flex h-100 pt-5'>
      <Col className='d-flex align-items-center'>
        <Container className='h-auto bg-dark'>
          <Row className='my-5'>
            <Col>
              <Form className='w-75 mx-auto'>
                <Form.Row>
                  <Col>
                    <Form.Group controlId='contactUsForm.message'>
                      <Form.Label className='text-white'>Message</Form.Label>
                      <Form.Control as='textarea' rows={4} placeholder='Enter your message here.'/>
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col className='col-12 col-md-10'>
                    <Form.Group controlId='contactUsForm.email'>
                      <Form.Control type='email' placeholder='Your email address' />
                    </Form.Group>
                  </Col>
                  <Col className=''>
                    <Button className='w-100 text-center' variant='primary' type='submit'>
                      Send
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}

export default ContactUs