import React from 'react'
import './Design.css'

import design from '../assets/design.png'
import plus from '../assets/plus.png'

const Design = () => {
  return (
    <section className='design'>
      <div className='title' data-aos='fade-up'>
        <h3>Premium design</h3>
        <p>
          When you want to take your music anywhere, you need headphones built
          to keep up. With impact-resistant materials, glass-filled nylon, and
          corrosion-resistant stainless steel, they’re engineered to survive
          life on the go.
        </p>
      </div>
      <div className='content' data-aos='zoom-in' data-aos-duration='3000'>
        <div className='image'>
          <img src={design} alt='design photo' />
          <div className='infos'>
            <div className='caract c1'>
              <img src={plus} />
              <div className='info active'>
                <span>Impact resistant</span>
                <p>Designed to handle life on the go.</p>
              </div>
            </div>
            <div className='caract c2'>
              <img src={plus} />
              <div className='info'>
                <span>Speak, swipe or tap.</span>
                <p>
                  Capacitive touch controls make Headphones 700 easy to use. The
                  right earcup features capacitive touch sensors, so you can
                  manage volume, calls and music without looking at your phone.
                </p>
              </div>
            </div>
            <div className='caract c3'>
              <img src={plus} />
              <div className='info'>
                <span>Modern, Sleek, Sophisticated.</span>
                <p>
                  The luxury is in the details. That’s why we choose materials{' '}
                  <br /> with meticulous care for Headphones 700. <br />
                </p>
              </div>
            </div>
            <div className='caract c4'>
              <img src={plus} />
              <div className='info'>
                <span>HIGH-FIDELITY AUDIO</span>
                <p>
                  Whether it’s music, videos or your favourite podcast, <br />{' '}
                  get closer to whatever you love with Bose Headphones 700
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Design
