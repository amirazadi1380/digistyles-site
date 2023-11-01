import React, { useState } from 'react'
import Modal from '../components/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

export default function Test() {
    const [myModal, setMyModal] = useState(false)
    const [bars, setBars] = useState(false)
    return (
        <>
        
        <nav className='w-screen relative items-center px-5 flex   justify-between bg-sky-200 h-28'>
            <h1>LOGO</h1>
            <div className='lg:hidden lg:invisible lg:opacity-0 z-50'>
                {bars ? <FontAwesomeIcon onClick={() => setBars(!bars)} icon={faClose} className='text-2xl cursor-pointer transition-all duration-300 z-50 ease-in-out absolute right-2 top-2 hover:text-red-600' />
                    : <FontAwesomeIcon onClick={() => setBars(!bars)} icon={faBars}  className='text-2xl cursor-pointer hover:scale-110  transition-all duration-300 ease-in-out hover:text-red-600' />}
            </div>
            <ul className={`${bars ? 'pr-5 z-40 transition-all duration-300 ease-in-out w-72 absolute right-1 top-0 text-center h-screen flex flex-col font-black  bg-sky-300 space-y-10 pt-20 ' : 'hidden text-black' } lg:flex lg:justify-between lg:font-bold text-xl lg:w-96 transition-all duration-300 ease-in-out `}>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>help</li>
            </ul>

        </nav>
        <div className='w-screen flex justify-center'>

        <div className='bg-sky-400 z-10 justify-center items-center flex flex-col relative mt-20 w-[500px] rounded-xl h-96'>
            <h1 className='text-xl text-black text-extrabold z-0'>اشلــــــــــــــــــــــــــــــــــــــیـ ویــــــلیــــامز</h1>
            <img src="noback.png" alt="ashley" className='w-80 hover:scale-110 transition-all duration-300  object-contain h-64 z-20  bg-transparent absolute' />
            <img src="wave.png" alt="wave" className='w-full  object-contain h-[51px]  bg-transparent absolute bottom-0 mx-2 ' />
            <img src="wave.png" alt="wave" className='w-full rotate-180 object-contain h-[51px] z-10  bg-transparent absolute top-0 mx-2 ' />

        </div>
        </div>
      </>  
        //     <div className='w-screen h-screen flex flex-col justify-center items-center'>
        //         <button onClick={()=>setMyModal(true)} className='w-40 h-12 hover:bg-sky-200 hover:text-black/50 transition-all duration-500 ease-out rounded-3xl bg-sky-500'>
        //         <span className='font-black text-lg'>
        //             تایید
        //         </span>
        //         </button>
        // {   myModal &&  <Modal onClose={()=>setMyModal(false)} myModal={myModal} setMyModal={setMyModal}>
        //         <span className='w-32 mt-5 font-bold'>آیا از انتخاب خود اطمینان دارید؟</span> 
        //         </Modal>}
        //         <div className='w-64 h-40 flex items-end  bg-red-600 my-5'>
        //             <div className='w-full bg-black/60 h-20  transition-all  ease-in duration-200 opacity-0 hover:opacity-100 hover:visible'></div>
        //         </div>
        //     </div>
    )
}
