import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftBar from './LeftBar/LeftBar'
import ConnectionFirebase from "./Firebase/FirebaseConfig"

function App() {

  return (
    <>
      <LeftBar></LeftBar>
    </>
  )
}

export default App
