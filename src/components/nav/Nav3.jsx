import React from 'react';
import './nav.css';
import {FiHome} from 'react-icons/fi'
import {RiProfileLine} from 'react-icons/ri'
import {RxCamera} from 'react-icons/rx'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Nav3 = () => {
  const [activeTab, setActiveTab] = useState('/photography/0');

  return (
    <nav>
      <Link to='/' onClick={() => setActiveTab('/')} className={activeTab === '/' ? 'active' : ''}><FiHome/></Link>
      <Link to='/myResume' onClick={() => setActiveTab('/myResume')} className={activeTab === '/myResume' ? 'active' : ''}><RiProfileLine/></Link>
      <Link to='/photography/0' onClick={() => setActiveTab('/photography/0')} className={activeTab === '/photography/0' ? 'active' : ''}><RxCamera/></Link>
    </nav>
  )
}

export default Nav3