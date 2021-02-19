import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

const RecipeIndividual = () => {
  const recipe = {
    name: 'Chicken satay salad',
    ingredients: [
      '1tbsp tamari',
      '1tsp medium curry powder',
      '¼tsp ground cumin',
      '1 garlic clove, finely grated',
      '1tsp clear honey',
      '2 skinless chicken breast fillets (or use turkey breast)',
      '1tbsp crunchy peanut butter (choose a sugar-free version with no palm oil, if possible)',
      '1tbsp sweet chilli sauce',
      '1tbsp lime juice',
      'sunflower oil, for wiping the pan',
      '2 Little Gem lettuce hearts, cut into wedges',
      '¼ cucumber, halved and sliced',
      '1 banana shallot, halved and thinly sliced',
      'coriander, chopped',
      'seeds from ½ pomegranate'
    ],
    instructions: [
      'Pour the tamari into a large dish and stir in the curry powder, cumin, garlic and honey. Mix well. Slice the chicken breasts in half horizontally to make 4 fillets in total, then add to the marinade and mix well to coat. Set aside in the fridge for at least 1 hr, or overnight, to allow the flavours to penetrate the chicken.',
      'Meanwhile, mix the peanut butter with the chilli sauce, lime juice, and 1 tbsp water to make a spoonable sauce. When ready to cook the chicken, wipe a large non-stick frying pan with a little oil. Add the chicken and cook, covered with a lid, for 5-6 mins on a medium heat, turning the fillets over for the last min, until cooked but still moist. Set aside, covered, to rest for a few mins.',
      'While the chicken rests, toss the lettuce wedges with the cucumber, shallot, coriander and pomegranate, and pile onto plates. Spoon over a little sauce. Slice the chicken, pile on top of the salad and spoon over the remaining sauce. Eat while the chicken is still warm.'
    ],
    tags: [],
    time: {
      prep: '15 mins',
      cook: '10 mins',
      active: '',
      inactive: '',
      ready: '',
      total: ''
    },
    servings: '2',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-satay-salad-8f5b068.jpg'
  }

  const styles = {
    overflowY: 'auto'
  }

  return(
    <Row className='pt-5 px-4 h-100' style={styles}>
      <Col>
        <Row className='my-3'>
          <Col className='col-3'>
            <Image src={recipe.image} fluid/>
          </Col>
          <Col className='col-9'>
            <Card>
              <Card.Body>
                <Card.Title as='h1'>{recipe.name}</Card.Title>
                <CardDeck>
                  <Card body>Prep Time:<br/> {recipe.time.prep}</Card>
                  <Card body>Cook Time:<br/> {recipe.time.cook}</Card>
                  <Card body>Servings: {recipe.servings}</Card>
                </CardDeck>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Method</Card.Title>
                {recipe.instructions.map((step, keyIndex) => {
                  return (
                    <p key={`step-${keyIndex}`}>{step}</p>
                  )
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default RecipeIndividual