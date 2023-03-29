import React from 'react'
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './components/contact/Contact'
import Photography from './pages/Photography'
import Photographyy from './Photography'
import PhotoII from './pages/PhotoII'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Photography" element={<Photography />}/>
        <Route path="/Contact" element={<Contact />}/>

        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/photography/:collection" element={<Photographyy/>}/>
        <Route path="*" element={ <Navigate to ='/'/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App