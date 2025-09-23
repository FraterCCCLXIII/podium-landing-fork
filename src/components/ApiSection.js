import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ApiSection = () => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let squares = [];
    let lastSquareTime = 0;
    let lastTime = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const addSquare = () => {
      squares.push({
        size: 0,
        opacity: 1,
      });
    };

    const initializeSquares = () => {
      const maxSquareSize = Math.min(canvas.width, canvas.height) * 1.5;
      const squareSpeed = 1.5;
      const newSquareInterval = 1600;
      
      // Pre-fill the squares array to start with a full tunnel
      const initialSquares = 30;
      for (let i = 0; i < initialSquares; i++) {
        const size = i * squareSpeed * (newSquareInterval / 16);
        squares.push({
          size: size,
          opacity: Math.max(0, 1 - (size / maxSquareSize) * 0.8),
        });
      }
      
      return { maxSquareSize, squareSpeed, newSquareInterval };
    };

    let maxSquareSize, squareSpeed, newSquareInterval;

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Clear the canvas completely on each frame to maintain a pure black background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      if (currentTime - lastSquareTime > newSquareInterval) {
        addSquare();
        lastSquareTime = currentTime;
      }

      for (let i = 0; i < squares.length; i++) {
        const square = squares[i];
        square.size += squareSpeed * (deltaTime / 16);
        square.opacity = Math.max(0, 1 - (square.size / maxSquareSize) * 0.8);

        const x = centerX - square.size / 2;
        const y = centerY - square.size / 2;

        // Draw the square outline with an outer glow that emanates from the edge
        ctx.save();
        ctx.beginPath();
        // Changed the color to a lighter gray
        ctx.strokeStyle = `rgba(100, 100, 100, ${square.opacity * 0.5})`;
        // Changed the shadow color to a lighter gray
        ctx.shadowColor = `rgba(100, 100, 100, ${square.opacity * 0.15})`;
        ctx.shadowBlur = 10;
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, square.size, square.size);
        ctx.restore();
      }

      while (squares.length > 0 && squares[0].size > maxSquareSize) {
        squares.shift();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize canvas size with a small delay to ensure proper sizing
    setTimeout(() => {
      resizeCanvas();
      const config = initializeSquares();
      maxSquareSize = config.maxSquareSize;
      squareSpeed = config.squareSpeed;
      newSquareInterval = config.newSquareInterval;
      animate(0);
    }, 100);

    // Handle resize
    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section className="ApiSection">
      <div className="relative flex flex-col items-center justify-center text-center py-16 bg-black px-8 overflow-hidden min-h-screen">
        {/* Tunnel Animation Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ 
            zIndex: 1,
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <p className="mt-8 text-sm md:text-base lg:text-lg font-medium text-gray-300">
            {t('LONGFORMER FOR BUSINESSES')}
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl md:text-5xl lg:text-6xl font-bold text-white">
            {t('Deliver cutting edge features in your applications')}
          </h2>
          <p className="mt-6 text-xl font-light text-gray-200">
            {t('Get instant access to Longformer API.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className='my-12 flex h-12 w-full sm:w-fit sm:px-8 bg-white dark:bg-white text-black font-medium text-xl rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-100 transition-colors duration-200 items-center justify-center' onClick={() => window.location.href = 'https://podium.page/create-account'}>{t('Try it now! →')}</button>
            <button className='api-docs-button my-12 flex h-12 w-full sm:w-fit sm:px-8 bg-transparent dark:bg-transparent border-2 border-white dark:border-white text-white dark:text-white font-medium text-xl rounded-lg hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors duration-200 items-center justify-center' onClick={() => window.location.href = 'https://api-docs.podium.page/'}>{t('API Documentation →')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
