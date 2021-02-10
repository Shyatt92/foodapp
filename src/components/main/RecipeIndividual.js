import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

const RecipeIndividual = () => {
  const recipe = {
    recipeName: 'Test Recipe',
    images: [
      'turkey-clementine-lunch-bowl-440-400-5b6264d.jpg'
    ],
    rating: 3,
    category: null,
    description: 'A tasty meal',
    source: 'Google',
    sourceUrl: 'https://www.google.com',
    prepTime: 30,
    cookTime: 30,
    totalTime: function() {
      return this.prepTime + this.cookTime
    },
    servings: 4,
    difficulty: 'Easy',
    method: 'Insert recipe method here',
    ingredients: {},
    notes: '',
    nutrition: {}
  }

  return(
    <Row className='pt-5 px-4'>
      <Col>
        <Row className='my-3'>
          <Col className='col-2'>
            <Image src={recipe.images[0]} thumbnail/>
          </Col>
          <Col className='col-10'>
            <Card>
              <Card.Body>
                <Card.Title as='h1'>{recipe.recipeName}</Card.Title>
                <Card.Subtitle>{recipe.description}</Card.Subtitle>
                <p className='small'>Source: {recipe.source}<br/>
                Source Url: <a href={recipe.sourceUrl} target='_blank' rel='noreferrer'>{recipe.sourceUrl}</a></p>
                <div>
                  <Row>
                    <Col>

                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Method</Card.Title>
                <Card.Text>
                  {recipe.method}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default RecipeIndividual