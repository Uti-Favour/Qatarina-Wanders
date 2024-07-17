import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import image1 from "/src/assets/images/Quatarina-Headshot-1-removebg.png";
import image2 from "/src/assets/images/1-removebg-preview.png";
import image3 from "/src/assets/images/2-removebg-preview (1).png";

const contents = [
  {
    image: image1,
    background: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Quatarina Wanders",
    subtitle: "New York Times Bestselling Author",
    button: "Learn More",
  },
  {
    image: image2,
    background: "https://images.unsplash.com/photo-1474983797926-3939622ca489?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mystical Forest",
    subtitle: "An Enchanting Tale",
    button: "Discover",
  },
  {
    image: image3,
    background: "https://images.unsplash.com/photo-1442029739115-ce733f0de45e?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Majestic Mountains",
    subtitle: "A Journey to Remember",
    button: "Explore",
  },
];

const ONE_SECOND = 1000000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const SliderHero: React.FC = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setImgIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < contents.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const previousImage = () => {
    setImgIndex((prev) => (prev > 0 ? prev - 1 : contents.length - 1));
  };

  const nextImage = () => {
    setImgIndex((prev) => (prev < contents.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-neutral-950 mt-10">
      <motion.div
        className="flex w-full h-full"
        style={{ x: dragX }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        transition={SPRING_OPTIONS}
      >
        <div className="flex w-full h-full">
          {contents.map((content, i) => (
            <motion.div
              key={i}
              className="w-full h-full flex-shrink-0 relative"
              animate={{ x: `-${imgIndex * 100}%` }}
              transition={SPRING_OPTIONS}
              style={{
                backgroundImage: `url(${content.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {i === 0 ? (
                <div className="lg:flex lg:h-full  justify-between lg:mr-24">
                  <div className="max-w-lg hidden lg:block ml-10">
                    <img
                      src={content.image}
                      alt={`Image ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className=" flex justify-center items-center mt-32">
                  <div className="text-center">
                  <h2 className="text-white lg:text-6xl text-5xl font-bold mb-4 cinzel-decorative-regular">
                      {content.title}
                    </h2>
                    <p className="text-white text-lg mb-6 cinzel-decorative-regular mx-5 lg:mx-0">{content.subtitle}</p>
                   <a href="#about">
                   <button className="bg-white text-black py-4 px-16 font-semibold cinzel-decorative-regular">
                      {content.button}
                    </button>
                   </a>
                    </div> 
                  </div>
                  <div className="lg:w-1/2 block lg:hidden">
                    <img
                      src={content.image}
                      alt={`Image ${i + 1}`}
                      className=""
                    />
                  </div>
                </div>
              ) : (
                <div className="lg:flex lg:h-full mt-24">
                  <div className="w-1/2 flex flex-col justify-center items-center px-8">
                    <h2 className="text-white text-4xl font-bold mb-4">
                      {content.title}
                    </h2>
                    <p className="text-white text-lg mb-6">{content.subtitle}</p>
                    <button className="bg-white text-black py-2 px-6 rounded-full">
                      {content.button}
                    </button>
                  </div>
                  <div className="w-1/2">
                    <img
                      src={content.image}
                      alt={`Image ${i + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <button
        onClick={previousImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default SliderHero;
