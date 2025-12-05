import React from 'react';
import { ChevronDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 animate-pulse"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-gradient">Rumman</span>
          </h1>
          <p className="text-2xl md:text-4xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            I'm a <span className="text-purple-400 font-semibold">Game Developer</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Creating engaging 2D and 3D games with Unity & C#
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 animate-fade-in-up animation-delay-600"
          >
            Know More
            <ChevronDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white opacity-50" size={32} />
      </div>
    </section>
  );
};

export default Hero;