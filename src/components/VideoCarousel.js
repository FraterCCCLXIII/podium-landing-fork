import React, { useRef, useState, useEffect } from "react";

const VideoCarousel = () => {
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Array of video data (video URL, name, and podcast title)
  const videos = [
    {
      url: "https://framerusercontent.com/assets/xwXQjCJ2PuvpoJ6VflMoeEFVMT8.mp4",
      name: "Anne Ganguzza",
      podcast: "VO BOSS Podcast",
    },
    {
      url: "https://framerusercontent.com/assets/tVm2kp6iiLhLWkeMSaMTlZX9s24.mp4",
      name: "Louis Zezeran",
      podcast: "Combat Ready",
    },
    {
      url: "https://framerusercontent.com/assets/wxt4BoeINd89oMP4Oz0aCwiFU8.mp4",
      name: "Neena Perez",
      podcast: "Straight Talk No Sugar Added",
    },
    {
      url: "https://framerusercontent.com/assets/QXwShHFHQp8lwHYULUvVgcsgOcM.mp4",
      name: "Justin Hange",
      podcast: "Siren Mastering",
    },
    {
      url: "https://framerusercontent.com/assets/zcAakVOAzzZMzsCRh0zRMHKIlvs.mp4",
      name: "Susan Anderson",
      podcast: "Entrepreneurs Gone Wild",
    },
    {
      url: "https://framerusercontent.com/assets/zqOyE9GilGjRI1HqkM2dWewczw.mp4",
      name: "Ray Doustdar",
      podcast: "Deep Shallow Dive Podcast",
    },
    {
      url: "https://framerusercontent.com/assets/wsWP1TyYlxUGvODyYiHJsM590.mp4",
      name: "Dr. mOe Anderson",
      podcast: "Perpertual mOetion",
    },
  ];

  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Handle user interaction to enable video playback
  const handleUserInteraction = (videoElement) => {
    if (!hasUserInteracted) {
      setHasUserInteracted(true);
    }
    // Toggle play/pause when clicked
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  // Check if the carousel is at the start or end of scroll
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScrollPosition(); // Initial check on mount
    window.addEventListener("resize", checkScrollPosition); // Re-check on resize

    return () => {
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Scroll to the right by the full carousel width
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll to the left by the full carousel width
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Scrollable container */}
      <div
        ref={carouselRef}
        onScroll={checkScrollPosition}
        className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory"
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 snap-center rounded-2xl overflow-hidden relative group ${index === 0 ? 'ml-4' : ''}`}
          >
            <div className="relative">
              <video
                src={video.url}
                className="w-full h-96 object-cover rounded-2xl"
                onMouseEnter={(e) => hasUserInteracted && e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
                onClick={(e) => handleUserInteraction(e.target)}
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 rounded-2xl pointer-events-none">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer pointer-events-none"
                  onClick={(e) => {
                    const videoElement = e.target.closest('.relative').querySelector('video');
                    handleUserInteraction(videoElement);
                  }}
                >
                  <svg 
                    className="w-12 h-12 text-white ml-1 drop-shadow-lg rounded-lg" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-center p-2 bg-transparent">
              <h3 className="font-bold text-black dark:text-dark-text">{video.name}</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">{video.podcast}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right-pointer button */}
      {showRightButton && (
        <button
          className="video-carousel-nav-btn absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 border border-white/20 dark:border-gray-600/20 outline-none rounded-full shadow-2xl"
          onClick={scrollRight}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
          </svg>
        </button>
      )}

      {/* Left-pointer button */}
      {showLeftButton && (
        <button
          className="video-carousel-nav-btn absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl text-white flex items-center justify-center hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 border border-white/20 dark:border-gray-600/20 outline-none rounded-full shadow-2xl"
          onClick={scrollLeft}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoCarousel;
