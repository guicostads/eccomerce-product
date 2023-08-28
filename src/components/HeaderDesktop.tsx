import React from 'react'
import Logo from '../images/logo.svg'

const HeaderDesktop = () => {
  return (
    <div className='w-full py-10 flex items-center justify-between border-b'>
     <div><img src={Logo} alt='logo' /></div>
     <nav>
      <ul className='flex gap-6'>
        <li ><a href='#home'>Home</a></li>
        <li ><a href='#home'>Home</a></li>
        <li ><a href='#home'>Home</a></li>
        <li ><a href='#home'>Home</a></li>
        
      </ul>
     </nav>
    </div>
  )
}

export default HeaderDesktop