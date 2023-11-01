import React, { useState } from 'react'

export default function Rating() {
    const stars = ['star.png','star.png','star.png','star.png','star.png']
    const [starIdx,setStarIdx] = useState(0)
    const [finallIdx,setFinallIdx] = useState(0)
  return (
    <div>

    
    <div className='flex items-center  space-x-1 w-64'>
        {stars.map((star,index)=> 
        <div key={Math.random()*1000} >
            <img onMouseEnter={()=>setStarIdx(index + 1)}  src={star} alt="star"  className='w-6 rounded-lg cursor-pointer hover:scale-110 transition-all duration-100 ease-in  h-6'/>     
        </div>
)} 

<span className='font-black text-2xl pl-5'>{finallIdx == 0 ? starIdx : finallIdx}</span>
    </div>
    <div className='w-44 flex justify-center'>
<button onClick={()=>setFinallIdx(starIdx)} className=' w-20 mt-5 h-6 text-[12px]  opacity-70 rounded-none  duration-100 transition-all hover:border-black ease-in hover:opacity-100'>ثبت امتیاز</button>
    </div>
</div>
  )
}
