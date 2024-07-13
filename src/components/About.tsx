import React from "react";
import quatarina from "/src/assets/images/Quatarina-Headshot-4.jpg";
const About = () => {
  return (
    <>
      <section className="text-white  mt-10" id="about">
        <div className="flex justify-center text-center">
          <h1 className="font-semibold lg:text-8xl text-6xl great-vibes-regular">
            About Quatarina Wanders
          </h1>
        </div>
        <div className="lg:flex justify-between lg:mx-10 mx-5 lg:mt-14">
        <div className="max-w-2xl lg:mt-0 mt-10">
            <img
              src={quatarina}
              alt="quatarina"
              className="lg:rounded-tl-[80px] rounded-tl-[50px] lg:h-[800px] lg:w-[1000px] object-cover "
            />
          </div>
          <div>
            <div className="space-y-6 max-w-xl mt-10">
              <p>
                Qatarina Wanders, the Founder and CEO (or Head Word Wizardess)
                of WanderingWords Media, is a former circus performer turned
                acclaimed author and self-made businesswoman, known for her
                relentless passion for the written word. With a master's in
                Editing and Publishing and a Ph.D. in Comparative World
                Literature, Qatarina's academic and professional journey is as
                diverse as it is inspiring.
              </p>
              <p>
                Over the past two decades, Qatarina has edited over 7,000 books
                and ghostwritten hundreds, including New York Times and Wall
                Street Journal bestsellers. Her extensive experience in
                self-publishing and editing uniquely positions her to help
                authors realize their dreams of publication and share their
                messages with the world. Teams she has led have been
                instrumental in producing a vast array of successful books,
                showcasing her expertise and dedication.
              </p>
              <p>
                Recognizing the need for traditional-publishing quality in the
                self-publishing world, Qatarina founded Wandering Words Media in
                2016. This boutique publishing house embraces the dark academia
                aesthetic, curating works that delve into the shadowy depths of
                the human experience. With a mission to publish books that
                challenge conventional narratives and provoke deep
                introspection, Wandering Words Media has become a beacon for
                readers and writers who share a passion for the macabre, the
                mysterious, and the intellectually stimulating.
              </p>
              <p>
                Qatarina loves nothing more than helping authors polish their
                manuscripts into gleaming jewels and discovering the next
                mind-bending tale to share with the world. At Wandering Words
                Media, she combines her passion for literature with her love for
                quirky, dark stories, creating a haven for unconventional ideas
                and narratives.
              </p>
            </div>
            <div className="mt-10">
              <a href="https://www.amazon.com/stores/Qatarina-Wanders/author/B07YGRBFFL?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">
                <button className="py-3 px-10 bg-white text-black text-lg font-semibold rounded-xl ">
                  Start Reading Now
                </button>
              </a>
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default About;
