import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const RecipesCategories = ({ setRecipeUrl, showAddRecipe, setShowAddRecipe, showConfirmRecipe, setShowConfirmRecipe, handleScrapeRecipe, handleAddRecipe, recipe, setRecipe }) => {

  const handleCloseAddRecipe = () => setShowAddRecipe(false)
  const handleShowAddRecipe = () => setShowAddRecipe(true)
  const handleCloseConfirmRecipe = () => setShowConfirmRecipe(false)

  const handleUrlChange = e => {
    setRecipeUrl(e.target.value)
  }

  const handleRecipeChange = e => {
    let property = e.target.name

    if(!(property.includes('ingredient') || property==='instructions')) {
      const newRecipe = { ...recipe }
      if(property.includes('time')) {
        newRecipe.time[property.slice(5)] = e.target.value
      } else {
        newRecipe[property] = e.target.value
      }
      setRecipe(newRecipe)
    } else if(property.includes('ingredient')){
      const newRecipe = { ...recipe }

      let indexProperty = e.target.name.split('-')
      let [ index, property ] = indexProperty[1].split('.')

      newRecipe.ingredients[index][property] = e.target.value
      setRecipe(newRecipe)

    } else {
      const newProperty = e.target.value.split('\n')
      const newRecipe = { ...recipe }
      newRecipe[property] = newProperty
      setRecipe(newRecipe)
    }
  }

  return (
    <Container className='pt-2'>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleShowAddRecipe}>
            Add Recipe
          </Button>

          {/*URL Modal*/}
          <Modal show={showAddRecipe} onHide={handleCloseAddRecipe}>
            <Modal.Header closeButton>
              <Modal.Title>Add Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId='addRecipeForm'>
                  <Form.Label>Enter Recipe URL</Form.Label>
                  <Form.Control type='text' placeholder='Recipe URL' onChange={handleUrlChange}/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddRecipe}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleScrapeRecipe}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>

          {/*Confirm Recipe Modal*/}
          <Modal show={showConfirmRecipe} onHide={handleCloseConfirmRecipe} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId='confirmRecipeForm.name'>
                  <Form.Label>Recipe Name</Form.Label>
                  <Form.Control type='text' name='name' value={recipe.name} onChange={handleRecipeChange}/>
                </Form.Group>
                <Form.Group controlId='confirmRecipeForm.ingredients'>
                  <Form.Label>Ingredients</Form.Label>
                  {/* <Form.Control as='textarea' name='ingredients' rows={recipe.ingredients? recipe.ingredients.length + 1: 10} defaultValue={recipe.ingredients? recipe.ingredients.join('\n'): ''} onChange={handleRecipeChange} /> */}
                  {recipe.ingredients?
                    recipe.ingredients.map((ingredient, ingredientIndex) => {
                      return(
                        <div  key={`ingredient-${ingredientIndex}`} className='mb-4'>
                          <Form.Row>
                            <Col className='col-2'>
                              <Form.Control type='text' name={`ingredient-${ingredientIndex}.quantity`} defaultValue={ingredient.quantity} onChange={handleRecipeChange} />
                            </Col>
                            <Col className='col-2'>
                              <Form.Control type='text' name={`ingredient-${ingredientIndex}.unit`} defaultValue={ingredient.unit} onChange={handleRecipeChange} />
                            </Col>
                            <Col className='col-8'>
                              <Form.Control type='text' name={`ingredient-${ingredientIndex}.ingredient`} defaultValue={ingredient.ingredient} onChange={handleRecipeChange} />
                            </Col>
                          </Form.Row>
                          <Form.Row>
                            <Col className='col-8 ml-auto'>
                              <Form.Control type='text' name={`ingredient-${ingredientIndex}.notes`} placeholder='Notes' onChange={handleRecipeChange} />
                            </Col>
                          </Form.Row>
                        </div>
                      )
                    }):
                    <Form.Control as='textarea' />
                  }
                </Form.Group>
                <Form.Group controlId='confirmRecipeForm.prepTime'>
                  <Form.Label>Prep Time</Form.Label>
                  <Form.Control type='text' name='time.prep' value={recipe.time? recipe.time.prep: ''} onChange={handleRecipeChange} />
                </Form.Group>
                <Form.Group controlId='confirmRecipeForm.cookTime'>
                  <Form.Label>Cook Time</Form.Label>
                  <Form.Control type='text' name='time.cook' value={recipe.time? recipe.time.cook: ''} onChange={handleRecipeChange} />
                </Form.Group>
                <Form.Group controlId='confirmRecipeForm.servings'>
                  <Form.Label>Servings</Form.Label>
                  <Form.Control type='text' name='servings' value={recipe.servings? recipe.servings: ''} onChange={handleRecipeChange} />
                </Form.Group>
                <Form.Group controlId='confirmRecipeForm.instructions'>
                  <Form.Label>Method</Form.Label>
                  <Form.Control as='textarea' rows={15} name='instructions' defaultValue={recipe.instructions? recipe.instructions.join('\n\n'): ''} onChange={handleRecipeChange} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseConfirmRecipe}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleAddRecipe}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  )
}

export default RecipesCategories