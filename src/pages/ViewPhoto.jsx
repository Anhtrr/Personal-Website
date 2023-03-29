import React from 'react'
import ViewPhotos from '../components/photoII/ViewPhotos'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'

const ViewPhoto = () => {
  return (
    <div>
        <Particle/>
        <Nav/>
        <ViewPhotos/>
        <Footer/>
    </div>
  )
}

export default ViewPhoto