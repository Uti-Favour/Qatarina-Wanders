import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import animage_booklist from "../src/constants/booklist";
import { all_shifter } from "../src/constants/booklist";
import { experimental_series } from "../src/constants/booklist";

const Books: React.FC = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <div className="text-white">
        <h1 className="flex justify-center lg:text-6xl text-3xl text-white lg:py-32 py-28  cinzel-decorative-regular text-center ">
          Book By Qatarina Wanders
        </h1>
      </div>

      {/* --- Books --- */}
   <div>
   <div className="flex items-center justify-center -mt-10 lg:-mt-0">
        <div className="w-1/4 border-t border-gray-400"></div>
        <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
          ANIMAGE ACADEMY SERIES
        </span>
        <div className="w-1/4 border-t border-gray-400"></div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6">
        {animage_booklist.map((book) => (
          <div>
            <img src={book.imagelink} alt="" className="" />
          </div>
        ))}
      </div>
   </div>


   <div className="mt-10 lg:mt-24">
   <div className="flex items-center justify-center my-8">
        <div className="w-1/4 border-t border-gray-400"></div>
        <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
          THE OWL SHIFTER CHRONICLE
        </span>
        <div className="w-1/4 border-t border-gray-400"></div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6">
        {all_shifter.map((book) => (
          <div>
            <img src={book.imagelink} alt="" className="" />
          </div>
        ))}
      </div>
   </div>

   <div className="mt-10 lg:mt-24">
   <div className="flex items-center justify-center my-8">
        <div className="w-1/4 border-t border-gray-400"></div>
        <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
          THE EXPERIMENTAL SERIES
        </span>
        <div className="w-1/4 border-t border-gray-400"></div>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6">
        {experimental_series.map((book) => (
          <div>
            <img src={book.imagelink} alt="" className="" />
          </div>
        ))}
      </div>
   </div>
   
      <div className="bg-black ">
        <Footer />
      </div>
    </section>
  );
};

export default Books;
