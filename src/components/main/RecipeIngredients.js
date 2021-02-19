import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RecipeIngredients = () => {
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
      'seeds from ½ pomegranate',
      'Chicken',
      'Celery',
      'Somthing'
    ],
    instructions: [
      'Pour the tamari into a large dish and stir in the curry powder, cumin, garlic and honey. Mix well. Slice the chicken breasts in half horizontally to make 4 fillets in total, then add to the marinade and mix well to coat. Set aside in the fridge for at least 1 hr, or overnight, to allow the flavours to penetrate the chicken.',
      'Meanwhile, mix the peanut butter with the chilli sauce, lime juice, and 1 tbsp water to make a spoonable sauce. When ready to cook the chicken, wipe a large non-stick frying pan with a little oil. Add the chicken and cook, covered with a lid, for 5-6 mins on a medium heat, turning the fillets over for the last min, until cooked but still moist. Set aside, covered, to rest for a few mins.',
      'While the chicken rests, toss the lettuce wedges with the cucumber, shallot, coriander and pomegranate, and pile onto plates. Spoon over a little sauce. Slice the chicken, pile on top of the salad and spoon over the remaining sauce. Eat while the chicken is still warm.'
    ],
    tags: [],
    time: {
      prep: '15 mins',
      cook: '5 mins10 mins',
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

  const handleRecipeClick = e => {
    e.target.style.textDecoration === "line-through" ? e.target.style.textDecoration = "none": e.target.style.textDecoration = "line-through"
  }


  return(
    <Container className='pt-5 h-100' style={styles}>
      {recipe.ingredients.map((ingredient, ingredientIndex) => {
        return (
          <Row key={`ingredient-${ingredientIndex}`}>
            <Col>
              <p className='text-white' onClick={handleRecipeClick}>{ingredient}</p>
            </Col>
          </Row>
        )
      })}
    </Container>
  )
}

export default RecipeIngredients