import React from 'react'
import PropTypes  from 'prop-types'


const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
                    Username <input
            id='username'
            type='text'
            name='username'
            onChange={handleUsernameChange}
            value={username}/>
        </div>

        <div>
                    Password <input
            id='password'
            type='password'
            name='password'
            onChange={handlePasswordChange}
            value={password}/>
        </div>
        <button id='loginButton' type='submit'>Login</button>
      </form>
    </div>
  )}
LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm