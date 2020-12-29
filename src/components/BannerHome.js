import React from 'react'
import './BannerHome.css'

const BannerHome = () => {
  return(
    <div className='bannerHome'>
      <div className="placeholder">
        <span>Logo</span>
      </div>
      <nav className='navlinks'>
        <ul>
          <li><a className='navlink' href=''>About Us</a></li>
          <li><a className='navlink' href=''>Sign Up/Log In</a></li>
          <li><a className='navlink' href=''>Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default BannerHome