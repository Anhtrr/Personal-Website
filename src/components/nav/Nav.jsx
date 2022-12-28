import React from 'react';
import './nav.css';
import {FiHome, FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {RxCamera} from 'react-icons/rx'
import {useState} from 'react'

const Nav = () => {
  const [activeTab, setActiveTab] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveTab('#')} className={activeTab === '#' ? 'active' : ''}><FiHome/></a>
      <a href='#about' onClick={() => setActiveTab('#about')} className={activeTab === '#about' ? 'active' : ''}><FiUser/></a>
      <a href='#experience'onClick={() => setActiveTab('#experience')} className={activeTab === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#services'onClick={() => setActiveTab('#services')} className={activeTab === '#services' ? 'active' : ''}><RxCamera/></a>
      <a href='#contact'onClick={() => setActiveTab('#contact')} className={activeTab === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar/></a>
    </nav>
  )
}

export default Nav