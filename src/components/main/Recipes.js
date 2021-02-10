import React from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import RecipeIndividual from './RecipeIndividual'
import RecipeIngredients from './RecipeIngredients'
// import RecipesCategories from './RecipesCategories'
// import RecipesList from './RecipesList'

const Recipes = () => {
  return(
    <Row className='d-flex h-100 pt-5'>
      <Col className='bg-secondary col-3'>
        <RecipeIngredients />
      </Col>
      <Col className='col-9'>
        <RecipeIndividual />
      </Col>
    </Row>
  )
}

export default Recipes