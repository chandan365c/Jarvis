import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import ParticleEffect from './components/Particle.jsx';
import password_icon from './assets/lock-stroke-rounded.svg';
import email_icon from './assets/mail-stroke-rounded.svg';
import user_icon from './assets/user-stroke-rounded.svg';
import phone_icon from "./assets/phone-stroke-rounded.svg";
import axios from 'axios'
import { useUser } from './UserContext.jsx';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setUser} = useUser();


  const handleSubmit = (e) =>
  {
    e.preventDefault()
    if (password !== confirmPassword) 
    {
      setError('Passwords donot match!');
      return;
    }
    else
    {
      axios.post('http://localhost:3001/register', {username, phone, email, password})
      .then(result => 
        {
          console.log(result)
          if(result.data === "User with this email already exists!")
          {
            setError('Email already in use!');
          }
          else
          {
            setUser({email});
            navigate('/page2');
          }
        }
      )
      .catch(err => console.log(err))
    }
  }

  return (
    <div className='signup-main'>
      <ParticleEffect className="particle" />
      <div className="signup-container-wrapper">
        <div className="signup-container">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="UserName"
              placeholder="Username"
              pattern='^[a-zA-Z0-9_]{3,20}$'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <img className='signup-person-icon' src={user_icon} alt="user icon" />
            <input
              type="number"
              placeholder="Phone Number"
              pattern='\d{10}'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <img className='signup-phone-icon' src={phone_icon} alt="phone icon" />
            <input
              type="email"
              placeholder="Email"
              pattern='[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img className='signup-email-icon' src={email_icon} alt="email icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img className='signup-password-icon-1' src={password_icon} alt="password icon" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <img className='signup-password-icon-2' src={password_icon} alt="password icon" />

            <p className='login-text'>
              Already have an account? <a href="/login">Login here</a>
            </p>

            {error && <p className='error-message'>{error}</p>}

            <button className='signup-button' type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;