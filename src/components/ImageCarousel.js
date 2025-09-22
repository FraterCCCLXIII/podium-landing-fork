import React, { useState, useEffect, useRef } from 'react';

const ImageCarousel = ({ showArrows, scrollProgress = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('idle'); // 'idle', 'fadeOut', 'fadeIn'
  const carouselRef = useRef(null);
  const imageRef = useRef(null);

  // Features array with the specified features
  const features = [
    {
      id: 0,
      title: "Shownotes",
      description: "AI-generated show notes that capture the essence of your content",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 1,
      title: "Chapters",
      description: "Automatically segment your content into digestible chapters",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Clips",
      description: "Extract highlight clips that engage your audience",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Transcripts",
      description: "Full transcripts with timestamps for easy reference",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6zm2 2a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Emails",
      description: "Convert your content into engaging email newsletters",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "AI Helper",
      description: "Your intelligent assistant for content creation and optimization",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  const nextImage = () => {
    if (isTransitioning) return;
    startTransition((currentIndex + 1) % features.length);
  };

  const prevImage = () => {
    if (isTransitioning) return;
    startTransition((currentIndex - 1 + features.length) % features.length);
  };

  const goToImage = (index) => {
    if (isTransitioning || index === currentIndex) return;
    startTransition(index);
  };

  const startTransition = (newIndex) => {
    setIsTransitioning(true);
    setAnimationPhase('fadeOut');
    
    // After fade out completes, change the image and start fade in
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimationPhase('fadeIn');
      
      // After fade in completes, reset to idle
      setTimeout(() => {
        setAnimationPhase('idle');
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  // Apply 3D transform to the currently active image
  const getImageTransform = () => {
    // Apply the same 3D effect to whichever image is currently active
    const rotateX = 15 - (scrollProgress * 15); // Reduce rotation from 15deg to 0deg
    const rotateY = -10 + (scrollProgress * 10); // Adjust Y rotation from -10deg to 0deg
    const translateY = 50 - (scrollProgress * 50); // Move up from 50px to 0px
    const scale = 0.8 + (scrollProgress * 0.2); // Scale from 0.8 to 1.0 (100%)
    
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px) scale(${scale})`;
  };

  return (
    <div className="mx-auto px-4 hidden md:flex max-w-5xl relative group">
      <div className="relative w-full max-w-5xl mx-auto px-4">
        {/* Navigation arrows - positioned outside image area */}
        {showArrows && (
          <>
            <button
              onClick={prevImage}
              disabled={isTransitioning}
              className="absolute -left-16 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                top: 'calc(50% - 130px)',
                opacity: scrollProgress >= 0.8 ? Math.min(1, (scrollProgress - 0.8) / 0.2) : 0,
                transition: 'opacity 3s ease-in-out'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextImage}
              disabled={isTransitioning}
              className="absolute -right-16 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ 
                top: 'calc(50% - 130px)',
                opacity: scrollProgress >= 0.8 ? Math.min(1, (scrollProgress - 0.8) / 0.2) : 0,
                transition: 'opacity 3s ease-in-out'
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Main image display with enhanced animations */}
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
          {/* Current image with enhanced fade/shrink animation */}
          <div className="relative w-full h-full">
            <img
              ref={imageRef}
              src="https://framerusercontent.com/images/XEmv5vqoiWWArC0PPHNUalrY10U.svg"
              alt="Dashboard Overview"
              className={`w-full h-full object-contain transition-all duration-300 ease-in-out ${
                animationPhase === 'fadeOut' 
                  ? 'animate-fade-out-shrink' 
                  : animationPhase === 'fadeIn'
                  ? 'animate-fade-in-grow'
                  : ''
              }`}
              style={{
                transform: getImageTransform(),
                transition: animationPhase !== 'idle' ? 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
              }}
            />
          </div>
        </div>

        {/* Feature description section - inspired by Time Magazine */}
        <div className="mt-8 text-center">
          {/* <h3 className={`text-2xl md:text-3xl font-bold text-black dark:text-white transition-all duration-300 ${
            animationPhase === 'fadeOut' ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            {features[currentIndex].title}
          </h3> */}
          <p className={`mt-2 text-lg text-gray-600 dark:text-gray-300 transition-all duration-300 delay-100 ${
            animationPhase === 'fadeOut' ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            {features[currentIndex].description}
          </p>
        </div>

        {/* Bottom navigation buttons with enhanced animations */}
        <div className="flex justify-center mt-6 mb-16 space-x-2">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => goToImage(index)}
              disabled={isTransitioning}
              className={`carousel-button flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                index === currentIndex
                  ? 'border-2 border-gray-200 bg-gray-200 text-gray-900 dark:border-2 dark:border-white dark:bg-black dark:text-white transform scale-105'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-200 dark:bg-black dark:text-white dark:hover:bg-gray-500 transform hover:scale-102'
              } ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
            >
              {/* Icon to the left of text */}
              <div className="flex items-center justify-center">
                {feature.icon}
              </div>
              <span className="text-sm font-medium whitespace-nowrap">
                {feature.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;