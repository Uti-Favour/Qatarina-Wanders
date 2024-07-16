import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "/src/assets/images/Quatarina-Headshot-3.jpg"
import image2 from "/src/assets/images/1-removebg-preview.png"
import image3 from "/src/assets/images/2-removebg-preview (1).png"



const imgs = [
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1474983797926-3939622ca489?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1442029739115-ce733f0de45e?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const contents = [
  {
    image : image1,
    title : "Quatarina Wanders",
    subtitle: "New York Times Bestselling Author",
    button: "Learn More",
  },
  {
    image : image2,
    title: "Mystical Forest",
    subtitle: "An Enchanting Tale",
    button: "Discover",
  },
  {
    image : image3,
    title: "Majestic Mountains",
    subtitle: "A Journey to Remember",
    button: "Explore",
  },
];

const ONE_SECOND = 1000;
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
        setImgIndex((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const previousImage = () => {
    setImgIndex((prev) => (prev > 0 ? prev - 1 : imgs.length - 1));
  };

  const nextImage = () => {
    setImgIndex((prev) => (prev < imgs.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-screen h-screen  overflow-hidden bg-neutral-950">
      <motion.div
        className="flex w-full h-full"
        style={{ x: dragX }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={onDragEnd}
        transition={SPRING_OPTIONS}
      >
        <div className="flex w-full h-full ">
          {imgs.map((img, i) => (
            <motion.div
              key={i}
              className="w-full h-full flex-shrink-0 relative"
              animate={{ x: `-${imgIndex * 100}%` }}
              transition={SPRING_OPTIONS}
            >
              <img
                src={img}
                alt={`Image ${i + 1}`}
                className="object-cover w-full h-full"
              />
              <div>
              
              </div>
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
