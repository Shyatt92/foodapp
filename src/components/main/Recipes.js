import React, { useState } from 'react'
import recipeService from '../../services/recipe'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

//import RecipeIndividual from './RecipeIndividual'
//import RecipeIngredients from './RecipeIngredients'
import RecipesCategories from './RecipesCategories'
import RecipesList from './RecipesList'

const Recipes = () => {
  const [ recipeUrl, setRecipeUrl ] = useState('')
  const [ show, setShow ] = useState(false)

  const addRecipe = async event => {
    event.preventDefault()

    await recipeService.add(recipeUrl)

    setShow(false)
  }

  return(
    <Row className='d-flex h-100 pt-5'>
      <Col className='bg-dark col-3 h-100'>
        <RecipesCategories recipeUrl={recipeUrl} setRecipeUrl={setRecipeUrl} show={show} setShow={setShow} handleSave={addRecipe} />
      </Col>
      <Col className='col-9 h-100'>
        <RecipesList />
      </Col>
    </Row>
  )
}

export default Recipes