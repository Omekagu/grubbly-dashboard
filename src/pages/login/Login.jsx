import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

function Login () {
  return (
    <div>
      {' '}
      Login Bitch
      <Link to='/home'>
        <p>Home</p>
      </Link>
    </div>
  )
}

export default Login
