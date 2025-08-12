import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Particle {
  id: string;
  x: number;
  y: number;
  initialSize: number;
  color: string;
  createdAt: number;
  dx: number;
  dy: number;
}

const MAX_PARTICLES = 500;
const PARTICLE_LIFESPAN_MS = 3000;
const PARTICLE_GENERATION_THROTTLE_MS = 50;
const PARTICLE_MIN_SIZE = 3;
const PARTICLE_MAX_SIZE = 8;

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const { theme } = useTheme();

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const particleAnimationId = useRef<number | null>(null);
  const particleGenerationId = useRef<number | null>(null);
  const lastParticleTimeRef = useRef<number>(0);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 900);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Effect for mouse tracking (only on desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const newX = event.clientX;
      const newY = event.clientY;

      setPosition({ x: newX, y: newY });

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }

      const target = event.target as HTMLElement;
      setIsHoveringInteractive(!!target.closest('.interactive-cursor-target'));
    };

    const handleMouseLeaveDocument = () => {
      setIsVisible(false);
    };

    const handleMouseEnterDocument = (event: MouseEvent) => {
      if (event.clientX !== 0 || event.clientY !== 0) {
        setIsVisible(true);
        const newX = event.clientX;
        const newY = event.clientY;
        setPosition({ x: newX, y: newY });
        if (cursorDotRef.current) cursorDotRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
        if (cursorOutlineRef.current) cursorOutlineRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.documentElement.addEventListener('mouseleave', handleMouseLeaveDocument);
    document.documentElement.addEventListener('mouseenter', handleMouseEnterDocument);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeaveDocument);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnterDocument);
    };
  }, [isVisible, isDesktop]);

  // Effect for PARTICLE GENERATION (only on desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const generationLoop = () => {
      const now = performance.now();
      if (
        isVisible &&
        particles.length < MAX_PARTICLES &&
        now - lastParticleTimeRef.current > PARTICLE_GENERATION_THROTTLE_MS
      ) {
        const accentColors = [
          theme.colors.accentPrimary,
          theme.colors.accentSecondary,
          theme.colors.accentTertiary,
        ].filter(Boolean);
        const randomColor = accentColors.length > 0
          ? accentColors[Math.floor(Math.random() * accentColors.length)]
          : 'rgba(200,200,200,0.5)';
        
        const newParticle: Particle = {
          id: now.toString() + Math.random().toString(),
          x: position.x,
          y: position.y,
          initialSize: Math.random() * (PARTICLE_MAX_SIZE - PARTICLE_MIN_SIZE) + PARTICLE_MIN_SIZE,
          color: randomColor,
          createdAt: now,
          dx: (Math.random() - 0.5) * 1.5,
          dy: (Math.random() - 0.5) * 1.5,
        };
        setParticles(prev => [newParticle, ...prev].slice(0, MAX_PARTICLES));
        lastParticleTimeRef.current = now;
      }
      particleGenerationId.current = requestAnimationFrame(generationLoop);
    };

    particleGenerationId.current = requestAnimationFrame(generationLoop);

    return () => {
      if (particleGenerationId.current) {
        cancelAnimationFrame(particleGenerationId.current);
      }
    };
  }, [isVisible, position, theme.colors, particles.length, isDesktop]);

  // Effect for PARTICLE ANIMATION (only on desktop)
  useEffect(() => {
    if (!isDesktop) return;

    const animateParticles = () => {
      const now = performance.now();
      setParticles(prevParticles =>
        prevParticles
          .map(p => {
            const age = now - p.createdAt;
            if (age > PARTICLE_LIFESPAN_MS) return null;

            return {
              ...p,
              x: p.x + p.dx,
              y: p.y + p.dy,
            };
          })
          .filter(p => p !== null) as Particle[]
      );
      particleAnimationId.current = requestAnimationFrame(animateParticles);
    };

    particleAnimationId.current = requestAnimationFrame(animateParticles);
    return () => {
      if (particleAnimationId.current) {
        cancelAnimationFrame(particleAnimationId.current);
      }
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null; // Don't render anything on mobile/tablet
  }

  const dotBaseSize = 15;
  const outlineBaseSize = 5;

  const dotSize = isHoveringInteractive ? dotBaseSize * 1.5 : dotBaseSize;
  const outlineSize = isHoveringInteractive ? outlineBaseSize * 1.33 : outlineBaseSize;
  const outlineCalculatedOpacity = isVisible ? (isHoveringInteractive ? '0.5' : '0.25') : '0';
  const outlineBorderWidth = isHoveringInteractive ? '2px' : '1.5px';

  const dotStyle: React.CSSProperties = {
    top: `-${dotSize / 2}px`, 
    left: `-${dotSize / 2}px`,
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    opacity: isVisible ? 1 : 0,
  };

  const outlineStyle: React.CSSProperties = {
    top: `-${outlineSize / 2}px`, 
    left: `-${outlineSize / 2}px`,
    width: `${outlineSize}px`,
    height: `${outlineSize}px`,
    borderWidth: outlineBorderWidth,
    opacity: outlineCalculatedOpacity,
  };

  return (
    <>
      {particles.map(p => {
        const age = performance.now() - p.createdAt;
        const ageRatio = Math.min(age / PARTICLE_LIFESPAN_MS, 1);
        
        const currentSize = p.initialSize * (1 - ageRatio * 0.75);
        const opacity = (1 - ageRatio) * 0.8;

        if (currentSize <= 0 || opacity <= 0) return null;

        return (
          <div
            key={p.id}
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 9997,
              borderRadius: '50%',
              backgroundColor: p.color,
              width: `${currentSize}px`,
              height: `${currentSize}px`,
              left: `${p.x}px`,
              top: `${p.y}px`,
              opacity: opacity,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity',
            }}
          />
        );
      })}
      <div ref={cursorDotRef} className="custom-cursor-dot" style={dotStyle} />
      <div ref={cursorOutlineRef} className={`custom-cursor-outline ${isHoveringInteractive ? 'interactive' : ''}`} style={outlineStyle} />
    </>
  );
};

export default CustomCursor;