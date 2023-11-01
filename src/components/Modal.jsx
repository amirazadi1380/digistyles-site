import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Modal({children,Modal,setMyModal,onClose}) {
   const navigate =  useNavigate()
  return (
    <div className='flex w-[300px] h-64 justify-center rounded-xl bg-sky-600  items-center text-center flex-col fixed inset-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <div className='flex flex-col'>
                <FontAwesomeIcon onClick={onClose} icon={faClose} className='absolute right-2 top-2 text-2xl cursor-pointer'/>
            {children}
             <button onClick={()=>navigate('/')} className='hover:bg-white my-2 h-8 w-32 hover:text-black transition-all duration-200 ease-in'>تایید</button>
            </div>
    </div>
  )
}
