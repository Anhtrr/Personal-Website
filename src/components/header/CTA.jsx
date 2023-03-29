import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className="cta">
        <Link to='/Resume'className='btn'>MY RESUME</Link>
        <Link to="/Contact" className='btn btn-primary'>CONTACT ME</Link>
    </div>
  )
}

export default CTA