import React from 'react'
import './SignUp.css'

const SignUp = ({ setLoadHomeComponent, userEmail, setUserFName }) => {
  const handleChange = e => {
    setUserFName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoadHomeComponent('verification')
  }

  return (
    <div className='signUp'>
      <h1>Sign Up</h1>
      <form className='signUpForm' onSubmit={handleSubmit}>
        <div className='nameFields'>
          <div className='nameField'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' name='fname' className='fname' id='fname' onChange={handleChange}></input>
          </div>
          <div className='nameField'>
            <label htmlFor='sname'>Surname</label>
            <input type='text' name='sname' className='sname' id='sname'></input>
          </div>
        </div>
        <div className='formElement'>
          <label htmlFor='email'>Email</label><br/>
          <input type='email' name='email' className='signUpEmail' id='signUpEmail' value={userEmail}></input>
        </div>
        <div className='formElement'>
          <label htmlFor='password'>Password</label><br/>
          <input type='password' name='password' className='password' id='password'></input>
        </div>
        <input type='submit' value='Sign Up' className='submit'></input>
      </form>
    </div>
  )
}

export default SignUp