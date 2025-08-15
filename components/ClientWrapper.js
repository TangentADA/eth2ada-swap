// components/ClientWrapper.js
import { useRef, useEffect } from 'react';
import UserContext from './UserContext';

export default function ClientWrapper({ children }) {
  const scrollRef = useRef({ scrollPos: 0 });

  useEffect(() => {
    scrollRef.current.scrollPos = window.scrollY || 0;
    // Add any scroll event listeners if needed
    const handleScroll = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <UserContext.Provider value={{ scrollRef: scrollRef.current }}>
      {children}
    </UserContext.Provider>
  );
}
