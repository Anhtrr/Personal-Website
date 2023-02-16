import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className="cta">
        <Link to='/myResume'className='btn'>MY RESUME</Link>
        <a href="#contact" className='btn btn-primary'>CONTACT ME</a>
    </div>
  )
}

export default CTA