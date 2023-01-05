import React from 'react'
import './footer.css'
import {RiLinkedinLine, RiInstagramLine, RiGithubLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const Footer2 = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ANHTRR</a>

      <ul className='permalinks'>
        <li><Link className='permalink' to="/">HOME</Link></li>
        <li><Link className='permalink' to="/myResume">RESUME</Link></li>
        <li><Link className='permalink' to="/">PHOTOGRAPHY</Link></li>
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

export default Footer2