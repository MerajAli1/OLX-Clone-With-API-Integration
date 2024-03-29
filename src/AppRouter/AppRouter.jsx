import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/productdetail/:id' element={<ProductDetail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter