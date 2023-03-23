import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import {logo, menu} from '../assets/index'
import { navLinks } from '../Constants'

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{setActive('');window.scrollTo(0,0);}}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Kutubkhan <span className='sm:block hidden'>Makda</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] cursor-pointer font-medium`} onClick={() => setActive(link.title)}><a href={`#${link.id}`}>{link.title}</a></li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={menu} alt="" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar