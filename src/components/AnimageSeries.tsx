import React, { FC, useRef, useEffect } from 'react';
import { motion, useTransform, useScroll, useAnimationFrame } from 'framer-motion';
import "../css/styles.css"
import animage_booklist from '../constants/booklist';

const AnimageSeries: FC = () => {
  return (
    <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-57%"]);


 

  return (
    <section ref={targetRef} className="relative lg:h-[300vh]   lg:mt-0 bg-black  text-white" id='books'>
      <div className="mt-28">
        <h1 className='text-7xl flex justify-center great-vibes-regular'>View Quatarina's Work</h1>
      </div>
      <div className="sticky top-0 flex lg:h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 lg:mx-10 mx-5">
          {animage_booklist.map((books, index) => (
            <div key={index} className='item-center shadow-2xl flex-none w-80 relative group'>
              <img src={books.imagelink} alt="image" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white mb-4">{books.description}</p>
                 <a href={books.amazonlink}> <button className="px-8 py-3 bg-white text-black font-semibold rounded-xl ">Read More</button></a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimageSeries;
