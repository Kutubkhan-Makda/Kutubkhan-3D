import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={()=>{setActive('');}}></Link>
      </div>
    </nav>
  )
}

export default Navbar