import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects';
import Agence from './pages/Agence';
import Navbar from './components/Navigation/Navbar';


const App = () => {
  

  return (
    <div >
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/agence' element={<Agence />}/>
      </Routes>
    </div>
  )
}

export default App
