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
          <Row key={`ingredient-${ingredientIndex}`}>
            <Col>
              <p className='text-white' onClick={handleRecipeClick}>{ingredient}</p>
            </Col>
          </Row>
        )
      }): null}
    </Container>
  )
}

export default RecipeIngredients