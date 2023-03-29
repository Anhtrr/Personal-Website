import React from 'react'
import Gallery from '../components/photoII/Gallery'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'

const GalleryDisplay = () => {
  return (
    <div>
        <Particle/>
        <Nav/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default GalleryDisplay