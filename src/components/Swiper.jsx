import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function Swiper2() {
  return (
    <Swiper
     className='w-full overflow-hidden  h-auto rounded-2xl'
    modules={[Navigation, Pagination, Autoplay]}
    
    spaceBetween={50}
    navigation
    pagination={{ clickable: true }}
    autoplay={{delay:3000}}
    
    slidesPerView={1}

  >
    
    <SwiperSlide className='object-cover '><img src="slide1.jpg"   alt="slide1" /></SwiperSlide>
    <SwiperSlide><img src="slide2.jpg" alt="slide2" /></SwiperSlide>
    <SwiperSlide><img src="slide3.jpg" alt="slide3" /></SwiperSlide>

    ...
  </Swiper>
);
};
  