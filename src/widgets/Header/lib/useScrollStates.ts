import { useState, useEffect } from 'react';

export const useScrollStates = () => {
  const [hasShadow, setHasShadow] = useState(false);
  const [isScrolledFar, setIsScrolledFar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth < 769;

      setHasShadow(scrollY > 40);
      setIsScrolledFar(isMobile ? scrollY > 350 : scrollY > 420);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { hasShadow, isScrolledFar };
};
