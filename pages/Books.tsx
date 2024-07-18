import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

const Books : React.FC = () => {
  return (
    <section className='bg-black h-screen'>
      <Navbar/>
      <Footer/>
    </section>
  )
}

export default Books
