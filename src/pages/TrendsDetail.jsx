import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheck, faCheckCircle, faCheckDouble, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'
import Rating from '../components/Rating'

export default function TrendsDetail() {
   const {name} =  useParams()
   const {Trends} = useContext(AppContext)
   const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
        <div className='w-screen flex justify-center items-center '>

        <div className='w-[1500px] h-[700px] bg-stone-100 rounded-3xl relative shadow-lg flex  items-center justify-center'>
            <FontAwesomeIcon onClick={()=>navigate('/')} icon={faArrowLeft} className='text-2xl absolute top-2 left-2 cursor-pointer hover:scale-110 transition-all duration-100 ease-in'/>
            {Trends.filter(item=>item.name == name).map(item=><div className='flex justify-between'>

                <div className=' w-[600px] h-[400px]'>
                    <div className='w-full flex items-center justify-center mb-10'>
                <p className='bg-transparent text-3xl w-72 text-black'>{item.name}</p>
                    </div>
                <div className='flex justify-between text-slate-800'>
                    <div className='flex flex-col justify-between'>
                    <span className='text-slate-900 font-extrabold'>{item.price}تومــــانـــــ</span>
                        <Rating/>
                    </div>
                    <div className='flex flex-col text-right pr-3 space-y-10' >
                        <div className='text-lg'>
                            <span>فروشنده : مزون سرو</span>
                        </div>
                        <div className=' text-sm space-x-3'>
                            <span>آماده ارسال</span>
                                <FontAwesomeIcon icon={faTruck}/>
                        </div>
                        <div className='text-sm space-x-3'>
                            <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
                                <FontAwesomeIcon icon={faCheckCircle} />
                        </div>

                    </div>
                </div>
                <div className='w-full flex justify-center items-center mt-24'>
                <button className='rounded-none w-80 h-16 text-xl hover:bg-white duration-300 transition-all hover:border-black ease-in hover:text-black'>افزودن به سبد خرید</button>
                </div>
                </div>

                <img src={item.src} alt={item.name} className='w-96 h-96 rounded-lg shadow-xl' />

            </div>)}
        </div>
        </div>
        <Footer/>
    </div>
  )
}
