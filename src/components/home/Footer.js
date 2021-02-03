import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <Container className="fixed-bottom bg-secondary" fluid>
      <Row>
        <Col>
          <p className="text-white">Footer</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer