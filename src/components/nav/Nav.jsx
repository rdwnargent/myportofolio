import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return(
    <nav>
       <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices /></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail/></a>
    
</nav>
  )
}
  
export default Nav
