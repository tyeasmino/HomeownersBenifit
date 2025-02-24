import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ThankYou from '../pages/ThankYou'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thank-you/" element={<ThankYou />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default Index