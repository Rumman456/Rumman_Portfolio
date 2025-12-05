import React from 'react';

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
      <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float" style={{ top: '60%', left: '80%', animationDelay: '2s' }}></div>
      <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-float" style={{ top: '40%', left: '60%', animationDelay: '4s' }}></div>
      <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float" style={{ top: '80%', left: '20%', animationDelay: '1s' }}></div>
      <div className="absolute w-1 h-1 bg-purple-300 rounded-full animate-float" style={{ top: '30%', left: '90%', animationDelay: '3s' }}></div>
    </div>
  );
};

export default ParticlesBackground;