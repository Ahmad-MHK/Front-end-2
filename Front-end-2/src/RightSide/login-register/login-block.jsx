
import '../css/login-registerblock.css'
import React from 'react'
import LoginForm from '../login-register/loginform'
import { Link } from "react-router-dom";
function LoginBlock() {
 
    return (
        <div className="login-block">
            <div className='title'>
<div className='half-correct'>Login</div>
<Link to="/register" className='half-incorect'>Register</Link>
            </div>
            <LoginForm></LoginForm>
        </div>
            )
}
export default LoginBlock