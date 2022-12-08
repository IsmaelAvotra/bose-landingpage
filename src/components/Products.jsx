import React from 'react'
import './Products.css'

import { products } from '../data'

const Products = () => {
  return (
    <section className='products'>
      <div className='title'>
        <h2>Related products</h2>
      </div>
      <div className='content'>
        {products.map(({ id, image, price, name }) => {
          return (
            <div
              className='product'
              key={id}
              data-aos='fade-up'
              data-aos-duration='1000'
            >
              <div className='top'>
                <img src={image} alt='image product' />
              </div>
              <div className='bottom'>
                <h4>{name}</h4>
                <div className='details'>
                  <span>${price}</span>
                  <button className='btn-detail'>show details</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='show-all'>
        <button>Show All</button>
      </div>
    </section>
  )
}

export default Products
