import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftBar from './LeftBar/LeftBar'
import Topbar from './RightSide/TopBar'
import Store from './RightSide/Store'
import Post from './RightSide/Post'
import PostForm from './RightSide/postForm'
import db from "./Firebase/FirebaseConfig"


function App() {

  return (
    <div className="row">
      <LeftBar></LeftBar>
      <div className="Right">
      <Topbar></Topbar>
      <Store></Store>
      <Post></Post>
      <PostForm></PostForm> 
      </div>
    </div>
  )
}

export default App
