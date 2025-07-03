import { useState, useEffect } from 'react';

type Star = {
  id: number;
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  angle: number;
};

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const star = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -10,
        speed: Math.random() * 7 + 2,
        length: Math.random() * 10 + 40,
        opacity: Math.random() * 0.8 + 0.2,
        angle: Math.random() * 40 + 15, // 15-45 degrees
      };
      return star;
    };

    const addStar = () => {
      setStars(prevStars => {
        const newStars = [...prevStars, createStar()];
        // Limit to 15 stars maximum
        return newStars.slice(1);
      });
    };

    const updateStars = () => {
      setStars(prevStars => 
        prevStars
          .map(star => ({
            ...star,
            x: star.x + Math.cos(star.angle * Math.PI / 180) * star.speed,
            y: star.y + Math.sin(star.angle * Math.PI / 180) * star.speed,
          }))
          .filter(star => star.y < window.innerHeight + 100 && star.x < window.innerWidth + 100)
      );
    };

    // Add a new star every 800-2000ms
    const starInterval = setInterval(() => {
      if (Math.random() < 0.8) { // 70% chance to add a star
        addStar();
      }
    }, Math.random() * 100 + 800);

    // Update star positions every 50ms
    const updateInterval = setInterval(updateStars, 100);

    return () => {
      clearInterval(starInterval);
      clearInterval(updateInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 lg:hidden">
      <div className='w-full lg:w-[43.3333%]'>
        {stars.map(star => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            transform: `rotate(${star.angle}deg)`,
          }}
        >
          {/* Main shooting star trail */}
          <div
            className="bg-gradient-to-r from-white via-gray-400 to-transparent rounded-full"
            style={{
              width: `${star.length}px`,
              height: '2px',
              opacity: star.opacity,
              boxShadow: `0 0 6px rgba(688, 182, 212, ${star.opacity}), 0 0 12px rgba(6, 182, 212, ${star.opacity * 0.5})`,
            }}
          />
          {/* Bright head of the shooting star */}
          <div
            className="absolute top-0 right-0 bg-white rounded-full"
            style={{
              width: '4px',
              height: '4px',
              transform: 'translateY(1px)',
              boxShadow: `0 0 8px rgba(255, 255, 255, ${star.opacity}), 0 0 16px rgba(6, 182, 212, ${star.opacity})`,
            }}
          />
        </div>
      ))}
      </div>
      
      {/* Static background stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.8 + 0.2,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ShootingStars;