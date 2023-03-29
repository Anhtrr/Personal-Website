import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import {RiLinkedinLine, RiInstagramLine, RiGithubLine} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <Link to="/" className='footer__logo'>ANHTRR</Link>

      <ul className='permalinks'>
        <li><Link className='permalink' to="/">HOME</Link></li>
        <li><Link className='permalink' to="/About">ABOUT</Link></li>
        <li><Link className='permalink' to="/Skills">SKILLS</Link></li>
        <li><Link className='permalink' to="/Projects">PROJECTS</Link></li>
        <li><Link className='permalink' to="/Photography">PHOTOGRAPHY</Link></li>
        <li><Link className='permalink' to="/Contact">CONTACT</Link></li>
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