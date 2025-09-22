import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);
  const warpSpeedRef = useRef(0);
  const animationActiveRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Starfield settings
    const numStars = 1900;
    const focalLength = canvas.width * 2;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    const baseTrailLength = 2;
    const maxTrailLength = 30;

    // Initialize stars
    const initializeStars = () => {
      starsRef.current = [];
      for (let i = 0; i < numStars; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          o: 0.5 + Math.random() * 0.5,
          trail: []
        });
      }
    };

    // Update star positions
    const moveStars = () => {
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        // Move star based on warp speed - always forward
        const speed = 1 + warpSpeedRef.current * 50;
        star.z -= speed;
        // Reset star position when it passes the viewer
        if (star.z < 1) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.trail = [];
        }
      }
    };

    // Draw stars and their trails
    const drawStars = () => {
      // Resize canvas if needed
      if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        centerX = canvas.width / 2;
        centerY = canvas.height / 2;
      }

      // Calculate trail length based on warp speed
      const trailLength = Math.floor(
        baseTrailLength + warpSpeedRef.current * (maxTrailLength - baseTrailLength)
      );

      // Clear canvas with fade effect based on warp speed
      const clearAlpha = 1 - warpSpeedRef.current * 0.8;
      ctx.fillStyle = `rgba(0,0,0,${clearAlpha})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Check if stars should be visible (fade out when carousel is centered and hide completely when past)
      const carouselContainer = document.querySelector('.mx-auto.px-4.hidden.md\\:flex.max-w-5xl.relative');
      let starOpacity = 1;
      
      if (carouselContainer) {
        const rect = carouselContainer.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Calculate carousel scale progress (0 to 1)
          const carouselScrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.6)));
          
          // Start fading out when carousel reaches 80% scale, complete fade at 100%
          const fadeStart = 0.8;
          if (carouselScrollProgress >= fadeStart) {
            const fadeProgress = (carouselScrollProgress - fadeStart) / (1 - fadeStart);
            starOpacity = Math.max(0, 1 - fadeProgress); // Fade from 1 to 0
          }
        } else {
          // Completely hide stars when carousel is not in viewport (scrolled past)
          starOpacity = 0;
        }
      }

      // Draw stars and trails with opacity
      for (let i = 0; i < starsRef.current.length; i++) {
        const star = starsRef.current[i];
        
        // Calculate screen position with perspective
        const px = (star.x - centerX) * (focalLength / star.z) + centerX;
        const py = (star.y - centerY) * (focalLength / star.z) + centerY;

        // Add position to trail
        star.trail.push({ x: px, y: py });
        if (star.trail.length > trailLength) {
          star.trail.shift();
        }

        // Draw trail with opacity
        if (star.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(star.trail[0].x, star.trail[0].y);
          for (let j = 1; j < star.trail.length; j++) {
            ctx.lineTo(star.trail[j].x, star.trail[j].y);
          }
          ctx.strokeStyle = `rgba(255,255,255,${star.o * starOpacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw star with opacity
        ctx.fillStyle = `rgba(255,255,255,${star.o * starOpacity})`;
        ctx.fillRect(px, py, 1, 1);
      }
    };

    // Animation loop
    const animate = () => {
      if (animationActiveRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        moveStars();
        drawStars();
      }
    };

    // Initialize canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    };

    // Initialize
    resizeCanvas();
    initializeStars();
    animate();

    // Scroll handler to control warp speed based on overall page scroll
    const handleScroll = () => {
      // Calculate scroll progress based on overall page scroll
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 2; // Adjust this value to control when max speed is reached
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      // Check if carousel is at 100% scale (center screen)
      const carouselContainer = document.querySelector('.mx-auto.px-4.hidden.md\\:flex.max-w-5xl.relative');
      let carouselAtCenter = false;
      
      if (carouselContainer) {
        const rect = carouselContainer.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Calculate carousel scale progress (0 to 1)
          const carouselScrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight * 0.6)));
          carouselAtCenter = carouselScrollProgress >= 1; // Carousel is at 100% scale
        }
      }
      
      // Calculate warp speed based on scroll progress
      // Linear progression: slow at top, gradually faster as you scroll down
      if (carouselAtCenter) {
        warpSpeedRef.current = 0; // Stop generating stars
      } else {
        // Simple linear progression from 0 to max speed based on scroll position
        const maxSpeed = 3;
        warpSpeedRef.current = Math.max(0, Math.min(scrollProgress * maxSpeed, maxSpeed));
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default Starfield;
