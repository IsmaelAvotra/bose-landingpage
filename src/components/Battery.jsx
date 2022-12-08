import React from 'react'
import './Battery.css'

import guy from '../assets/guy.png'
import battery from '../assets/battery.png'

const Battery = () => {
  return (
    <section className='battery'>
      <div className='left' data-aos='fade-right'>
        <h2>Up to 20 hours battery life</h2>
        <p>
          Enjoy up to 20 hours of listening, enough time to pore through this
          entire playlist. So you can keep the music — or the quiet — going all
          day long. And when it finally runs down, a quick 15-minute charge
          gives you another 2.5 hours. Enjoy up to 20 hours of listening, enough
          time to pore through this entire playlist. So you can keep the music —
          or the quiet — going all day long. And when it finally runs down, a
          quick 15-minute charge gives you another 2.5 hours.
        </p>
      </div>
      <div className='right' data-aos='fade-left'>
        <div className='image'>
          <img src={guy} alt='guy photo' />
          <img src={battery} alt='battery' />
        </div>
      </div>
    </section>
  )
}

export default Battery
