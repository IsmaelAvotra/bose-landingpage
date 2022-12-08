import React from 'react'
import './Footer.css'

import logo from '../assets/footerlogo.svg'

const Footer = () => {
  return (
    <section className='footer'>
      <img src={logo} alt='footer logo' />
      <ul>
        <li>
          <a href='/'>Headphones</a>
        </li>
        <li>
          <a href='/'>Speakers</a>
        </li>
        <li>
          <a href='/'>Audio sunglasses</a>
        </li>
        <li>
          <a href='/'>Support</a>
        </li>
        <li>
          <a href='/'>Contact</a>
        </li>
      </ul>
    </section>
  )
}

export default Footer
