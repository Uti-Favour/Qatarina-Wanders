import React from 'react'
import Navbar from '../src/components/Navbar'
import About from '../src/components/About'
import NewsLetter from '../src/components/NewsLetter'

const AboutHer : React.FC = () => {
  return (
    <div>
       <Navbar/> 
      <div className='mt-16'>
      <About/>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default AboutHer
