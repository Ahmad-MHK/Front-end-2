import React, { useState } from 'react';
import {  createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore,collection, doc, setDoc  } from 'firebase/firestore';
import { Link } from "react-router-dom";

import db,{ auth } from '../../Firebase/FirebaseConfig';
import '../css/registerform.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore with user.uid as document ID
      await setDoc(doc(db, 'logins', user.uid), {
        uid: user.uid,
        email: user.email,
        username: username,
        password: password
      });
      window.location.href = '/';
      alert("You have loged in");
    } catch (error) {
      console.error('Error registering user:', error.message);
      // Handle error, show error message to the user, etc.
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="input-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleSubmit}>Register</button>
    </form>
  );
};

export default RegisterForm;
