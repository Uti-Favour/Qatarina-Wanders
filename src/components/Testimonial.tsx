import  { FC } from "react";
import testimony from "../constants/testimony";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import '../css/styles.css'

const Testimonial: FC = () => {
  return (
    <>
      <section className=" parallax  py-14">
        <div>
            <h1 className="lg:text-7xl text-4xl flex justify-center text-white   cinzel-decorative-regular">Testimonials</h1>
        </div>
        <div className="text-white lg:flex justify-between lg:mx-10 mx-5 mt-10">
          <div className="space-y-8 max-w-lg">
            <h1 className="lg:text-5xl text-3xl  cinzel-decorative-regular">What Readers Say About The Books</h1>
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
                className="py-5 px-5  bg-white text-black rounded-lg  space-y-4 hover:scale-95 hover:transition-all"
              >
                <div className="flex space-x-4 mb-2">
                <img
                  src={review.image}
                  alt="image"
                  className="rounded-full lg:w-14 w-14 lg:h-14 h-14 object-cover"
                />
            <div>
            <span className="text-xl font-medium">{review.name}</span>
                <div className="text-yellow-500">
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
