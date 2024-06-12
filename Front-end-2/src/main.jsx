
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter  } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
 
import { signUp } from './Firebase/Signup.js';
import {signIn} from './Firebase/Signin.js';
import { signOutUser } from './Firebase/Signout.js';
 
document.getElementById('sign-up-button').addEventListener('click', () => {
  const email = document.getElementById('sign-up-email').value;
  const password = document.getElementById('sign-up-password').value;
  signUp(email, password);
});
 
document.getElementById('sign-in-button').addEventListener('click', () => {
  const email = document.getElementById('sign-in-email').value;
  const password = document.getElementById('sign-in-password').value;
  signIn(email, password);
});
 
document.getElementById('sign-out-button').addEventListener('click', () => {
  signOutUser();
});
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
 