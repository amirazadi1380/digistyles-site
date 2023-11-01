import React, { useContext } from 'react'
import { AppContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEraser } from '@fortawesome/free-solid-svg-icons';

export default function Shop() {
  const {shopBasket,setShopBasket,setShopNumber} = useContext(AppContext)
  const navigate =useNavigate()
  return (
    <div className='w-screen flex justify-center items-center h-screen'>
      <FontAwesomeIcon onClick={()=>navigate(-1)} icon={faArrowLeft} className=' absolute z-50 left-2 top-2 text-2xl text-black opacity-50 cursor-pointer hover:opacity-100 '/>
      <FontAwesomeIcon onClick={()=>{

        setShopBasket([])
        setShopNumber(0)
      }
        }  icon={faEraser} className=' absolute z-50 right-2 top-2 text-2xl text-black opacity-50 cursor-pointer hover:opacity-100 '/>
    <div className='w-[700px]  grid gap-5 grid-cols-1 h-[650px]'>
        {shopBasket.map(item=><div className='border-2 rounded-xl shadow-lg cursor-pointer hover:scale-105 hover:border-opacity-100 border-opacity-30 transition-all duration-200 border-stone-500 h-80 ' key={Math.random()*1000}>
          <div className='w-full flex justify-center'> 
          <div className='bg-stone-100 flex w-96 justify-center items-center h-64'>
                    <img  src={item.src} alt={item.title} className='w-32 h-32' />
                    </div>
                </div>
                    <div className='text-center'>
                  <p className='text-black'>{item.title}</p>   
                  <div className='pl-2 font-extrabold text-center h-5 space-x-2'><p>{item.price}</p><p>تومــــــان</p></div>
                    </div>  
        </div>)}
    </div> 
    </div>
  )
}
