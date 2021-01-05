import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='loginForm'>
      <form className='login'>
        <label htmlFor='email' className='formElement'>Email</label>
        <input type='email' name='email' id='loginEmail' className='formElement' required></input><br/>
        <label htmlFor='password' className='formElement'>Password</label>
        <input type='password' name='password' id='password' className='formElement' required></input><br/><br/>
        <input type='submit' value='Log In' className='formElement submit'></input>
      </form>
      <form className='signup'>
        <label htmlFor='email' className='formElement'>Email</label>
        <input type='email' name='email' id='signUpEmail' className='formElement' required></input><br/><br/>
        <input type='submit' value='Sign Up' className='formElement submit'></input>
      </form>
    </div>
  )
}

export default LoginForm