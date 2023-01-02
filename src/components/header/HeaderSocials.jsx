import React from 'react'
import {FaLinkedin, FaGithubSquare, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/anhtrr/' target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='https://github.com/Anhtrr' target='_blank' rel="noreferrer"><FaGithubSquare/></a>
        <a href='https://www.instagram.com/theminimalistpix/' target='_blank' rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials