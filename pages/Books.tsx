import React from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { all_books } from '../src/constants/booklist'

const Books : React.FC = () => {
  return (
    <section className=' h-screen'>
      <Navbar/>
      <div>
        <h1 className='flex justify-center text-5xl mt-20'>Book By Qararina Wanders</h1>
      </div>
<div className='grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-36 mt-5'>
{all_books.map((book) => (
  <div>
    <img src={book.imagelink} alt="" />
  </div>
))}
</div>
     <div className='bg-black '>
     <Footer/>
     </div>
    </section>
  )
}

export default Books
