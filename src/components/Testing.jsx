import React from 'react'
import {Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Testing() {
  return (


    <div className='overflow-hidden border flex flex-col justify-center items-center border-black bg-red-500'>
            <Swiper
             className='w-80 rounded-3xl'
      modules={[Autoplay]}
      autoplay={{delay:5000}}
      slidesPerView={1}
    >
      <SwiperSlide><img src="chv1.jpg"  className=' object-fill' alt="ch" /></SwiperSlide>
      <SwiperSlide><img src="chv3.png" className=' object-fill' alt="ch" /></SwiperSlide>
      <SwiperSlide><img src="p-2.jpg" className=' object-fill' alt="ch" /></SwiperSlide>
        <div className='bg-black h-28 text-white w-full'>asdasdasd</div>
    </Swiper>

    </div>
  
  )
}
