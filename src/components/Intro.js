// components/Intro.js
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import WordCycler from './WordCycler';

const words = ["Customer Calls", "Podcasts", "Videos", "Spiritual Talks", "Educational Lectures", "Meetings"];
const delays = [50, 2000, 2000, 2000, 2000, 2000, 1000];

const Intro = () => {
  const { t } = useTranslation();
  const dashboardRef = useRef(null);

  useEffect(() => {
    const initializeDashboard = () => {
      if (dashboardRef.current) {
        dashboardRef.current.style.transform = 'perspective(1000px) rotateX(15deg) rotateY(-10deg) translateY(50px) scale(0.8)';
        dashboardRef.current.style.opacity = '1';
        dashboardRef.current.style.visibility = 'visible';
        dashboardRef.current.style.display = 'block';
        dashboardRef.current.style.transition = 'none'; // Ensure no transition delay
      }
    };
    
    const handleScroll = () => {
      if (dashboardRef.current) {
        const rect = dashboardRef.current.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        // Always apply 3D effect when in viewport - ultra-fast response
        if (isInViewport) {
          // Ultra-fast scroll calculation - animation completes in 60% of viewport
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.6)));
          const rotateX = 15 - (scrollProgress * 15); // Reduce rotation from 15deg to 0deg
          const rotateY = -10 + (scrollProgress * 10); // Adjust Y rotation from -10deg to 0deg
          const translateY = 50 - (scrollProgress * 50); // Move up from 50px to 0px
          const scale = 0.8 + (scrollProgress * 0.2); // Scale from 0.8 to 1.0 (100%)
          
          dashboardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px) scale(${scale})`;
        }
      }
    };

    // Initialize immediately - no delay
    initializeDashboard();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="intro">
      <div className="mt-12 mb-4 flex flex-col w-full items-center justify-center p-8">
        <div className="mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{t('Used by over 20,000 creators and brands')}</p>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-center font-bold text-black dark:text-white">{t('Create 100x more content from your')}</h1>
        <WordCycler words={words} delays={delays} defaultDelay={1000} />
      <p className='flex max-w-96 my-8 text-center text-xl font-light md:font-regular text-gray-600 dark:text-gray-300'>{t('Get instant transcript, show notes, clips, chapters and more!')}</p>
      <div className='flex flex-col w-full sm:w-fit items-center justify-center gap-2'>
        <button
          className='mt-4 flex h-12 w-full sm:w-fit sm:px-8 bg-gradient-to-r from-[#007AFF] to-[#F300FF] dark:bg-white dark:text-black text-white font-medium text-xl rounded-lg shadow-[0_0_5px_rgba(98,0,128,0.6)] hover:shadow-[0_0_10px_rgba(98,0,128,0.6)] items-center justify-center'
          onClick={() => window.location.href = 'https://podium.page/create-account'}
        >
          {t('Try it for free →')}
        </button>
        <p className='flex text-sm font-regular text-gray-400 dark:text-gray-500'>{t('No credit card required')}</p>
      </div>
      </div>
      <div className='my-4 flex flex-col items-center justify-center px-8'>
        <div className='flex flex-wrap w-full px-4 items-center justify-center mt-8 pb-8 gap-8 lg:gap-12'>
            <img
                src="https://framerusercontent.com/images/XgvgnSlwj9M6jJrGkeHYMIAY.svg"
                alt="Twit logo SVG"
                className="h-10"
            />
            <img
                src="https://framerusercontent.com/images/WA70wRobpWFa7C46F2cEvBJRE.svg"
                alt="Nerdwallet logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/TxxBW9FVSveHHhNzoWs1j6zSBg.svg?scale-down-to=512"
                alt="Buzzsprout logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/3a2AlDHrmc0wdCC3CdrvqiyxlHU.svg"
                alt="mediaworks logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/6fjbNSr8YH9KsQTYUVMggJ0KEHc.svg"
                alt="Vast logo SVG"
                className="h-6"
            />
            <img
                src="https://framerusercontent.com/images/hBERXmSvjr2ZJYOD3DffA9tDps.svg"
                alt="Torch logo SVG"
                className="h-6"
            />
        </div>
        <div className='mt-8 mx-auto px-4 hidden md:flex max-w-5xl'>
            <img
                ref={dashboardRef}
                src="https://framerusercontent.com/images/XEmv5vqoiWWArC0PPHNUalrY10U.svg"
                alt="Podium dashboard interface"
                className="dashboard-image"
                style={{ 
                  cursor: 'pointer',
                  opacity: 1,
                  visibility: 'visible',
                  display: 'block',
                  minHeight: '200px',
                  minWidth: '200px'
                }}
            />
        </div>
      </div>
    </section>
  );
};

export default Intro;