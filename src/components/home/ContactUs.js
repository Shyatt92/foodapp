import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='contactUs'>
      <h1>Contact Us</h1>
      <form className='contactForm' onSubmit={handleSubmit}>
        <label htmlFor='message'>Message</label>
        <textarea name='message' id='message' placeholder='Enter Your Message Here'></textarea><br/>
        <div className='contactFormRow2'>
          <div className='contactFormRow2Email'>
            <label htmlFor='contactEmail'>Email</label><br/>
            <input type='email' name='email' id='contactEmail' className='email'></input>
          </div>
          <input type='submit' value='Send' className='submit'></input>
        </div>
      </form>
    </div>
  )
}

export default ContactUs