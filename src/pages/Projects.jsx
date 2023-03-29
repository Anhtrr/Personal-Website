import React from 'react'
import MyProjects from '../components/projects/Projects'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'

const Projects = () => {
  return (
    <div>
        <Particle/>
        <Nav/>
        <MyProjects/>
        <Footer/>
    </div>
  )
}

export default Projects