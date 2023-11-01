import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    return (
        <div className=' flex flex-col justify-between h-screen w-full items-center'>
            <FontAwesomeIcon onClick={()=>navigate(-1)} icon={faArrowLeft} className=' absolute z-50 left-2 top-2 text-2xl text-black opacity-50 cursor-pointer hover:opacity-100 '/>
            <div className='shadow-sm w-screen flex justify-center'>
                <h1 className=' font-serif py-4 text-3xl'>DIGISTYLE</h1>
            </div>
            <div className=' w-[400px]  text-center flex flex-col items-center h-[320px]'>
                <p className='font-bold text-xl'>ورود یا ثبت نام</p>
                <div className='flex rounded-lg mt-2 shadow-lg justify-center flex-col border '>
                    <div className='flex flex-col space-y-3 h-[120px]  mt-4'>
                    <p className='font-semibold opacity-60 text-center w-full'>شماره موبایل یا ایمیل</p>
                    <div className='w-full flex justify-center'>
                    <input className='border text-black opacity-50 w-[250px] border-gray-300 rounded-lg font-semibold p-2  h-8 text-right placeholder:opacity-50 ' placeholder='شماره تماس' type="text" />
                    </div>
                    <div className='flex w-full justify-center'>
                    <span className='w-[150px] h-[0.5px] bg-black opacity-50'></span>
                    </div>
                    </div>
                    <div className='w-full flex justify-center'>
                    <button className='bg-sky-700 rounded-none w-64 h-10 transition-opacity duration-200 opacity-30 hover:opacity-80'>ادامه</button>
                    </div>
                    <p className='text-right w-full text-[8px] hover:scale-100 opacity-50 p-5 '>با ورود و یا ثبت نام در دیجی‌استایل، شما شرایط و قوانین استفاده از تمام سرویس های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید</p>
                </div>
            </div>
            <div className=' flex flex-col  items-center'>
                <p className=' text-xs opacity-60'>Login Powered by</p>
                <h1 className='text-red-600 font-serif'>Digikala</h1>
            </div>
            <div className='bg-stone-200 w-screen   flex justify-center'>
                <p className='text-right opacity-50 hover:scale-100 w-full p-2' >کليه حقوق اين سايت متعلق به شرکت  <br />آوازه نو پوشان پارسی (فروشگاه اینترنتی دیجی‌استایل) می‌باشد</p>
                </div>
        </div>
    )
}
