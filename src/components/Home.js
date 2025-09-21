import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Intro from './Intro';
import VideoTestimonials from './VideoTestimonials';
import Features from './Features';
import FeaturedOn from './FeaturedOn';
import CTA from './CTA';
import Testimonials1 from './Testimonials1';
import Testimonials2 from './Testimonials2';
import Faqs from './Faqs';
import ApiSection from './ApiSection';
import ClipsSection from './ClipsSection';
import Calculator from './Calculator';

const Home = () => {
  const featuresRef = useRef(null); // Create a ref for the Features section
  const location = useLocation();

  useEffect(() => {
    // Adjusted scroll behavior with offset to prevent content hiding behind the header
    const headerOffset = 50; // Adjust this value based on your header height
    if (location.hash === '#features' && featuresRef.current) {
      const elementPosition = featuresRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <div className="Home">
      <main>
        <Intro />
        <div ref={featuresRef}> 
          <Features />
        </div>
        <ClipsSection />
        <VideoTestimonials />
        <div className='bg-white'>
          <Calculator />
        </div>
        <FeaturedOn />
        <CTA />
        <div className='bg-gray-50'>
          <Testimonials1 />
        </div>
        <Faqs />
        <Testimonials2 />
        <CTA />
        <ApiSection />
      </main>
    </div>
  );
}

export default Home;