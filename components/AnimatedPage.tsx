
import React, { useEffect, useState, useRef } from 'react';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null); // For stricter animation timing if needed

  useEffect(() => {
    // Ensure animation plays on component mount
    const timer = setTimeout(() => setIsMounted(true), 50); // Small delay to ensure transition is applied
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={nodeRef}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedPage;
    