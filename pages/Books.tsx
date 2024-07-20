import React from "react";
import Navbar from "../src/components/Navbar";
import NewsLetter from "../src/components/NewsLetter";
import animage_booklist from "../src/constants/booklist";
import { all_shifter } from "../src/constants/booklist";
import { experimental_series } from "../src/constants/booklist";
import { more_books } from "../src/constants/booklist";

const Books: React.FC = () => {
  return (
    <section className="bg-black">
      <Navbar />
      <div className="text-white">
        <h1 className="flex justify-center lg:text-6xl text-3xl text-white lg:py-32 py-28  cinzel-decorative-regular text-center ">
          Books By Qatarina Wanders
        </h1>
      </div>

      {/* --- Books --- */}
      <div>
        <div>
          <div className="flex items-center justify-center -mt-10 lg:-mt-0">
            <div className="w-1/4 border-t border-gray-400"></div>
            <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
              ANIMAGE ACADEMY SERIES
            </span>
            <div className="w-1/4 border-t border-gray-400"></div>
          </div>
          <span className="text-white text-center flex justify-center lg:mx-80 mx-5 mt-3 text-base lg:text-lg">
            Discover Ava's journey at Animage Academy, where a seemingly
            ordinary cat shifter unveils her extraordinary destiny. Friendship,
            rivalry, and a battle to protect unicorns await in this thrilling
            magical adventure. Will Ava's true power emerge?
          </span>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6">
          {animage_booklist.map((book) => (
            <div className="relative group  lg:w-72">
              <img src={book.imagelink} alt="" className="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50  rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                <h2 className="lg:text-xl text-base text-center mx-5 mb-2 cinzel-decorative-bold capitalize">
                  {book.name}
                </h2>
                <a href={book.amazonlink}>
                  <button className="bg-white text-black text-sm lg:px-4 px-2 py-2 rounded cinzel-decorative-regular mt-3">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 lg:mt-24">
        <div>
          <div className="flex items-center justify-center my-8">
            <div className="w-1/4 border-t border-gray-400"></div>
            <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
              THE OWL SHIFTER CHRONICLE
            </span>
            <div className="w-1/4 border-t border-gray-400"></div>
          </div>
          <span className="text-white text-center flex justify-center lg:mx-80 mx-5 mt-3 text-base lg:text-lg">
            Prepare for a heart-pounding journey in "The Owl Shifter" series.
            Emily, the most popular girl in school, harbors a deadly secret:
            she's the fated Owl shifter. As ancient prophecies unfold and dark
            forces rise, Emily must embrace her true nature to save her world
            from apocalyptic doom. Will she survive the ultimate sacrifice?
          </span>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6">
          {all_shifter.map((book) => (
            <div className="relative group  lg:w-72">
              <img src={book.imagelink} alt="" className="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50  rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                <h2 className="lg:text-xl text-base text-center mx-5 mb-2 cinzel-decorative-bold capitalize">
                  {book.name}
                </h2>
                <a href={book.amazonlink}>
                  <button className="bg-white text-black text-sm lg:px-4 px-2 py-2 rounded cinzel-decorative-regular mt-3">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 lg:mt-24">
        <div>
          <div className="flex items-center justify-center my-8">
            <div className="w-1/4 border-t border-gray-400"></div>
            <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
              THE EXPERIMENTAL SERIES
            </span>
            <div className="w-1/4 border-t border-gray-400"></div>
          </div>
          <span className="text-white text-center flex justify-center lg:mx-80 mx-5 mt-3 text-base lg:text-lg">
            In a neon-drenched future, cyborg assassin Alina and bounty huntress
            Luna fight corruption and uncover shocking truths. With AI
            companions and unexpected alliances, they'll face their past to save
            humanity's future. Ready for the ride?
          </span>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6 ">
          {experimental_series.map((book) => (
            <div className="relative group  lg:w-72">
              <img src={book.imagelink} alt="" className="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50  rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                <h2 className="lg:text-xl text-base text-center mx-5 mb-2 cinzel-decorative-bold capitalize">
                  {book.name}
                </h2>
                <a href={book.amazonlink}>
                  <button className="bg-white text-black text-sm lg:px-4 px-2 py-2 rounded cinzel-decorative-regular mt-3">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 lg:mt-24">
        <div>
          <div className="flex items-center justify-center my-8">
            <div className="w-1/4 border-t border-gray-400"></div>
            <span className="mx-4 lg:text-2xl text-xl text-center tracking-wide text-white cinzel-decorative-regular">
              MORE BOOKS BY QATARINA WANDERS
            </span>
            <div className="w-1/4 border-t border-gray-400"></div>
          </div>
          <span className="text-white text-center flex justify-center lg:mx-80 mx-5 mt-3 text-base lg:text-lg">
            Unlock your potential with Qatarina Wanders' transformative books:
            "The Tya Practice" for spiritual growth, "Overcoming Chronic Pain"
            for holistic healing, "Unicorn Planner" for crushing goals. Click to
            revolutionize your life today!
          </span>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 lg:mx-20 mx-5 lg:mt-14 mt-5 lg:gap-8 gap-6">
          {more_books.map((book) => (
            <div className="relative group  lg:w-72">
              <img src={book.imagelink} alt="" className="" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50  rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 text-white">
                <h2 className="lg:text-xl text-base text-center mx-5 mb-2 cinzel-decorative-bold capitalize">
                  {book.name}
                </h2>
                <a href={book.amazonlink}>
                  <button className="bg-white text-sm text-black  lg:px-4 px-2 py-2 rounded cinzel-decorative-regular mt-3">
                    Read More
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-black ">
        <NewsLetter />
      </div>
    </section>
  );
};

export default Books;
