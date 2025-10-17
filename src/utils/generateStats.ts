const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    size: 1 + Math.random() * 3,
    opacity: 0.1 + Math.random() * 0.7,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  }));
};

export default generateStars;
