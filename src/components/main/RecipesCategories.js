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
    const property = e.target.name

    if(!(property==='ingredients' || property==='instructions')) {
      const newRecipe = { ...recipe }
      if(property.includes('time')) {
        newRecipe.time[property.slice(5)] = e.target.value
      } else {
        newRecipe[property] = e.target.value
      }
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
                <Form.Row>
                  <Col className='col-8'>
                    <Form.Group controlId='confirmRecipeForm.ingredients'>
                      <Form.Label>Ingredients</Form.Label>
                      <Form.Control as='textarea' name='ingredients' rows={recipe.ingredients? recipe.ingredients.length + 1: 10} defaultValue={recipe.ingredients? recipe.ingredients.join('\n'): null} onChange={handleRecipeChange} />
                    </Form.Group>
                  </Col>
                  <Col className='col-4'>
                    <Form.Group controlId='confirmRecipeForm.prepTime'>
                      <Form.Label>Prep Time</Form.Label>
                      <Form.Control type='text' name='time.prep' value={recipe.time? recipe.time.prep: null} onChange={handleRecipeChange} />
                    </Form.Group>
                    <Form.Group controlId='confirmRecipeForm.cookTime'>
                      <Form.Label>Cook Time</Form.Label>
                      <Form.Control type='text' name='time.cook' value={recipe.time? recipe.time.cook: null} onChange={handleRecipeChange} />
                    </Form.Group>
                    <Form.Group controlId='confirmRecipeForm.servings'>
                      <Form.Label>Servings</Form.Label>
                      <Form.Control type='text' name='servings' value={recipe.servings? recipe.servings: null} onChange={handleRecipeChange} />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Group controlId='confirmRecipeForm.instructions'>
                  <Form.Label>Method</Form.Label>
                  <Form.Control as='textarea' rows={15} name='instructions' defaultValue={recipe.instructions? recipe.instructions.join('\n\n'): null} onChange={handleRecipeChange} />
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