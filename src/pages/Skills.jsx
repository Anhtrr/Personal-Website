import React from 'react'
import MySkills from '../components/skills/Skills'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'


const Skills = () => {
  return (
    <div>
        <Particle/>
        <MySkills/>
        <Nav/>
        <Footer/>
    </div>
  )
}

export default Skills