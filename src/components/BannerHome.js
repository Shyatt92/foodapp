import React from 'react'
import './BannerHome.css'

const BannerHome = ({ setLoadHomeComponent }) => {
  const handleMouseOver = (event) => {
    const element = event.target
    element.style.backgroundColor = '#A8F0D0'
    element.style.color = '#1F526F'

    if (element.src) {
      if (element.src.includes('info-light.png')) {
        element.src = 'info-dark.png'
      } else if (element.src.includes('home-light.png')) {
        element.src = 'home-dark.png'
      } else if (element.src.includes('mail-light.png')) {
        element.src = 'mail-dark.png'
      }
    }
  }

  const handleMouseOut = (event) => {
    const element = event.target
    element.style.backgroundColor = '#1F526F'
    element.style.color = '#AAADC4'

    if (element.src) {
      console.log(element.src)
      if (element.src.includes('info-dark.png')) {
        element.src = 'info-light.png'
      } else if (element.src.includes('home-dark.png')) {
        element.src = 'home-light.png'
      } else if (element.src.includes('mail-dark.png')) {
        element.src = 'mail-light.png'
      }
    }
  }

  const handleClick = e => {
    e.preventDefault()
    setLoadHomeComponent(e.target.name ? e.target.name: 'home')
  }

  return(
    <div className='bannerHome'>
      <div className="placeholder" name='home' onClick={handleClick}>
        <span>Logo</span>
      </div>
      <nav className='navlinks'>
        <ul>
          <li><a onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='navlink' href='' name='about'>About Us</a></li>
          <li><a onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='navlink' href='' name='logIn'>Sign Up/Log In</a></li>
          <li><a onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='navlink' href='' name='contact'>Contact</a></li>
        </ul>
      </nav>
      <nav className='navicons'>
        <ul>
          <li><a className='navicon' href=''><img src='info-light.png' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt='About Us' name='about'></img></a></li>
          <li><a className='navicon' href=''><img src='home-light.png' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt='Sign Up/Log In' name='logIn'></img></a></li>
          <li><a className='navicon' href=''><img src='mail-light.png' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt='Contact' name='contact'></img></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default BannerHome