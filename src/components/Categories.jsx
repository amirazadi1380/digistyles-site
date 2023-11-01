import Aos from 'aos'
import React, { useState } from 'react'
import 'aos/dist/aos.css'
export default function Categories() {
    const [showMan, setShowMan] = useState(true)
    const [showBeauty, setShowBeauty] = useState(false)
    const [showWomen, setShowWomen] = useState(false)
    const [showKids, setShowKids] = useState(false)
    Aos.init()
    return (
        <div data-aos='fade-right'>


            <div className='flex flex-col justify-center items-center bg-stone-100 h-[500px] w-screen'>
                <div className='flex h-16  w-full justify-center space-x-10 font-bold text-2xl'>
                    <p onClick={() => {
                        setShowBeauty(true)
                        setShowMan(false)
                        setShowKids(false)
                        setShowWomen(false)
                    }} className={`${showBeauty ? 'border-b   border-b-black' : ''}  text-2xl bg-transparent cursor-pointer hover:text-gray-600 transition-colors duration-300  w-16 h-10`}>زیبایی</p>
                    <p onClick={() => {
                        setShowBeauty(false)
                        setShowMan(false)
                        setShowKids(true)
                        setShowWomen(false)
                    }} className={`${showKids ? 'border-b border-b-black' : ''} text-2xl bg-transparent cursor-pointer hover:text-gray-600 transition-colors duration-300  w-16 h-10`}>بچگانه</p>
                    <p onClick={() => {
                        setShowBeauty(false)
                        setShowMan(false)
                        setShowKids(false)
                        setShowWomen(true)
                    }} className={`${showWomen ? 'border-b border-b-black' : ''} text-2xl bg-transparent cursor-pointer hover:text-gray-600 transition-colors duration-300  w-16 h-10`}>زنانه</p>
                    <p onClick={() => {
                        setShowBeauty(false)
                        setShowMan(true)
                        setShowKids(false)
                        setShowWomen(false)
                    }} className={`${showMan ? 'border-b border-b-black' : ''} text-2xl bg-transparent cursor-pointer hover:text-gray-600 transition-colors duration-300  w-16 h-10`}>مردانه</p>
                </div>
                <div className='relative flex '>

                    <div className={` ${showMan ? 'flex flex-col' : 'hidden'}`}>
                        <div className='relative flex'>
                            <img src="m1.jpg" alt="men" className='w-[700px] h-[200px] cursor-pointer lg:w-[1200px] hover:scale-105 transition-all duration-150 ease-in-out' />
                            <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>لباس مردانه</p>

                        </div>
                        <div className='flex space-x-10 mt-2 justify-center'>
                            <div className='relative flex'>
                                <img src="m2.jpg" alt="men" className='w-[200px] h-28  cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>ورزشی مردانه</p>
                            </div>
                            <div className='relative flex'>
                                <img src="m3.jpg" alt="men" className='w-[200px] h-28 cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-36 h-8 px-1 text-right mr-1 mb-1'>اکسسوری مردانه</p>
                            </div>
                            <div className='relative flex'>
                                <img src="m4.jpg" alt="men" className='w-[200px] h-28 cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'> کفش مردانه</p>
                            </div>
                        </div>
                    </div>
                    <div className={` ${showKids ? 'flex flex-col' : 'hidden'}`}>
                        <div className='relative flex'>
                            <img src="k1.jpg" alt="men" className='w-[700px] h-[200px] cursor-pointer lg:w-[1200px] hover:scale-105 transition-all duration-150 ease-in-out' />
                            <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>لباس بچگانه</p>

                        </div>
                        <div className='flex space-x-10 mt-2 justify-center'>
                            <div className='relative flex'>
                                <img src="k2.jpg" alt="men" className='w-[200px] h-28  cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>ورزشی بچگانه</p>
                            </div>
                            <div className='relative flex'>
                                <img src="k3.jpg" alt="men" className='w-[200px] h-28 cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-36 h-8 px-1 text-right mr-1 mb-1'>اکسسوری بچگانه</p>
                            </div>
                            <div className='relative flex'>
                                <img src="k4.jpg" alt="men" className='w-[200px] h-28 cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'> کفش بچگانه</p>
                            </div>
                        </div>
                    </div>
                    <div className={` ${showWomen ? 'flex flex-col' : 'hidden'}`}>
                        <div className='relative flex'>
                            <img src="wo1.jpg" alt="men" className='w-[700px] h-[200px] cursor-pointer lg:w-[1200px] hover:scale-105 transition-all duration-150 ease-in-out' />
                            <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>لباس زنانه</p>

                        </div>
                        <div className='flex space-x-10 mt-2 justify-center'>
                            <div className='relative flex'>
                                <img src="wo2.jpg" alt="men" className='w-[200px] h-28  cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>ورزشی زنانه</p>
                            </div>
                            <div className='relative flex'>
                                <img src="wo3.jpg" alt="men" className='w-[200px] h-28 cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-36 h-8 px-1 text-right mr-1 mb-1'>اکسسوری زنانه</p>
                            </div>
                            <div className='relative flex'>
                                <img src="wo4.jpg" alt="men" className='w-[200px] h-28 cursor-pointer lg:w-[350px]  hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-200 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'> کفش زنانه</p>
                            </div>
                        </div>
                    </div>

                    <div className={` ${showBeauty ? 'flex flex-col' : 'hidden'}`}>
                        <div className='relative flex'>
                            <img src="b1.jpg" alt="beauty" className='w-[700px] h-[200px] lg:w-[1200px] hover:scale-110 transition-all duration-150 ease-in-out ' />
                            <p className='bg-stone-50 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>لوازم آرایشی </p>

                        </div>
                        <div className='flex space-x-10 mt-2'>
                            <div className='relative flex'>
                                <img src="b2.jpg" alt="beauty" className='w-[200px] h-28 lg:w-[350px] hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-50 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'>عطر و ادکلن </p>
                            </div>
                            <div className='relative flex'>
                                <img src="b3.jpg" alt="beauty" className='w-[200px] h-28 lg:w-[350px] hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-50 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-36 h-8 px-1 text-right mr-1 mb-1'>لوازم شخصی برقی </p>
                            </div>
                            <div className='relative flex'>
                                <img src="b4.jpg" alt="beauty" className='w-[200px] h-28 lg:w-[350px] hover:scale-110 transition-all duration-150 ease-in-out' />
                                <p className='bg-stone-50 hover:scale-100 text-black text-opacity-50 absolute bottom-0 right-0 text-lg w-28 h-8 px-1 text-right mr-1 mb-1'> لوازم بهداشتی </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  </div>
    )
}
