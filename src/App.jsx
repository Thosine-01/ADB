// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./App.css";
import {  Routes, Route } from 'react-router-dom'
import HotelDetailPage from './pages/HotelDetailPage';
import AccomodationPage from './pages/AccomodationPage';
import Booking from './pages/Booking'
import Roomdetail from './pages/Roomdetail'
//import Room from '../src/pages/Room'

import './App.css'

function App() {
  return (
    <div className=''>
    <Routes>
      <Route path="/" element={<AccomodationPage />} />
      <Route path="/hotel/:id" element={< HotelDetailPage/>} />
      <Route path="/booking" element={< Booking/>} />
      <Route path="/room/:id" element={< Roomdetail/>} />
     </Routes>
    </div>
  )
}

export default App

     {/*<Routes>
      <Route path="/" element={<Accomodation />} />
      <Route path="/search_1" element={<Room />} />
     </Routes>*/}