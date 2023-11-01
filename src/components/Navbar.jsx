import { faArrowLeft, faBasketShopping, faClose, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

export default function Navbar() {
    const [womanModal, setWomanModal] = useState(false)
    const [manModal, setManModal] = useState(false)
    const [beautyModal, setBeautyModal] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const { shopNumber } = useContext(AppContext)
    const [open, setOpen] = useState(false)
    return (
        <nav id='mynav' className='flex flex-col relative'>
            <div className={`fixed  bg-stone-800 w-[500px] h-96 inset-0 z-50 rounded-lg top-1/2 -translate-y-1/2 left-1/3 ${open ? 'opacity-100 visible' : 'invisible opacity-0'}`}>
                <FontAwesomeIcon onClick={() => setOpen(false)} icon={faClose} className='absolute top-2 right-2 text-white/20 hover:text-white/80 text-2xl cursor-pointer' />
            </div>
            <div className='flex mx-1 w-screen justify-between h-24 items-center relative '>
                <div>
                    <div className='flex space-x-1 opacity-70 ml-7 '>

                        <form onSubmit={(e) => {
                            e.preventDefault()
                            console.log("done")
                        }}>
                            <button className='opacity-100 w-10 h-6   rounded-full bg-transparent text-black hover:opacity-100 hover:scale-110 transition-all duration-100'><Link to={`${searchInput}`} className='text-black text-[12px] hover:text-black '>جستجو</Link></button>
                            <input onChange={(e) => {
                                setSearchInput(e.target.value)
                            }} placeholder='جستجوی محصولا از 2430 برند' className='placeholder:text-[12px]  border-white text-right' /></form>
                        <div className={` ${showSearchModal ? 'absolute w-[600px] bg-gray-500 opacity-100 top-20 left-0 rounded-lg  h-96 z-50' : 'hidden'} `}></div>
                        <FontAwesomeIcon className='opacity-50' icon={faSearch} />
                    </div>
                    <div className='w-34 h-[1px] bg-black'></div>
                </div>

                <div className='text-center'>
                    <h1 className=' text-4xl cursor-pointer' onClick={() => setOpen(true)}>DIGISTYLE</h1>
                    <div className=' w-80 h-0.5 bg-black'></div>
                </div>
                <div className='flex space-x-1 mr-7 items-center'>
                    <p className='opacity-70 cursor-pointer '><Link className='text-black opacity-70' to='login'>وارد شوید</Link> </p>
                    <Link className='text-black flex relative' to='shop'><FontAwesomeIcon className='opacity-50 text-2xl ml-2' icon={faBasketShopping} />
                        <p className='bg-red-400 w-3 text-center h-3 rounded-full text-[9px] text-white absolute -right-1 -top-1'>{shopNumber}</p>
                    </Link>
                </div>
            </div>
            <div >
                <div className='flex w-screen  items-center h-10 justify-center space-x-10'>
                    <ul className='flex space-x-5'>
                        <li>مد پایدار</li>
                        <li>خانه ساعت</li>
                        <li>برندها</li>
                        <li className='text-red-600'>حراج استایل</li>
                    </ul>
                    <div className='h-6 w-[2px] bg-black'></div>
                    <ul className='flex space-x-8'>
                        <li onClick={() => {
                            setBeautyModal(true)
                            setWomanModal(false)
                            setManModal(false)
                        }}>زیبایی و سلامت</li>
                        <li >بچگانه</li>
                        <li onClick={() => {
                            setManModal(true)
                            setWomanModal(false)
                            setBeautyModal(false)
                        }}>مردانه</li>
                        <li onClick={() => {
                            setWomanModal(true)
                            setManModal(false)
                            setBeautyModal(false)
                        }}>زنانه</li>
                    </ul>
                </div>
            </div>
            <div className={`${womanModal ? 'w-screen absolute z-50 flex justify-center' : 'hidden'} `}>
                <div className='w-full h-[300px] rounded-lg shadow-lg bg-white border-2 items-center border-red-500 relative flex flex-col justify-center'>
                    <h1>وسایل زنانه</h1>
                    <FontAwesomeIcon onClick={() => {
                        setWomanModal(false)
                        setManModal(false)
                        setBeautyModal(false)
                    }} icon={faClose} className='text-3xl cursor-pointer absolute right-5 top-2' />
                </div>
            </div>
            <div className={`${manModal ? 'w-screen absolute z-50  flex justify-center' : 'hidden'} `}>
                <div className='w-full h-[300px] rounded-lg shadow-lg bg-white border-2 items-center border-red-500 relative flex flex-col justify-center'>
                    <div className='flex flex-col text-left'>
                        <div className='grid grid-cols-2 gap-2'>
                            <img src="mmodal1.jpg" alt="man" className='w-32 h-20 object-contain' />
                            <img src="mdoal2.jpg" alt="man" className='w-32 h-20 object-contain' />
                            <img src="mmodal3.jpg" alt="man" className='w-32 h-20 object-contain' />
                            <img src="mmodal4.jpg" alt="man" className='w-32 h-20 object-contain' />
                        </div>
                        <div className='flex h-6 items-center space-x-0.5'>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <Link className='text-black opacity-50 hover:opacity-100 hover:text-black'>مشاهده همه</Link>
                        </div>
                    </div>
                    <FontAwesomeIcon onClick={() => {
                        setWomanModal(false)
                        setManModal(false)
                        setBeautyModal(false)
                    }} icon={faClose} className='text-3xl cursor-pointer absolute right-5 top-2' />
                </div>
            </div>
            <div className={`${beautyModal ? 'w-screen absolute z-50 flex justify-center' : 'hidden'} `}>
                <div className='w-full h-[300px] rounded-lg shadow-lg bg-white border-2 items-center border-red-500 relative flex flex-col justify-center'>
                    <h1>وسایل زیبایی</h1>
                    <FontAwesomeIcon onClick={() => {
                        setWomanModal(false)
                        setManModal(false)
                        setBeautyModal(false)
                    }} icon={faClose} className='text-3xl cursor-pointer absolute right-5 top-2' />
                </div>
            </div>
        </nav>
    )
}
