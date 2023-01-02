import React from 'react'
import './footer.css'
import {RiLinkedinLine, RiInstagramLine, RiGithubLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANHTRR</a>

      <ul className='permalinks'>
        <li><a className='permalink' href="#">HOME</a></li>
        <li><a className='permalink' href="#about">ABOUT</a></li>
        <li><a className='permalink' href="#skills">SKILLS</a></li>
        <li><a className='permalink' href="#projects">PROJECTS</a></li>
        <li><a className='permalink' href="#photo">PHOTOGRAPHY</a></li>
        <li><a className='permalink' href="#contact">CONTACT</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/anhtrr/" target="_blank"><RiLinkedinLine/></a>
        <a href="https://www.instagram.com/theminimalistpix/" target="_blank"><RiInstagramLine/></a>
        <a href="https://github.com/Anhtrr" target="_blank"><RiGithubLine/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anhtrr. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer