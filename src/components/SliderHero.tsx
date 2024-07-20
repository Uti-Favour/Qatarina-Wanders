import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";
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
    title: "Dark Academia Fantasy",
    subtitle: "An Enchanting Tale",
    button: "Read Now",
  },
  {
    image: image3,
    background:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84d935bc-6f35-47c7-88ca-108d3e8a3c8f/dgosm5d-b1dc0961-750a-4c89-97ea-cc6cc8b00495.jpg/v1/fill/w_1154,h_692,q_70,strp/gothic_castle_2_by_hentaiuser33_dgosm5d-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAwIiwicGF0aCI6IlwvZlwvODRkOTM1YmMtNmYzNS00N2M3LTg4Y2EtMTA4ZDNlOGEzYzhmXC9kZ29zbTVkLWIxZGMwOTYxLTc1MGEtNGM4OS05N2VhLWNjNmNjOGIwMDQ5NS5qcGciLCJ3aWR0aCI6Ijw9MTE2NyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0kQHhoHS13ayZ288OrYbh8geqK6LvY0XHFm5yvfXrdI",
    title: "Dark Apocalyptic Series",
    subtitle: "A Thrilling Adventure",
    button: "Read Now",
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
    <div className="relative w-screen lg:h-screen md:h-screen overflow-hidden bg-neutral-950 mt-10 h-[110vh] ">
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
              <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
              <div className="max-h-screen lg:max-h-none">
                {i === 0 ? (
                  <div className="lg:flex lg:h-full justify-between lg:mr-24 relative z-10">
                    <div className="max-w-lg hidden lg:block ml-10">
                      <img
                        src={content.image}
                        alt={`Image ${i + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex justify-center items-center lg:mt-0 mt-32">
                      <div className="text-center">
                        <h2 className="text-white lg:text-6xl text-5xl font-bold mb-4 cinzel-decorative-bold">
                          {content.title}
                        </h2>
                        <p className="text-white text-lg mb-6 cinzel-decorative-regular mx-5 lg:mx-0">
                          {content.subtitle}
                        </p>
                        <Link to={'/about'}>
                          <button className="bg-white text-black py-4 px-16 font-semibold cinzel-decorative-regular">
                            {content.button}
                          </button>
                        </Link>
                      </div>
                    </div>
                    <div className="lg:w-1/2 block lg:hidden lg:mt-0">
                      <div className="flex justify-center">
                        <img
                          src={content.image}
                          alt={`Image ${i + 1}`}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="lg:flex justify-between items-center lg:mx-40 mt-32 lg:mt-16 relative z-10">
                    <div className="text-white text-center space-y-4">
                      <h1 className="lg:text-5xl text-4xl cinzel-decorative-bold">{content.title}</h1>
                      <p className="cinzel-decorative-regular text-lg text-gray-100">{content.subtitle}</p>
                      <Link to={'/books'}><button className="bg-white text-black py-4 px-16 font-semibold cinzel-decorative-regular mt-8">{content.button}</button></Link>
                    </div>
                    <div className="lg:mt-0 mt-10 flex justify-center">
                      <img src={content.image} className="lg:w-[500px] w-72 lg:h-[500px] h-72 object-contain" />
                    </div>
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
