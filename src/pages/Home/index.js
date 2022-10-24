import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Explore from '../Explore'
import History from '../History'
import Card from '../../components/Card';

const Home = () => {
  return (
    <>
    <Sidebar>
      <Navbar />
      <Carousel />
      <Card />
    <Routes>
      <Route path='/explore' element={<Explore />}/>
      <Route path='/history' element={<History />}/>
    </Routes>
    </Sidebar>
    </>
  )
}

export default Home