import React, { useEffect } from "react";
import { all_books } from "../constants/booklist";
import "../css/styles.css"; // Import your CSS file for infinite scroll


const Series: React.FC = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner =
          scroller.querySelector<HTMLElement>(".scroller__inner");
        if (scrollerInner) {
          const scrollerContent = Array.from(scrollerInner.children);

          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            duplicatedItem.setAttribute("aria-hidden", "true");
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }

    return () => {
      scrollers.forEach((scroller) => {
        scroller.removeAttribute("data-animated");
        const scrollerInner =
          scroller.querySelector<HTMLElement>(".scroller__inner");
        if (scrollerInner) {
          const children = Array.from(scrollerInner.children);
          children.forEach((child, index) => {
            if (index >= children.length / 2) {
              scrollerInner.removeChild(child);
            }
          });
        }
      });
    };
  }, []); // Empty dependency array ensures useEffect runs once

  return (
    <section className=" text-white lg:py-5">
      <div className="mt-16">
        <h1 className="lg:text-6xl text-4xl lg:mx-[200px] mx-5 text-center flex justify-center cinzel-decorative-regular">
        Explore My Collection of Different Genres 
        </h1>
      </div>

      <div className="flex justify-center mt-10">
        {/* Infinite Scroll Section */}
        <div className="scroller" data-speed="slow">
          <ul className="scroller__inner flex justify-center">
            {all_books.map((books, index) => (
              <li key={index}>
               <a href={books.amazonlink}>
               <img
                  src={books.imagelink}
                  alt="animage series"
                  className="w-60"
                />
               </a>
              </li>
            ))}
          </ul>
        </div>  
      </div>
      <div className="text-white flex justify-center items-center mt-10 text-center">
      <a href="https://www.amazon.com/stores/Qatarina-Wanders/author/B07YGRBFFL?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true">    <h2 className="lg:text-4xl text-2xl cinzel-decorative-regular underline">Find me on Amazon   <i className="fa-brands fa-amazon lg:text-4xl text-2xl"></i></h2></a>
        </div>
    </section>
  );
};

export default Series;
