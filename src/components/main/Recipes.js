import React, { useState } from 'react'
import recipeService from '../../services/recipe'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import RecipeIndividual from './RecipeIndividual'
import RecipeIngredients from './RecipeIngredients'
import RecipesCategories from './RecipesCategories'
import RecipesList from './RecipesList'

const Recipes = ({ userInfo, setUserInfo, individualRecipe, setIndividualRecipe }) => {
  const [ recipeUrl, setRecipeUrl ] = useState('')
  const [ showAddRecipe, setShowAddRecipe ] = useState(false)
  const [ showConfirmRecipe, setShowConfirmRecipe ] = useState(false)
  const [ recipe, setRecipe ] = useState({})

  const scrapeRecipe = async event => {
    event.preventDefault()

    const response = await recipeService.scrape({ recipeUrl })

    setRecipe(response)
    setRecipeUrl('')

    setShowAddRecipe(false)
    setShowConfirmRecipe(true)
  }

  const addRecipe = async event => {
    event.preventDefault()

    const response = await recipeService.add({ recipe })
    const recipes = userInfo.recipes.concat(response)
    setUserInfo({ ...userInfo, recipes })
    setShowConfirmRecipe(false)
  }

  return(
    <Row className='d-flex h-100 pt-5'>
      <Col className='bg-dark col-3 h-100'>
        {individualRecipe?
          <RecipeIngredients recipe={individualRecipe} />:
          <RecipesCategories
            recipeUrl={recipeUrl}
            setRecipeUrl={setRecipeUrl}
            showAddRecipe={showAddRecipe}
            setShowAddRecipe={setShowAddRecipe}
            showConfirmRecipe={showConfirmRecipe}
            setShowConfirmRecipe={setShowConfirmRecipe}
            handleScrapeRecipe={scrapeRecipe}
            handleAddRecipe={addRecipe}
            recipe={recipe}
            setRecipe={setRecipe}
          /> }
      </Col>
      <Col className='col-9 h-100'>
        {individualRecipe?
          <RecipeIndividual recipe={individualRecipe} />:
          <RecipesList userInfo={userInfo} setIndividualRecipe={setIndividualRecipe} />
        }
      </Col>
    </Row>
  )
}

export default Recipes