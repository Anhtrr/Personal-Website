import React from 'react';
import './nav.css';
import {NavLink} from 'react-router-dom'
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
      <NavLink 
        to='/'
        exact="true"
        activeclassname="Home"
      >
        <FiHome/>
      </NavLink>
      <NavLink 
        to='/About'
        exact="true"
        activeclassname="About"
      >
        <FiUser/>
      </NavLink>
      <NavLink 
        to='/Skills'
        exact="true"
        activeclassname=""
      >
        <BiWrench/>
      </NavLink>
      <NavLink 
        to='/Projects'
        exact="true"
        activeclassname="Projects"
      >
        <BsKeyboard/>
      </NavLink>
      <NavLink 
        to='/Photography'
        exact="true"
        activeclassname="Photography"
      >
        <RxCamera/>
      </NavLink>
      <NavLink 
        to='/Contact'
        exact="true"
        activeclassname="Contact"
      >
        <MdOutlinePermContactCalendar/>
      </NavLink>
    </nav>
  )
}

export default Nav