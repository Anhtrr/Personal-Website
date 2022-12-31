import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Photo from './components/photography/Photo'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Skills/>
      <Projects/>
      <Photo/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App