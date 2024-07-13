import React, { useRef, useEffect } from 'react';

const images: string[] = [
  'https://images.unsplash.com/photo-1516117172878-fd2c41f4a759',
  'https://images.unsplash.com/photo-1532009324734-20a7a5813719',
  'https://images.unsplash.com/photo-1524429656589-6633a470097c',
  'https://images.unsplash.com/photo-1530224264768-7ff8c1789d79',
  'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
];

const Infinite: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      if (scrollContainer && scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="overflow-x-hidden w-full">
      <div ref={scrollRef} className="flex gap-4 animate-scroll whitespace-nowrap">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index}`} className="w-48 h-48 object-cover" />
        ))}
      </div>
    </div>
  );
};

export default Infinite;
