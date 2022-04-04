import React from 'react'
import logo from '../images/logo.svg'
import { DivHeader, DivNavbar } from '../styles/Header'

const Header = () => {
  return (
    <DivHeader>
        <img src={logo} alt="Logo" />
        <DivNavbar>
          <span className='titulos'>Features</span>
          <span className='titulos'>Team</span>
          <span className='titulos'>Sing In</span>
        </DivNavbar>
    </DivHeader>
  )
}

export default Header