import React from 'react'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'
import Particle from '../components/Particle'


const Home = () => {
  return (
    <div>
      <Particle/>
      <Header/>
      <Nav/>
      <Footer/>
    </div>
  )
}

export default Home