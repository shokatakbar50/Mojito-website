import React from 'react'
import {ScrollTrigger, SplitText} from "gsap/all"
import gsap from 'gsap'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import Cocktails from './Components/cocktails'
import ArtSection from './Components/ArtSection'
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <ArtSection/>
      <div className="h-screen"></div>
    </main>
    </>
  )
}

export default App