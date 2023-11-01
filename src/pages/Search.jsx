import React, { useContext } from 'react'
import { AppContext } from '../App'
import { useParams } from 'react-router-dom'

export default function Search() {
    const {Trends} = useContext(AppContext)
    const {title} = useParams()
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4'>{Trends.filter(item=>item.name.includes(title)).map(item=><div className='cursor-pointer flex flex-col items-center hover:bg-stone-100 transition-all duration-500 justify-center bg-stone-300 border my-1' key={Math.random()*1000}>
        <img src={item.src} alt={item.name} className='w-40 h-36 hover:scale-100' />
       <p className='text-black'>{item.name}</p> 
    </div>)}</div>
  )
}
