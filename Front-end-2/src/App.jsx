 
import { Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage'
import Loginpage from './pages/loginpage'
import Registerpage from './pages/registerpage';
import CreatePostPage from './pages/CreatePostPage';

function App() {
 
  return (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Loginpage />} />
    <Route path="/register" element={<Registerpage />} />
    <Route path="/CreatePostPage" element={<CreatePostPage/>} />
  </Routes>
 
  )
  }
 
export default App
 