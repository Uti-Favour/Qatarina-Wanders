import React from 'react'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import Footer from '../src/components/Footer'

const AboutHer : React.FC = () => {
  return (
    <div>
       <Navbar/> 
      <div className='mt-16'>
      <About/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutHer
