import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const RecipesCategories = ({ setRecipeUrl, show, setShow, handleSave }) => {

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleUrlChange = e => {
    setRecipeUrl(e.target.value)
  }

  return (
    <Container className='pt-2'>
      <Row>
        <Col>
          <>
            <Button variant="primary" onClick={handleShow}>
              Add Recipe
            </Button>

            <Modal show={show} onHide={handleClose}>
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
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleSave}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        </Col>
      </Row>
    </Container>
  )
}

export default RecipesCategories