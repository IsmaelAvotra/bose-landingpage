import React from 'react'
import './SignUp.css'

import girl from '../assets/girl.png'

const SignUp = () => {
  return (
    <section className='sign-up'>
      <div className='left' data-aos='fade-up'>
        <div className='image'>
          <img src={girl} alt='girl photo' />
        </div>
      </div>
      <div className='right' data-aos='fade-left'>
        <h3>Being first has its perks</h3>
        <p>
          Sign up to get more information about Bose, exclusive first looks at
          promotions, new products and more.
        </p>
        <div className='buttons'>
          <input type='email' placeholder='Your e-mail here' />
          <button>sign up</button>
        </div>
      </div>
    </section>
  )
}

export default SignUp
