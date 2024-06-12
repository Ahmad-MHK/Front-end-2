
// src/LoginForm.js
import React, { useState } from 'react';
import '../css/loginform.css';
 
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };
 
  return (
   
      <form className="login-form" onSubmit={handleSubmit}>
     
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
 
  );
};
 
export default LoginForm;
 