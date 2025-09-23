import React, { useEffect, useRef } from 'react';

const TrustedBySection = () => {
  const containerRef = useRef(null);
  
  // White logo files from your project
  const whiteLogos = [
    '/images/logos/buzzsprout_white.svg',
    '/images/logos/mediaworks_white.svg', 
    '/images/logos/nerdwallet_white.svg',
    '/images/logos/torch_white.svg',
    '/images/logos/twit_white.svg',
    '/images/logos/vast_white.svg'
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...whiteLogos, ...whiteLogos];

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Create a simple animation using requestAnimationFrame
      let startTime = null;
      const duration = 25000; // 25 seconds
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) % duration;
        const percentage = progress / duration;
        
        // Move from 0 to -50% (half the width for seamless loop)
        const translateX = percentage * -50;
        container.style.transform = `translateX(${translateX}%)`;
        
        requestAnimationFrame(animate);
      };
      
      // Set initial styles
      container.style.width = 'max-content';
      container.style.display = 'flex';
      container.style.position = 'relative';
      
      // Start animation
      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <section className="w-full mt-16">
      <h2 className="text-black dark:text-white text-center text-xl font-semibold mb-4 px-8">
        Trusted by leading companies
      </h2>
      <div className="overflow-hidden py-4">
        <div 
          ref={containerRef}
          className="flex items-center"
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 mr-20">
              <img 
                src={logo} 
                alt={`Logo ${index + 1}`}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
