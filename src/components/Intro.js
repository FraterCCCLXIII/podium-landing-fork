import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import WordCycler from './WordCycler';
import LogoCarousel from './LogoCarousel';
import Starfield from './Starfield';
import ImageCarousel from './ImageCarousel';
import { useTheme } from '../contexts/ThemeContext';

const words = ["Customer Calls", "Podcasts", "Videos", "Spiritual Talks", "Educational Lectures", "Meetings"];
const delays = [50, 2000, 2000, 2000, 2000, 2000, 1000];

const Intro = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [showCarouselArrows, setShowCarouselArrows] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Find the carousel container instead of dashboardRef
      const carouselContainer = document.querySelector('.mx-auto.px-4.hidden.md\\:flex.max-w-5xl.relative');
      if (carouselContainer) {
        const rect = carouselContainer.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Ultra-fast scroll calculation - animation completes in 60% of viewport
          const currentScrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.6)));
          setScrollProgress(currentScrollProgress);
          
          // Show carousel arrows when first image reaches 100% scale (center screen)
          if (currentScrollProgress >= 1) {
            setShowCarouselArrows(true);
          } else {
            setShowCarouselArrows(false);
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="intro relative">
      <Starfield />
      <div className="mb-4 flex flex-col w-full items-center justify-center p-8 relative z-10">
            <div className="mb-6 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-full flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('Used by over 20,000 creators and brands')}</p>
            </div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl text-center font-medium text-black dark:text-white">{t('Get more from your')}</h1>
        <WordCycler words={words} delays={delays} defaultDelay={1000} />
      <p className='flex max-w-4xl my-8 text-center text-xl font-light md:font-regular text-gray-600 dark:text-gray-300'>
        {t('The ultimate AI tool for pro Podcasters, Marketers, and Content Creators—')}
        <br />
        {t('Get instant transcripts, show notes, clips, chapters and more!')}
      </p>
      <div className='flex flex-col w-full sm:w-fit items-center justify-center gap-2'>
            <button
              className='gradient-button mt-4 flex h-12 w-full sm:w-fit sm:px-8 bg-gradient-to-r from-[#007AFF] to-[#F300FF] text-white font-medium text-xl rounded-lg shadow-[0_0_5px_rgba(98,0,128,0.6)] hover:shadow-[0_0_10px_rgba(98,0,128,0.6)] items-center justify-center'
              style={isDark ? { background: 'white', color: 'black' } : {}}
              onClick={() => window.location.href = 'https://podium.page/create-account'}
            >
              {t('Try it for free →')}
            </button>
      </div>
      </div>
      <div className='my-4 flex flex-col items-center justify-center relative'>
        <div className='mx-auto px-4 hidden md:flex max-w-5xl relative'>
          <ImageCarousel showArrows={showCarouselArrows} scrollProgress={scrollProgress} />
        </div>
        <div className='w-full mt-16 mb-16'>
          <h2 className="text-black dark:text-white text-center text-xl font-semibold mb-4 px-8">
            {t('Trusted by leading companies')}
          </h2>
          <LogoCarousel />
        </div>
      </div>
    </section>
  );
};

export default Intro;