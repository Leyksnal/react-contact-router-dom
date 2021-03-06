import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditComp from './Components/EditComp'
import Header from './Components/Header'
import Home from './Components/Home'
import View from './Components/View'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/phonebook' element={<View/>}/>
        <Route path='/:id' element={<EditComp/>}/>
      </Routes>
    </BrowserRouter>
  )
}
