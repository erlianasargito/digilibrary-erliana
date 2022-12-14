import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetailBook from '../../components/Card/detailBook'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/register' element={<Register />}/>
    <Route path='/home/*' element={<Home />}/>
    <Route path='/DetailBooks/:id' element={<DetailBook />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App