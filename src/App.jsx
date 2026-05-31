import React from 'react'
import Header from './components/header/header'
import HeroSection from './components/herosection/herosection'
import About from './components/about/about'
import Details from './components/details/details'
import Speakers from './components/speakers/speakers'
import EventSchedule from './components/eventschedule/eventschedule'
import Breakout from './components/breakout/breakout'
import Pitch from './components/pitch/pitch'
import TradeFair from './components/tradefair/tradefair'
import WhyAttendYes from './components/whyattendyes/whyattend'
import Sponsorship from './components/sponsorship/sponsorship'
import FAQ from './components/faq/faq'
import Ready from './components/ready/ready'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
    <Header/>
    <HeroSection/>
    <About/>
    <Details/>
    <Speakers/>
    <EventSchedule/>
    <Breakout/>
    <Pitch/>
    <TradeFair/>
    <WhyAttendYes/>
    <Sponsorship/>
    <FAQ/>
    <Ready/>
    <Footer/>
    </>
  )
}

export default App