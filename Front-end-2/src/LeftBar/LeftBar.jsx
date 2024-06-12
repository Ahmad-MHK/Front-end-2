
import React from 'react'
import './LeftBar.css'
 
import { Link } from "react-router-dom";
function LeftBar() {
 
  return (
    <>
   
    <div className="Block">
      <div className="Main-block">
        {/* <img src=".\assets\4436481.png" alt="" className='image' /> */}
        <h2>Sportagram</h2>
      </div>
      <div className="Slaves-block">
        <a href="" className='text'>
        <img src="" alt="" />
        <Link to="/"><h3>Home</h3></Link>
        </a>
      </div>
      <div className="Slaves-block">
        <a href="" className='text'>
        <img src="" alt="" />
        <h3>Search</h3>
        </a>
      </div>
      <div className="Slaves-block">
        <a href="" className='text'>
        <img src="" alt="" />
        <h3>Explore</h3>
        </a>
      </div>
      <div className="Slaves-block">
        <a href="" className='text'>
        <img src="" alt="" />
        <h3>Message</h3>
        </a>
      </div>
      <div className="Slaves-block">
        <Link to='/CreatePostPage' >
        <img src="" alt="" />
        <h3>Create</h3>
        </Link>
      </div>
      <div className="Slaves-block">
        <a href="" className='text'>
        <img src="" alt="" />
        <Link to="/login"><h3>Profile</h3></Link>
        </a>
      </div>
    </div>
 
    </>
  )
}
 
export default LeftBar
 