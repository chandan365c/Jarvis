import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import ParticleEffect from './components/Particle.jsx';
import password_icon from './assets/lock-stroke-rounded.svg';
import email_icon from './assets/mail-stroke-rounded.svg';
import axios from 'axios';
import { useUser } from './UserContext.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLOGIN = (e) =>
  {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => 
      {
        console.log(result)
        if(result.data === "Successfully logged in")
        {
          setUser({email});
          navigate('/page2');
        }
        else
        {
          setError(result);
        }
      }
    )
    .catch(err => console.log(err))
  }

  return (
    <div className='login-main'>
      <ParticleEffect className="particle" />
      <div className="login-container-wrapper">
        <div className='login-container'>
          <h1>Login</h1>
          <form onSubmit={handleLOGIN}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img className='login-email-icon' src={email_icon} alt="email icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img className='login-password-icon' src={password_icon} alt="password icon" />
            <p>
              Don't have an account? <a href="/signup">Sign up here</a>
            </p>
            {error && (
              <p style={{ color: 'red', fontSize: '14px' }}>
                {error === 'User does not exist!'
                  ? 'User  not found. Please check your email and password.'
                  : 'Invalid email or password. Please try again.'}
              </p>
            )}
            <button className='login-button' type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;