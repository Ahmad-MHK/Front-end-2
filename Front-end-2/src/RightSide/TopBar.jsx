import React from 'react'
import './RightSide.css'


function Topbar() {

  return (
    <>
    <div className="block-TopBar">
        <div className="leftmove"></div>
        <a href=""><div className="ForYou"><h2 className='text'>Foryou</h2></div></a>
        <h2>|</h2>
        <a href=""><div className="following"><h2 className='text'>Following</h2></div></a>
    </div>
    </>
  )
}

export default Topbar
