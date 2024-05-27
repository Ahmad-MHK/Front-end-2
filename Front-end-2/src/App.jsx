import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftBar from './LeftBar/LeftBar'
import Topbar from './RightSide/TopBar'
import Store from './RightSide/Store'
import Post from './RightSide/Post'
import ConnectionFirebase from "./Firebase/FirebaseConfig"

function App() {

  return (
    <div className="row">
      <LeftBar></LeftBar>
      <div className="Right">
      <Topbar></Topbar>
      <Store></Store>
      <Post></Post>
      </div>
    </div>
  )
}

export default App
