import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const sectionText = {
  description: ' Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  services: 'Services Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const AboutUs = () => {
  return (
    <Row className='d-flex h-100 pt-5'>
      <Col className="d-flex align-items-center">
        <Container className="h-auto bg-dark">
          <Row className="my-2">
            <Col>
              <h1 className="text-white text-center">FoodApp</h1>
            </Col>
          </Row>
          <Row className="justify-content-around h-auto my-4">
            <Col className="col-12 d-md-none">
              <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                <Tab eventKey="description" title="Description">
                  <p className="bg-white">{sectionText.description}</p>
                </Tab>
                <Tab eventKey="services" title="Services Offered">
                  <p className="bg-white">{sectionText.services}</p>
                </Tab>
              </Tabs>
            </Col>
            <Col className="bg-light col-4 d-none d-md-block">
              <p>{sectionText.description}</p>
            </Col>
            <Col className="bg-light col-6 d-none d-md-block">
              <p>{sectionText.services}</p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  )
}

export default AboutUs