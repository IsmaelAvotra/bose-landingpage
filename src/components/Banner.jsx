import React, { useState, useEffect } from 'react'
import './Banner.css'

import logo from '../assets/logo.svg'
import head from '../assets/head.png'
import banner from '../assets/banner.png'
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineDown,
  AiOutlineMenu,
} from 'react-icons/ai'

import { IoMdClose } from 'react-icons/io'

const Banner = () => {
  const [showLinks, setShowLinks] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      setShowLinks(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <section className='banner'>
      <div className='navigation'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='bose logo' />
          </a>
        </div>
        <div className={`links ${showLinks ? 'active' : 'null'}`}>
          <nav>
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
            </ul>
          </nav>
          <div className='icons'>
            <AiOutlineShoppingCart />
            <AiOutlineSearch />
            <div className='profile'>
              <img src={head} alt='profile' />
              <AiOutlineDown className='down' />
            </div>
          </div>
        </div>
        <div
          className='menu'
          onClick={() => {
            setShowLinks(!showLinks)
          }}
        >
          {showLinks ? <IoMdClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <div className='content'>
        <div className='left' data-aos='fade-right'>
          <h1>
            QuietComfort <br /> 35 wireless <br /> headphones II
          </h1>
          <div className='colors'>
            <span>Select your color:</span>
            <div className='circle-colors'>
              <div className='clr active silver '>
                <div className='circle active'>
                  <div></div>
                </div>
                <p>silver</p>
              </div>
              <div className='clr yellow'>
                <div className='circle'>
                  <div></div>
                </div>
                <p>Yellow</p>
              </div>
              <div className='clr gray'>
                <div className='circle'>
                  <div></div>
                </div>
                <p>gray</p>
              </div>
              <div className='clr orange'>
                <div className='circle'>
                  <div></div>
                </div>
                <p>orange</p>
              </div>
              <div className='clr red'>
                <div className='circle'>
                  <div></div>
                </div>
                <p>red</p>
              </div>
            </div>
          </div>
          <div className='prices'>
            <p>$229.95</p>
            <button className='btn'>Buy now</button>
          </div>
        </div>
        <div className='right' data-aos='fade-left'>
          <img src={banner} alt='bose image' />
        </div>
      </div>
    </section>
  )
}

export default Banner
