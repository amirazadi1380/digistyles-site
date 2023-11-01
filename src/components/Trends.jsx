import React, { useContext, useEffect, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AppContext } from '../App';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function Trends() {
    const navigate = useNavigate()
    const { shopBasket, setShopBasket, shopNumber, setShopNumber, Trends } = useContext(AppContext)
    useEffect(() => {
        Aos.init()
    }, [])
    const [showSize, setShowSize] = useState(false)

    return (
        <div data-aos='fade-right'>
            <Toaster />

            <div className=' w-screen flex z-20 justify-center'>

                <div className='border m-5 relative  grid border-black  w-[1200px] h-[600px]'>

                    <p className=' border cursor-pointer font-bold  w-32 h-12 items-center flex z-50 top-20  justify-center absolute -left-16  bg-white hover:bg-black hover:text-white transition-all  duration-200 '>خریـــــــــــــد همــــه</p>
                    <p className=' font-extrabold text-2xl  w-32 top-5 h-20 items-center flex  justify-center absolute -right-16 z-50 bg-white'>استایــــــــل هفتــــــه</p>
                    <div className=' flex items-center w-full justify-between'>

                        <div>
                            <div className='flex mx-2 absolute bottom-40 -left-28 '>{Trends.map(item => <div  key={item.name} onClick={() => {
                                setShopBasket([...shopBasket, {
                                    title: item.name,
                                    price: item.price,
                                    src: item.src
                                }])
                                navigate(`${item.name}`)
                                setShopNumber(shopNumber + 1)
                                console.log(shopBasket)
                                toast('آیتم به سبد خرید اضافه شد')

                            }} onMouseEnter={() => setShowSize(true)} onMouseLeave={() => setShowSize(false)} className={` ${!item.available && 'opacity-50 cursor-not-allowed' } w-52 h-64 mx-2 rounded-sm  bg-white hover:scale-125 transition-all duration-300 border-black`}>
                                <div className='bg-stone-100 flex justify-center items-center h-52'>
                                    <img src={item.src} alt={item.name} className='w-32 h-32 cursor-pointer' />
                                </div>
                                <div className='text-right px-3'>
                                    <div className='flex items-center'>
                                        <p className='text-black'>{item.name}</p>
                                        {item.available ? '' : <span className='opacity-100 bg-black/50 rounded-lg p-1'>ناموجود</span>}
                                 

                                    </div>
                                    <div className=' pl-2 font-extrabold text-center w-40 text-[10px] flex items-center h-5 space-x-2'><p>{item.discount == '0' ? <div className='space-x-2'><span>{item.price}</span><span>تومـــان</span></div>: <div className='flex w-40 '>
                                        <p className=' line-through opacity-80'>{item.price}</p>
                                        <div className='flex items-center justify-center space-x-2'>
                                        <span>{item.discount}</span><span>تومـــان</span>
                                        </div>
                                        </div>}</p></div>
                                    <div className='absolute  bottom-10 flex justify-center items-center h-16 w-44'>
                                        <div className='opacity-0 hover:flex hover:opacity-100 hover:justify-center hover:transition-opacity hover:duration-500 hover:rounded-lg  hover:bg-stone-200 hover:text-center hover:w-full  hover:items-center h-10 left-0 mx-5 top-1`'>

                                        </div>
                                    </div>
                                </div>
                            </div>)}</div>
                        </div>

                        <div><img src="woman1.jpg" alt="woman" className=' absolute -right-28 top-28 w-64 h-96 cursor-pointer' /></div>
                    </div>
                </div>
            </div> </div>
    )
}
