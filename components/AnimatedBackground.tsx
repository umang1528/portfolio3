import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--body-bg)]">
      {/* Orb 1 */}
      <div
        className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] 
                   rounded-full bg-[var(--accent-primary)] filter blur-3xl md:blur-4xl 
                   opacity-20 animate-[floatOrb1_30s_infinite_alternate_ease-in-out]"
        style={{ top: '10vh', left: '5vw' }} // Moved further left
      ></div>
      {/* Orb 2 */}
      <div
        className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] 
                   rounded-full bg-[var(--accent-secondary)] filter blur-3xl md:blur-4xl 
                   opacity-25 animate-[floatOrb2_35s_infinite_alternate_ease-in-out_2s]" // 2s delay
        style={{ top: '60vh', left: '10vw' }} // Moved significantly left
      ></div>
      {/* Orb 3 */}
      <div
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] 
                   rounded-full bg-[var(--accent-tertiary)] filter blur-2xl md:blur-3xl 
                   opacity-15 animate-[floatOrb3_40s_infinite_alternate_ease-in-out_1s]" // 1s delay
        style={{ top: '30vh', left: '5vw' }} // Moved left, removed translateX
      ></div>
       {/* Orb 4 */}
      <div
        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] 
                   rounded-full bg-[var(--accent-primary)] filter blur-3xl md:blur-4xl 
                   opacity-10 animate-[floatOrb4_45s_infinite_alternate_ease-in-out_3s]" // 3s delay
        style={{ top: '80vh', left: '-5vw', transform: 'translateY(-50%)' }} // Moved further left
      ></div>
       {/* Orb 5 */}
      <div
        className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] 
                   rounded-full bg-[var(--accent-secondary)] filter blur-2xl md:blur-3xl 
                   opacity-20 animate-[floatOrb5_50s_infinite_alternate_ease-in-out]"
        style={{ top: '5vh', left: '10vw' }} // Moved significantly left
      ></div>
    </div>
  );
};

export default AnimatedBackground;