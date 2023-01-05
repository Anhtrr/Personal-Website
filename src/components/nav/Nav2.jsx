import React from 'react';
import './nav.css';
import {FiHome} from 'react-icons/fi'
import {RiProfileLine} from 'react-icons/ri'
import {RxCamera} from 'react-icons/rx'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Nav2 = () => {
  const [activeTab, setActiveTab] = useState('/myResume#');

  return (
    <nav>
      <Link to='/' onClick={() => setActiveTab('/')} className={activeTab === '/' ? 'active' : ''}><FiHome/></Link>
      <Link to='/myResume#' onClick={() => setActiveTab('/myResume#')} className={activeTab === '/myResume#' ? 'active' : ''}><RiProfileLine/></Link>
      <Link to='/' onClick={() => setActiveTab('#skills')} className={activeTab === '#skills' ? 'active' : ''}><RxCamera/></Link>
    </nav>
  )
}

export default Nav2