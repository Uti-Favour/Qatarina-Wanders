import React, { FC } from "react";
import testimony from "../constants/testimony";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

const Testimonial: FC = () => {
  return (
    <>
      <section className="mt-16 bg-[url('https://images.pexels.com/photos/720505/pexels-photo-720505.jpeg?auto=compress&cs=tinysrgb&w=600')] py-14">
        <div>
            <h1 className="lg:text-8xl text-7xl flex justify-center text-white great-vibes-regular">Testimonials</h1>
        </div>
        <div className="text-white lg:flex justify-between lg:mx-10 mx-5 mt-10">
          <div className="space-y-8 max-w-lg">
            <h1 className="lg:text-6xl text-4xl">What Readers Say About The Books</h1>
            <div className="h-[2xp] w-[5px] bg-white"></div>
            <p className="text-lg max-w-sm">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text. All the Lorem Ipsum generators.
            </p>
            <div className="h-2 w-20 bg-white"></div>

            <div className="text-white">
            <div>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
                <span>(5/5) Overall Customer Rating</span>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 max-w-3xl lg:mt-0 mt-8">
            {testimony.map((review, index) => (
              <div
                key={index}
                className="py-5 px-5  bg-[url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg&ga=GA1.1.158272412.1710257775&semt=ais_user')] text-black rounded-lg  space-y-4 hover:scale-95 hover:transition-all"
              >
                <div className="flex space-x-4 mb-2">
                <img
                  src={review.image}
                  alt="image"
                  className="rounded-full lg:w-14 w-14 lg:h-14 h-14 object-cover"
                />
            <div>
            <span className="text-xl font-medium">{review.name}</span>
                <div>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
            </div>
                </div>
                <strong className="mt-8 text-lg">"{review.quote}"</strong>
                <p className="text-gray-800">{review.testimony}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
