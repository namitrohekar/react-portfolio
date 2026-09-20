import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateStars = () => {
    // Reduced density: divide by 18000 (~45% fewer than original /10000)
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 18000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 2 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.35 + 0.25,
        animationDuration: Math.random() * 5 + 6, // 6–11s — slow, subtle pulse
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 2;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      // Duration: 5–8s — smooth and visible but not too fast
      const duration = Math.random() * 3 + 5;
      newMeteors.push({
        id: i,
        size: Math.random() * 1.5 + 0.8,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: duration,
        // NEGATIVE delay = start mid-animation on load, no stuck-then-jerk on refresh
        animationDelay: -(Math.random() * duration),
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 45 + "px",
            height: meteor.size * 1.5 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDuration: meteor.animationDuration + "s",
            animationDelay: meteor.animationDelay + "s",  // negative = already in-flight on load
          }}
        />
      ))}
    </div>
  );
};