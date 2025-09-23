import React, { useEffect, useState } from 'react';

const Slideshow = () => {
  const images = [
    'https://framerusercontent.com/images/wKJuJhZDoKw0rF3rfbR0MUXkpig.png', // Replace with your image URLs
    'https://framerusercontent.com/images/hsCdT8nctR43q6XlGLjitRBM.png?scale-down-to=1024',
    'https://framerusercontent.com/images/NgOPYa68NFDuechQmRgHXknxHlM.png?scale-down-to=1024',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 2000 ms = 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[94/59] overflow-hidden animate-fade-in">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
