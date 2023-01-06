import React from 'react'
import { useParams } from 'react-router-dom'
import Particle from './components/Particle'
import Footer2 from './components/footer/Footer2'
import Nav3 from './components/nav/Nav3'
import Gallery from './components/photography/Gallery'
import Gallery1 from './components/photography/Gallery1'
import Gallery2 from './components/photography/Gallery2'
import Gallery3 from './components/photography/Gallery3'

const Photography = () => {
    let collectionID = useParams();

    return (
    <div>
      <Particle/>
      <Nav3/>
      {!collectionID.collection &&
        <Gallery/>
      }
      {collectionID.collection === '0' &&
        <Gallery/>
      }
      {collectionID.collection === '1' &&
        <Gallery1/>
      }
      {collectionID.collection === '2' &&
        <Gallery2/>
      }
      {collectionID.collection === '3' &&
        <Gallery3/>
      }
      <Footer2/>
    </div>
  )
}

export default Photography