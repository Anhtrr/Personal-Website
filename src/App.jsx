import React from 'react'
import Home from './Home'
import Resume from './Resume'
import Photography from './Photography'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/myResume" element={<Resume/>}/>
        <Route path="/photography" element={<Photography/>}/>
        <Route path="/photography/:collection" element={<Photography/>}/>
        <Route path="*" element={ <Navigate to ='/'/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App