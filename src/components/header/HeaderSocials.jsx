import React from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anhtrr/' target='_blank'><FaLinkedin/></a>
        <a href='https://github.com/Anhtrr' target='_blank'><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials