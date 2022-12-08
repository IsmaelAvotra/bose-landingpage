import React from 'react'
import './Overview.css'

import overview from '../assets/overview.png'

const Overview = () => {
  return (
    <section className='overview'>
      <div className='title'>
        <h2>Overview</h2>
      </div>
      <div className='content'>
        <div className='left' data-aos='fade-right'>
          <img src={overview} alt='photo' />
        </div>
        <div className='right' data-aos='fade-left'>
          <h3>
            Perfect sound <br /> immersive world
          </h3>
          <p>
            QuietComfort 35 wireless headphones II are engineered with renowned
            noise cancellation. With the Google Assistant and Amazon Alexa
            built-in, you have instant access to millions of songs, playlists
            and more—hands free.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Overview
