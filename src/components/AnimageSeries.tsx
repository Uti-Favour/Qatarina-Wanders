import React, { FC } from 'react'
import animage_booklist from '../constants/booklist'

const AnimageSeries:FC = () => {
  return (
    <>
      <section className='bg-black text-white'>
        <div className='mt-28'>
            <h1 className='text-6xl flex justify-center'>Animage Academy Series</h1>
        </div>
       <div className='lg:mx-10 mx-5 grid lg:grid-cols-4 gap-4 mt-16'>
       {animage_booklist.map((books) => (
            <div className='border border-gray-500 px-5 py-10 rounded-xl'>
                <img src={books.imagelink} alt="image" />
                <h2 className='text-3xl'>{books.name}</h2>
                <p className='mb-8 text-gray-400 mt-3'>{books.description}</p>
               <a href={books.amazonlink} className='mt-16'><button className='px-10 py-3 bg-white text-black rounded-lg'>Read Now</button></a>
            </div>
        ))}
       </div>
      </section>
    </>
  )
}

export default AnimageSeries
