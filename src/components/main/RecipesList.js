import React from 'react'

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RecipesList = ({ userInfo, setIndividualRecipe }) => {
  return(
    <CardDeck className='pt-5 px-4' style={{ overflowY: 'auto' }}>
      <Row className='row-cols-3 w-100 mx-auto'>
        {userInfo.recipes? userInfo.recipes.map((recipe, recipeIndex) => {
          const handleClick = () => {
            setIndividualRecipe(recipe)
          }
          return (
            <Col key={`recipe-${recipeIndex}`}>
              <Card className='mb-2 mx-auto' style={{ maxWidth: '250px' }} onClick={handleClick}>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                  <Card.Title className='text-center'>{recipe.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          )
        }): null}
      </Row>
    </CardDeck>
  )
}

export default RecipesList