import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post(
        'https://mern-blog-app-api-hyra.onrender.com/api/auth/register',
        {
          username,
          email,
          password,
        }
      )
      res.data && setSuccess(true)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className='registerInput'
          type='text'
          placeholder='Enter your username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className='registerInput'
          type='email'
          placeholder='Enter your email...'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className='registerInput'
          type='password'
          placeholder='Enter your password...'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='registerButton' type='submit'>
          Register
        </button>
      </form>
      <button className='registerLoginButton'>
        <Link className='link' to='/login'>
          Login
        </Link>
      </button>
      {error && <span className='errMsg'>Something went wrong</span>}
      {success && (
        <span className='succMsg'>Register successful! Please login</span>
      )}
    </div>
  )
}
