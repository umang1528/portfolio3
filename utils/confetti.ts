// utils/confetti.ts
import confetti from 'canvas-confetti';

export const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    zIndex: 9999,
  });
};
