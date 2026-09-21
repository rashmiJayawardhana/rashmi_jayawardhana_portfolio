import { useEffect, useState } from 'react';

// Returns true once the page has scrolled past `threshold` pixels.
export default function useScrolled(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold);
    // Run once immediately so a page reloaded mid-scroll starts in the correct state.
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
