import React from 'react'
import './BannerHome.css'

const BannerHome = () => {
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

  return(
    <div className='bannerHome'>
      <div className="placeholder">
        <span>Logo</span>
      </div>
      <nav className='navlinks'>
        <ul>
          <li><a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='navlink' href=''>About Us</a></li>
          <li><a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='navlink' href=''>Sign Up/Log In</a></li>
          <li><a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='navlink' href=''>Contact</a></li>
        </ul>
      </nav>
      <nav className='navicons'>
        <ul>
          <li><a className='navicon' href=''><img src='info-light.png' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt='About Us'></img></a></li>
          <li><a className='navicon' href=''><img src='home-light.png' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt='Log In'></img></a></li>
          <li><a className='navicon' href=''><img src='mail-light.png' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} alt='Contact'></img></a></li>
        </ul>
      </nav>
    </div>
  )
}

export default BannerHome