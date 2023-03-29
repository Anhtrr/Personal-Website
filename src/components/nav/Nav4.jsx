import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
import {FiHome, FiUser} from 'react-icons/fi'
import {BiWrench} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {RxCamera} from 'react-icons/rx'
import {BsKeyboard} from 'react-icons/bs'


const Nav4 = () => {
  const [activeTab, setActiveTab] = useState('#');

  return (
    <nav>
      <Link to='/' onClick={() => setActiveTab('/')} className={activeTab === '/' ? 'active' : ''}><FiHome/></Link>
      <Link to='/PhotoII' onClick={() => setActiveTab('/PhotoII')} className={activeTab === '/PhotoII' ? 'active' : ''}><RxCamera/></Link>
    </nav>
  )
}

export default Nav4