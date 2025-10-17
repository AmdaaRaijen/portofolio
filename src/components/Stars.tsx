import React from "react";

interface StartsProps {
  delay: number;
  size: number;
  opacity: number;
  top: string;
  left: string;
}

const Stars: React.FC<StartsProps> = ({ delay, size, opacity, top, left }) => {
  return (
    <div
      className="absolute rounded-full bg-white animate-pulse"
      style={{
        top,
        left,
        opacity,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
        boxShadow: `
          0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.3),
          0 0 ${size * 4}px ${size}px rgba(135, 77, 177, 0.2),
          0 0 ${size * 6}px ${size * 2}px rgba(135, 77, 177, 0.1)
        `,
      }}
    ></div>
  );
};

export default Stars;
