import React from 'react'
import Navbar from '../src/components/Navbar'
import NewsLetter from '../src/components/NewsLetter'


const Contact : React.FC = () => {
  return (
    <div>
        <Navbar/>
      <div className='py-10'>
      <NewsLetter/>
      </div>
    </div>
  )
}

export default Contact
