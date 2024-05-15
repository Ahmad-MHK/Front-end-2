import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftBar from './LeftBar/LeftBar'
import Topbar from './RightSide/TopBar'
import ConnectionFirebase from "./Firebase/FirebaseConfig"

function App() {

  return (
    <div className="row">
      <LeftBar></LeftBar>
      <Topbar></Topbar>
    </div>
  )
}

export default App
