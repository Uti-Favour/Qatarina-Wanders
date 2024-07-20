import React from 'react'
import animated_image from "/src/assets/images/Qatarina Wanders Illustration(1).png"

const NewsLetter : React.FC = () => {
  return (
    <section className='bg-white text-black rounded-tr-[40px] rounded-tl-[40px] mt-16 lg:flex justify-between items-center lg:mx-10 pt-16 lg:pt-0'>
   <div className='lg:max-w-2xl lg:space-y-8 space-y-6 lg:ml-20 ml-5'>
    <h1 className='lg:text-5xl text-4xl cinzel-decorative-regular'>Be the first to get read to our new releases</h1>
    <p className='text-base max-w-lg '>Find out about new books, tour dates, and giveaways first. We don’t share your info and we’ll only contact you with big news. Promise.</p>
    <div className=''>
        <form action="input" className='lg:flex lg:space-x-4'>
            <input type="email" placeholder='Email' className='py-4 lg:px-20 px-14 rounded-xl  border border-black  cinzel-decorative-regular'/>
            <button className='py-4 lg:px-8 px-14 bg-black text-white rounded-lg cinzel-decorative-regular mt-5' type='submit'>SubScribe</button>
        </form>
    </div>

    <div className='blockl lg:hidden'>
    <img src={animated_image} className='lg:w-[500px] lg:h-[500px] object-contain' />
   </div>
    <div className='flex justify-center lg:justify-start lg:flex-none'>
      <div className='space-x-10 lg:text-xl text-2xl'>
          <i className="fa-brands fa-instagram "></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-linkedin"></i>
          </div>
      </div>
      <div className='flex lg:flex-none justify-center lg:justify-start'>
        <span>© Qatarina Wanders. All Rights Reserved. </span>
      </div>
   </div>

   <div className='hidden lg:block'>
    <img src={animated_image} className='lg:w-[500px] lg:h-[500px] object-contain' />
   </div>
    </section>
  )
}

export default NewsLetter ;
