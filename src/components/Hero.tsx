import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
// import quatarina_headshot from "/src/assets/images/Quatarina-Headshot-2.jpg";
import nbclogo from "/src/assets/images/NBC_Peacock_1986.svg"
import "../css/styles.css"


// Book Lists
import { all_books } from "../constants/booklist";
const Hero: FC = () => {
  return (
    <section className="relative lg:h-screen bg-black text-white pt-24 lg:py-0 ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full lg:h-[130%] h-[110%] overflow-hidden object-cover"
      >
        <source src="https://cdn.pixabay.com/video/2022/10/11/134355-759233649_large.mp4" type="video/mp4" />
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full lg:h-[120%] h-[110%] bg-black lg:opacity-60 opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 lg:flex h-full w-full lg:justify-between items-center">
        {/* Page Left */}
        <div className="max-w-2xl lg:space-y-8 space-y-7  lg:ml-10 ml-5 lg:mt-32 ">
          <h1 className="max-w-xl lg:text-6xl text-4xl  font-medium  cinzel-decorative-regular">
            Books That Will Blow Your Mind 
          </h1>
          <p className="max-w-lg">
            Qatarina Wanders is a former circus performer turned author and
            self-made businesswoman (with a wee bit of a unicorn obsession).
            She has edited more than 4,000 books and ghostwritten over 100,
            including New York Times and Wall Street Journal bestsellers.
          </p>

          {/* Buttons */}
          <div className="lg:space-x-6  lg:space-y-0 flex lg:flex-none space-x-2 items-center">
            <Link to={"/about"}>
              <button className="lg:px-10 px-5 py-3 rounded-3xl bg-white text-black font-semibold">
                Meet Qatarina
              </button>
            </Link>
           <Link to={"/books"}> <button className="lg:px-10 px-5 py-3 rounded-3xl bg-white text-black font-semibold">
              See My Books <FontAwesomeIcon icon={faBook} />
            </button></Link>
          </div>

          <div>
            <h2 className="text-xl font-semibold">As Seen On:</h2>
            <div className="flex space-x-4">
              <img
                src="https://cdn.freebiesupply.com/images/large/2x/cbs-logo-black-and-white.png"
                alt="cbs-logo"
                className="object-contain w-28"
              />
              <img
                src={nbclogo}
                alt="nbc-logo"
                className="w-14"
              />
              <img
                src="https://w7.pngwing.com/pngs/179/151/png-transparent-american-broadcasting-company-abc-news-logo-good-morning-television-text-logo-thumbnail.png"
                alt="abc-logo"
                className="rounded-full w-14"
              />
            </div>
          </div>
        </div>
        {/* Ends Here */}

        {/* Quatarina's HeadShot */}
        {/* <div className="max-w-2xl mt-10 lg:mt-0">
          <img
            src={quatarina_headshot}
            alt="Headshot"
            className="h-screen object-cover rounded-bl-[80px] "
          />
        </div> */}

       <div className='grid lg:grid-cols-4 grid-cols-3 max-w-lg mt-16 lg:mt-32 lg:mr-20 '>
       {all_books.map((series , index) => (
          <div key={index} className="">
            <img src={series.imagelink} alt="series" />
          </div>
        ))}
       </div>
      </div>
    </section>
  );
};

export default Hero;
