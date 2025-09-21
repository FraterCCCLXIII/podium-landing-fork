import React from 'react';

const LogoCarousel = () => {
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

  return (
    <div className="logo-carousel-container overflow-hidden py-4">
      <div className="animate-scroll flex items-center">
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
  );
};

export default LogoCarousel;
