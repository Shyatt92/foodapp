import React from 'react'

const Banner = ({ setLoadAppComponent }) => {
  const handleMouseOver = (event) => {
    const element = event.target
    element.style.backgroundColor = '#A8F0D0'
    element.style.color = '#1F526F'

    if (element.src) {
      if (element.src.includes('recipes-light.png')) {
        element.src = 'recipes-dark.png'
      } else if (element.src.includes('stock-light.png')) {
        element.src = 'stock-dark.png'
      } else if (element.src.includes('planner-light.png')) {
        element.src = 'planner-dark.png'
      } else if (element.src.includes('shopping-light.png')) {
        element.src = 'shopping-dark.png'
      }
    }
  }

  const handleMouseOut = (event) => {
    const element = event.target
    element.style.backgroundColor = '#1F526F'
    element.style.color = '#AAADC4'

    if (element.src) {
      if (element.src.includes('recipes-dark.png')) {
        element.src = 'recipes-light.png'
      } else if (element.src.includes('stock-dark.png')) {
        element.src = 'stock-light.png'
      } else if (element.src.includes('planner-dark.png')) {
        element.src = 'planner-light.png'
      } else if (element.src.includes('shopping-dark.png')) {
        element.src = 'shopping-light.png'
      }
    }
  }

  const handleClick = e => {
    e.preventDefault()
    setLoadAppComponent(e.target.name ? e.target.name: e.target.innerHTML.toLowerCase())
  }

  return (
    <div className='banner'>
      <div className="placeholder" name='home'>
        <span>Logo</span>
      </div>
      <nav className='navlinks'>
        <ul>
          <li className='navlink' value='recipes' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Recipes</li>
          <li className='navlink' name='stock' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Stock</li>
          <li className='navlink' name='planner' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Planner</li>
          <li className='navlink' name='shopping' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Shopping</li>
        </ul>
      </nav>
      <nav className='navicons'>
        <ul>
          <li className='navicon'><img src='recipes-light.png' alt='Recipes' name='recipes' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img></li>
          <li className='navicon'><img src='stock-light.png' alt='Stock' name='stock' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img></li>
          <li className='navicon'><img src='planner-light.png' alt='Planner' name='planner' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img></li>
          <li className='navicon'><img src='shopping-light.png' alt='Shopping' name='shopping' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img></li>
        </ul>
      </nav>
    </div>
  )
}

export default Banner