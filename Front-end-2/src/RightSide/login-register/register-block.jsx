
import '../css/login-registerblock.css'
import React from 'react'
import RegisterForm from './registerform'
import { Link } from "react-router-dom";
 
 
function RegisterBlock() {
 
    return (
        <div className="register-block">
            <div className='title'>
            <Link to="/login" className='half-incorect'>Login</Link>
<div className='half-correct'>Register</div>
            </div>
            <RegisterForm></RegisterForm>
        </div>
       
            )
}
export default RegisterBlock