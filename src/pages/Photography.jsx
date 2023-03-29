import React from 'react'
import Photo from '../components/photography/Photo'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'

const Photography = () => {
  return (
    <div>
        <Particle/>
        <Nav/>
        <Photo/>
        <Footer/>
    </div>
  )
}

export default Photography