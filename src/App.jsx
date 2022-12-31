import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Photo from './components/photography/Photo'
import Particle from './components/Particle'

const App = () => {
  

  return (
    <div>
      <Particle/>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Photo/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App