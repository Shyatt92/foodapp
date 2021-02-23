import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RecipeIngredients = ({ recipe }) => {
  const styles = {
    overflowY: 'auto'
  }

  const handleRecipeClick = e => {
    e.target.style.textDecoration === "line-through" ? e.target.style.textDecoration = "none": e.target.style.textDecoration = "line-through"
  }


  return(
    <Container className='pt-5 h-100' style={styles}>
      {recipe.ingredients? recipe.ingredients.map((ingredient, ingredientIndex) => {
        return (
          <div key={`ingredient-${ingredientIndex}`}>
            <Row>
              <Col>
                <p className='text-white' onClick={handleRecipeClick}>{`${ingredient.quantity ? ingredient.quantity: ''} ${ingredient.unit? ingredient.unit: ''} ${ingredient.ingredient? ingredient.ingredient: ''}`}</p>
              </Col>
            </Row>
            {ingredient.notes?
              <Row className='ml-auto'>
                <Col className='ml-auto'>
                  <p className='text-white'><em>{`Note: ${ingredient.notes}`}</em></p>
                </Col>
              </Row>:
              null
            }
          </div>
        )
      }): null}
    </Container>
  )
}

export default RecipeIngredients