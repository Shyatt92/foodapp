import React from 'react'

const Verification = ({ userEmail, userFName }) => {
  return (
    <div className='verification'>
      <h1>Email Verification</h1>
      <p>
        Hi {userFName},<br/>
        <br/>
        A verification email has been sent to {userEmail}.<br/>
        Please click the link in the email which will return you to the login page.
      </p>
    </div>
  )
}

export default Verification