import React from 'react';
import './nav.css';
import {FiHome, FiUser} from 'react-icons/fi'
import {BiWrench} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {RxCamera} from 'react-icons/rx'
import {BsKeyboard} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeTab, setActiveTab] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveTab('#')} className={activeTab === '#' ? 'active' : ''}><FiHome/></a>
      <a href='#about' onClick={() => setActiveTab('#about')} className={activeTab === '#about' ? 'active' : ''}><FiUser/></a>
      <a href='#skills'onClick={() => setActiveTab('#skills')} className={activeTab === '#skills' ? 'active' : ''}><BiWrench/></a>
      <a href='#projects'onClick={() => setActiveTab('#projects')} className={activeTab === '#projects' ? 'active' : ''}><BsKeyboard/></a>
      <a href='#photo'onClick={() => setActiveTab('#photo')} className={activeTab === '#photo' ? 'active' : ''}><RxCamera/></a>
      <a href='#contact'onClick={() => setActiveTab('#contact')} className={activeTab === '#contact' ? 'active' : ''}><MdOutlinePermContactCalendar/></a>
    </nav>
  )
}

export default Nav