import React from 'react';
import { Download } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rumman.pdf.pdf'; // Correct path to PDF in public folder
    link.download = 'Rumman.pdf.pdf'; // Correct filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center bg-gray-900 py-16 md:py-20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 md:mb-16 text-white">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side */}
          <div className="relative group w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-lg transform hover:scale-105 transition-transform duration-300 w-full aspect-[4/3]">
              <img 
                src="aboutme.jpg" 
                alt="Profile" 
                className="rounded-lg shadow-2xl w-full h-full"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-purple-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                I am a passionate Unity Game Developer with hands-on experience in creating engaging 2D and 3D games using C#. I specialize in gameplay mechanics, physics, UI/UX design, level design, and interactive systems.
              </p>
            </div>
            
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-blue-500 border-opacity-20 hover:border-opacity-40 transition-all duration-300 transform hover:-translate-y-1">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Over the course of my academic journey and hands-on development. I thrive in collaborative environments, adapt quickly to new challenges, and aim to contribute to high-performance interactive experiences with innovative teams.
              </p>
            </div>

            <button 
              onClick={handleDownloadResume}
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 w-full sm:w-auto justify-center\"
            >
              <Download size={24} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;