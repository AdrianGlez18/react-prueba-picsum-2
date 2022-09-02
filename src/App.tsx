import { useState } from 'react'
import Footer from './components/Footer'
import ImageModal from './components/ImageModal'
import RandomImage from './components/RandomImage'
import Timer from './components/Timer'

function App() {

  return (
    <div className="App flex flex-col min-h-screen w-screen justify-center items-center content-center dark:bg-[#2C3333]">
     <Timer/>
     <ImageModal/>
     <Footer/>
    </div>
  )
}

export default App
