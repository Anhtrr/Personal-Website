import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/memoji.png';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Anh Tran</h1>
        <h5 className="text-light">A 4th Year Student @NYU CS</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='me' className='myimg'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header