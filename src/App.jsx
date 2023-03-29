import React from 'react'
import Home from './pages/Home'
import Resume from './pages/Resume'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Photography from './pages/Photography'
import Journal from './pages/Journal'
import GalleryDisplay from './pages/GalleryDisplay'
import ViewPhoto from './pages/ViewPhoto'
//import Photographyy from './Photography'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Gallery from './components/photography/Gallery'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Photography/PhotoII" element={<Photography />}/>
        <Route path="/Photography/PhotoII/Journal" element={<Journal />}/>
        <Route path="/Photography/PhotoII/Photos" element={<GalleryDisplay />}/>
        <Route path="/Photography/PhotoII/Photos/:Collection" element={<GalleryDisplay />}/>
        <Route path="/Photography/PhotoII/Photos/:Collection/:PhotoID" element={<ViewPhoto />}/>
        <Route path="/Resume" element={<Resume/>}/>
        {/* <Route path="/photography/:collection" element={<Photographyy/>}/> */}
        <Route path="*" element={ <Navigate to ='/'/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App