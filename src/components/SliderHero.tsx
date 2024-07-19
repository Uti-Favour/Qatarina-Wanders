import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import image1 from "/src/assets/images/Quatarina-Headshot-1-removebg.png";
import image2 from "/src/assets/images/1-removebg-preview.png";
import image3 from "/src/assets/images/13-removebg-preview.png";

const contents = [
  {
    image: image1,
    background:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Qatarina Wanders",
    subtitle: "New York Times Bestselling Author",
    button: "Learn More",
  },
  {
    image: image2,
    background:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0687daa4-87a2-44ff-bcb3-a87d32d90c17/deuv4xf-69f31271-3739-4466-9c0d-ff6423946986.jpg/v1/fill/w_1193,h_670,q_70,strp/terror_mansion_by_krannart_deuv4xf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE5IiwicGF0aCI6IlwvZlwvMDY4N2RhYTQtODdhMi00NGZmLWJjYjMtYTg3ZDMyZDkwYzE3XC9kZXV2NHhmLTY5ZjMxMjcxLTM3MzktNDQ2Ni05YzBkLWZmNjQyMzk0Njk4Ni5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g_P5U6CT6oB951yIpnYp2PDTP8ZYb0EDlAyt21SlgPs",
    title: "Dark Academy Fantasy",
    subtitle: "An Enchanting Tale",
    button: "Read Now",
  },
  {
    image: image3,
    background:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0687daa4-87a2-44ff-bcb3-a87d32d90c17/deuv4xf-69f31271-3739-4466-9c0d-ff6423946986.jpg/v1/fill/w_1193,h_670,q_70,strp/terror_mansion_by_krannart_deuv4xf-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE5IiwicGF0aCI6IlwvZlwvMDY4N2RhYTQtODdhMi00NGZmLWJjYjMtYTg3ZDMyZDkwYzE3XC9kZXV2NHhmLTY5ZjMxMjcxLTM3MzktNDQ2Ni05YzBkLWZmNjQyMzk0Njk4Ni5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.g_P5U6CT6oB951yIpnYp2PDTP8ZYb0EDlAyt21SlgPs",
    title: "Apocalyptic Series",
    subtitle: "A Thrilling Adventure",
    button: "Read Now",
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
    <div className="relative w-screen lg:h-screen overflow-hidden bg-neutral-950 mt-10">
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
              className="w-full h-full flex-shrink-0 relative "
              animate={{ x: `-${imgIndex * 100}%` }}
              transition={SPRING_OPTIONS}
              style={{
                backgroundImage: `url(${content.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mt-32 lg:py-0">
                {i === 0 ? (
                  <div>

                  </div>
                ) : (
                  <div>
                  </div>
                )}
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
