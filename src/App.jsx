import { createContext, useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Search from './pages/Search'
import Documents from './pages/Documents'
import CommonQ from './pages/CommonQ'
import Privacy from './pages/Privacy'
import Test from './pages/Test'
import TrendsDetail from './pages/TrendsDetail'

export const AppContext = createContext()
function App() {
  const [count, setCount] = useState(0)
  const [shopNumber,setShopNumber] = useState(0)
  const [shopBasket,setShopBasket] = useState([{
    title:'',
    price:'',
    src:''
  }])
  const Trends = [
    {
    name: 'مانتو کتی زنانه پاتن',
    src: 'c1.jpg',
    price: '590,000',
    discount: '0',
    size:['m','s'],
    available:true
   },
    {
    name: 'شومیز زنانه کیکی رایکی',
    src: 'c2.jpg',
    price: '537,000',
    discount: '200000',
    size:['m','s','l'],
    available:false
   },
    {
    name: 'مانتو کتی زنانه سرژه',
    src: 'c3.jpg',
    price: '1,499,000',
    discount: '0',
    size:['m','s','l'],
    available:true
   },
    {
    name: 'کفش زنانه چرم مشهد',
    src: 'c4.jpg',
    price: '2537100',
    discount: '1315010',
    size:['40','41','42'],
    available:true
   },
    {
    name: 'شلوار زنانه سرژه',
    src: 'c5.jpg',
    price: '985000',
    discount: '0',
    size:['m','l'],
    available:true
   },
]

  return (
    <AppContext.Provider value={{Trends,shopBasket,setShopBasket,shopNumber,setShopNumber}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='/:name' element={<TrendsDetail/>}/>

      <Route/>
     
    </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
