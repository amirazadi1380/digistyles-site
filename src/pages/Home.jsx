import React from 'react'
import Navbar from '../components/Navbar'
import Swiper2 from '../components/Swiper'
import Trends from '../components/Trends'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Testing from '../components/Testing'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Swiper2/>
        <Trends/>
        <Categories/>
        <Footer/>
      
    </div>
  )
}
