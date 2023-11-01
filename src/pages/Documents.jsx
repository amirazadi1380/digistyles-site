import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Documents() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-[800px] h-[600px] bg-stone-200 flex flex-col'>
            <Link to='common-questions'>سوالات متداول</Link>
            <Link to='privacy'>حریم خصوصی</Link>
        </div>

    </div>
  )
}
