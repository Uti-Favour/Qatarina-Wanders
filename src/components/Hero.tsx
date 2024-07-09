import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import quatarina_headshot from "/src/assets/images/Quatarina-Headshot-2.jpg";

const Hero: FC = () => {
  return (
    <>
      <section className="bg-black text-white">
        
        <div className=" h-screen lg:flex lg:justify-between">
          {/* Page Left */}
          <div className="max-w-2xl space-y-8 ml-8 lg:mt-28">
            <h1 className="max-w-xl lg:text-7xl text-6xl">
              Books that shift your perspective.
            </h1>
            <p className="max-w-lg">
              Qatarina Wanders is a former circus performer turned author and
              self-made businesswoman (with a wee bit of a unicorn obsession).
              She has edited more than 4,000 books and ghostwritten over 100,
              including New York Times and Wall Street Journal bestsellers.
            </p>

            {/* Buttons */}
            <div className="lg:space-x-6 space-y-4 lg:space-y-0">
              <a href="https://www.amazon.com/stores/Qatarina-Wanders/author/B07YGRBFFL?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">
              <button className="lg:px-10 px-20 py-3 rounded-3xl bg-white text-black font-semibold">
                Meet Quatarina
              </button>
              </a>
              <button className="lg:px-10 px-20 py-3 rounded-3xl bg-white text-black font-semibold">
                See My Books <FontAwesomeIcon icon={faBook} />
                <i className="fas fa-book"></i>
              </button>
            </div>
            {/* <video className='h-screen' autoPlay muted loop>
                <source src='https://videos.pexels.com/video-files/5427788/5427788-uhd_2160_4096_25fps.mp4' type='video/mp4'/>
            </video> */}

            <div>
              <h2 className="text-xl font-semibold">As Seen On:</h2>
              <div className=" flex space-x-4 ">
                <img
                  src="https://cdn.freebiesupply.com/images/large/2x/cbs-logo-black-and-white.png"
                  alt="cbs-logo"
                  className="object-contain w-28"
                />
                <img
                  src="src/assets/images/NBC_Peacock_1986.svg"
                  alt="cbs-logo"
                  className="w-14"
                />
                <img
                  src="https://w7.pngwing.com/pngs/179/151/png-transparent-american-broadcasting-company-abc-news-logo-good-morning-television-text-logo-thumbnail.png"
                  alt="cbs-logo"
                  className="rounded-full w-14"
                />
              </div>
            </div>
          </div>
          {/* Ends Here */}

          {/* Quatarina's HeadShot */}
          <div className="grayscale max-w-2xl">
            <img
              src={quatarina_headshot}
              alt="Headshot"
              className="h-screen object-cover rounded-bl-[80px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
