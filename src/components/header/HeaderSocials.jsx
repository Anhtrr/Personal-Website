import React from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anhtrr/' target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='https://github.com/Anhtrr' target='_blank' rel="noreferrer"><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials