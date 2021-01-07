import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className="placeholder" name='home'>
        <span>Logo</span>
      </div>
      <nav className='navlinks'>
        <ul>
          <li><a className='navlink' href='' name='about'>Recipes</a></li>
          <li><a className='navlink' href='' name='logIn'>Stock</a></li>
          <li><a className='navlink' href='' name='contact'>Planner</a></li>
        </ul>
      </nav>
      <nav className='navicons'>
        <ul>
          <li><a className='navicon' href=''><img src='info-light.png' alt='About Us' name='about'></img></a></li>
          <li><a className='navicon' href=''><img src='home-light.png' alt='Sign Up/Log In' name='logIn'></img></a></li>
          <li><a className='navicon' href=''><img src='mail-light.png' alt='Contact' name='contact'></img></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Banner