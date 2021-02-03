import React from 'react'

import Col from 'react-bootstrap/Col'

const HomePage = () => {
  const containerStyles = {
    backgroundImage: 'URL("homepage-jumbo.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'right top',
    height: '400px',
  }

  return (
    <Col className="col-12 align-self-center d-flex align-items-center  justify-content-sm-start justify-content-center" style={containerStyles}>
      <p className="display-4 text-white">FoodApp</p>
    </Col>
  )
}

export default HomePage