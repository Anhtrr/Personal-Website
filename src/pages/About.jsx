import React from 'react'
import AboutMe from '../components/about/About'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'

const About = () => {
  return (
    <div>
        <Particle/>
        <AboutMe/>
        <Nav/>
        <Footer/>
    </div>
  )
}

export default About