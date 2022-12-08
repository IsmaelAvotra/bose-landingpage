import React from 'react'
import './Slider.css'

import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'
import slide4 from '../assets/slide4.png'
import slide5 from '../assets/slide5.png'

// import swiper js
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation, Autoplay } from 'swiper'

const Sliders = () => {
  return (
    <section className='slider' data-aos='fade-up'>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        <div className='swiper'>
          <SwiperSlide>
            <div className='image1'>
              <img src={slide1} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image2'>
              <img src={slide2} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image3'>
              <img src={slide3} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image4'>
              <img src={slide4} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image5'>
              <img src={slide5} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image6'>
              <img src={slide2} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image7'>
              <img src={slide4} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image8'>
              <img src={slide1} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image9'>
              <img src={slide5} alt='slider' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='image10'>
              <img src={slide3} alt='slider' />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>
  )
}

export default Sliders
