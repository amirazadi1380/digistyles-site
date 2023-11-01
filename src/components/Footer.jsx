import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex w-screen h-72 items-center relative justify-between text-center border border-stone-300 mt-5 p-5'>
        <h1 className='absolute right-2 -top-2 bg-white w-32  text-black text-opacity-50'>DIGISTYLE</h1>
    <div>
        <div className='flex flex-col w-60  items-center'>
            <h1>تلفن پشتیبانی</h1>
            <p>021-61930300</p>
        </div>
        <div className='w-full flex justify-center items-center'>
        <div className='flex justify-between w-32 '>
            <img src="instagram.png" alt="insta" className='w-5 object-fill h-5' />
            <img src="telegram.png" alt="telegram" className='w-5 object-fill h-5' />
            <img src="whatsapp.png" alt="whatsapp" className='w-5 object-fill h-5' />
        </div>
        </div>

    </div>
    <div>
        <h1>اطلاعات دیجی استایل</h1>
        <p>درباره دیجی استایل</p>
        <p>تماس با دیجی استایل</p>
        <p>همکاری با دیجی استایل</p>
       
    </div>
    <div>
        <h1>خدمات مشتریان</h1>
        <p>پاسخ به پرسش های متداول</p>
        <p>رویه بازگرداندن کالا</p>
        <p>شرایط استفاده</p>
        <p><Link to='documents/privacy' className='text-gray-600 opacity-70'>حریم خصوصی</Link>  </p>
    </div>
        <div>
        <h1>خرید</h1>
        <p>زنانه</p>
        <p>مردانه</p>
        <p>بچگانه</p>
        <p>زیبایی</p></div>
    </div>
 
)
}
