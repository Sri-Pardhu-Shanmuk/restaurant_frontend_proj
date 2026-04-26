import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './sections/navBar'
import HeroSection from './sections/heroSection'
import About from './sections/about'
import Menu from './sections/menu'
import Gallery from './sections/gallery'
import Reviews from './sections/reviews'
import Booking from './sections/reservation'
import ContactInfo from './sections/contact-location'
import Footer from './sections/footer'

function App() {


  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Menu/>
      <Gallery/>
      <Reviews/>
      <Booking/>
      <ContactInfo/>
      <Footer/>
      
    </>
  )
}

export default App
