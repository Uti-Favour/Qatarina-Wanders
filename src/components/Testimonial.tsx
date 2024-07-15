import  { FC } from "react";
import testimony from "../constants/testimony";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import '../css/styles.css'

const Testimonial: FC = () => {
  return (
    <>
      <section className="mt-16 parallax bg-[url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0687daa4-87a2-44ff-bcb3-a87d32d90c17/detrhy4-5ec106e6-ea08-46b0-8fc8-ac7bc96309fc.jpg/v1/fill/w_1212,h_659,q_70,strp/mystery_monument_by_krannart_detrhy4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NCIsInBhdGgiOiJcL2ZcLzA2ODdkYWE0LTg3YTItNDRmZi1iY2IzLWE4N2QzMmQ5MGMxN1wvZGV0cmh5NC01ZWMxMDZlNi1lYTA4LTQ2YjAtOGZjOC1hYzdiYzk2MzA5ZmMuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4KaRk7sOE1OVSRxutgnBb8UMLDZwRfLSPpBpC6VeRNQ')] py-14 bg-no-repeat bg-cover">
        <div>
            <h1 className="lg:text-7xl text-7xl flex justify-center text-white  old-standard-tt-regular">Testimonials</h1>
        </div>
        <div className="text-white lg:flex justify-between lg:mx-10 mx-5 mt-10">
          <div className="space-y-8 max-w-lg">
            <h1 className="lg:text-6xl text-4xl ">What Readers Say About The Books</h1>
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
