import React, { useEffect, useState } from "react";

const WordCycler = ({ words, delays = [], defaultDelay = 2000 }) => {
  // Create an extended array with the first word duplicated at the end
  const extendedWords = [...words, words[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [currentDelay, setCurrentDelay] = useState(defaultDelay);
  const [currentHeight, setCurrentHeight] = useState(96); // Default height in px
  const [isSnapping, setIsSnapping] = useState(false); // Detect snap state

  // Breakpoint heights
  const heightMap = {
    default: 40, // px for base height
    md: 64,
    lg: 80,
  };

  // Function to detect active height based on breakpoint
  const updateHeight = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setCurrentHeight(heightMap.lg);
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      setCurrentHeight(heightMap.md);
    } else {
      setCurrentHeight(heightMap.default);
    }
  };

  useEffect(() => {
    // Set initial height
    updateHeight();

    // Add event listener to update height on resize
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (currentIndex === words.length) {
        // Reached the duplicate word; snap back to the first word instantly
        setIsSnapping(true); // Set snapping state
        setIsTransitioning(false);
        setCurrentIndex(0);

        // Re-enable transition after snapping back
        setTimeout(() => {
          setIsSnapping(false);
          setIsTransitioning(true);
        }, 50);
      } else {
        // Normal cycling
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }

      // Set delay for the next transition
      const nextDelay = delays[currentIndex + 1] || defaultDelay;
      setCurrentDelay(nextDelay);
    }, currentDelay);

    return () => clearTimeout(interval);
  }, [currentIndex, currentDelay, delays, defaultDelay, words.length]);

  return (
    <div className="h-10 md:h-16 lg:h-20 overflow-hidden relative text-2xl md:text-4xl lg:text-6xl items-center justify-center text-center font-medium text-indigo-600 dark:text-indigo-400">
      <div
        className={`w-full items-center justify-center ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateY(-${currentIndex * currentHeight}px)`,
        }}
      >
        {extendedWords.map((word, index) => {
          // Disable opacity transition during snapping
          const transitionStyle = isSnapping ? {} : { transition: "opacity 0.5s ease-in-out" };

          // Calculate opacity: fully opaque for currentIndex, fading for others
          const opacity =
            index === currentIndex
              ? 1
              : index === currentIndex - 1 || index === currentIndex + 1
              ? 0.1
              : 0;

          return (
            <div
              key={index}
              className={`h-10 md:h-16 lg:h-20 flex items-center justify-center`}
              style={{
                ...transitionStyle,
                opacity,
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WordCycler;
