import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyWhatsAppNumber = () => {
    navigator.clipboard.writeText('+92 319 0599800');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGmailCompose = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=rumman.binali456@gmail.com", "_blank");
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 py-20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Have a project in mind? Let's have a chat!
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={openGmailCompose}
            className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-red-500/50 w-full sm:w-auto justify-center"
          >
            <Mail size={24} />
            Email Me
          </button>
          
          <a
            href="https://wa.me/923190599800"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-green-500/50 w-full sm:w-auto justify-center"
          >
            WhatsApp
          </a>
          
          <button
            onClick={copyWhatsAppNumber}
            className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 w-full sm:w-auto justify-center"
          >
            {copied ? '✓ Copied!' : 'Copy Number'}
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/rumman-bin-ali-52a325227/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Linkedin size={24} />
          </a>
          
          <a
            href="https://github.com/Rumman456"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-gray-800 hover:bg-purple-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Github size={24} />
          </a>
        </div>

        {/* Footer */}
        
      </div>
    </section>
  );
};

export default Contact;