import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const RecipeIndividual = ({ recipe }) => {

  const styles = {
    overflowY: 'auto'
  }

  return(
    <Row className='pt-5 px-4 h-100' style={styles}>
      <Col>
        <Row className='my-3'>
          <Col className='col-3'>
            <Image src={recipe.image} fluid/>
          </Col>
          <Col className='col-9'>
            <Card>
              <Card.Body>
                <Card.Title as='h1'>{recipe.name}</Card.Title>
                <CardDeck>
                  <Card body>Prep Time:<br/> {recipe.time? recipe.time.prep: null}</Card>
                  <Card body>Cook Time:<br/> {recipe.time? recipe.time.cook: null}</Card>
                  <Card body>Servings: {recipe.servings}</Card>
                </CardDeck>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Method</Card.Title>
                {recipe.instructions? recipe.instructions.map((step, keyIndex) => {
                  return (
                    <p key={`step-${keyIndex}`}>{step}</p>
                  )
                }): null}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default RecipeIndividual