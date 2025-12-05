import React from 'react';
import { ExternalLink } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Projects = () => {
  const projects = [
    {
      title: "Road Trip",
      subtitle: "Unity 3D Car Game",
      description: "Developed a polished Subway Surfers–style endless runner featuring smooth multi-lane switching, responsive bike tilt mechanics, and dynamic environments with changing terrains, traffic, and collectibles. The game includes an optimized object-pooling and terrain-streaming system for high performance, along with a refined third-person camera that follows the player smoothly without inheriting tilt or rotation.",
      technologies: ["Unity 3D", "C#", "Game Design", "UI/UX", "Animation"],
      image: "1.png", // Road Trip image
      gradient: "from-pink-500 to-rose-500",
      link: "https://drive.google.com/file/d/1BS4bAt8iEFFPrT-MPOkQp82UEXfDh6cw/view"
    },
    {
      title: "QA Basketball",
      subtitle: "Unity 3D Quiz Based Basketball Game",
      description: "Developed an educational quiz-based basketball game that blends trivia challenges with basketball scoring mechanics. The system features dynamic question generation, multiple-choice options, and clear visual feedback for correct or incorrect answers. I integrated smooth player animations, UI transitions, and a real-time scoring system, along with pause, resume, and main menu functionality to control game flow. Input validation was also implemented to ensure a clean and user-friendly experience.",
      technologies: ["Unity 3D", "C#","UI/UX", "Animation"],
      image: "2.png", // QA Basketball image
      gradient: "from-blue-500 to-cyan-500",
      link: "https://drive.google.com/file/d/1wuoqJnyNVrqkp1Yziy1wXKw1ULdRNrfn/view?usp=sharing"
    },
    {
      title: "Haunted House Split-Screen Quiz Adventure",
      subtitle: "Unity Multiplayer Quiz Game",
      description: "Developed a 3D horror-themed split-screen Unity game where two players progress through a haunted house by answering quiz questions at checkpoints. The game features a custom quiz engine, a branching safe/unsafe path system with ghost encounters, Auto-Walk AI movement, and cinematic chase/respawn sequences. I integrated smooth third-person camera follow, immersive audio/visual effects, and a timer system to track the first escaping player. The project uses a clean, modular architecture with optimized and maintainable C# code.",
      technologies: ["Unity", "C#", "Multiplayer", "UI/UX"],
      image: "3.png", // Haunted House image
      gradient: "from-purple-500 to-indigo-500",
      link: "https://drive.google.com/file/d/1X-vQlCMnslYk_IJgYpKm1RGCgMCxHam-/view?usp=sharing"
    },
    {
      title: "WolfFear Endless Runner",
      subtitle: "Unity 3D Horror Runner",
      description: "Designed and developed a 3D endless runner set in a dark, haunted environment featuring smooth lane-switching, jump mechanics, and a cinematic camera follow system. I implemented optimized environment looping with segment pooling, fluid lane-based movement with animation-driven transitions, and swipe-based mobile controls using the Unity Input System. The game includes progressive difficulty scaling, collectible systems for coins and diamonds, and atmospheric fog and lighting effects. Performance was optimized through object pooling, efficient triggers, and low-overhead memory usage for smooth and responsive gameplay.",
      technologies: ["Unity 3D", "C#", "Game Design", "UI/UX", "VFX"],
      image: "4.png", // WolfFear image
      gradient: "from-green-500 to-emerald-500",
      link: "https://drive.google.com/file/d/1LbeTBqAgrgzRHeJod1ze7yE3kYfnCdBO/view?usp=sharing"
    },
    {
      title: "Boulder to the Mountain",
      subtitle: "Unity 3D Physics Puzzle Game",
      description: "Developed a physics-driven 3D boulder-pushing game in Unity featuring realistic rigidbody movement, slope detection, and torque-based rolling. I built a custom Character Controller with slope alignment, pushing mechanics, and smooth animation handling, along with a dynamic Boulder Controller for accurate physics, steering, and force application. The game includes velocity-based rolling visuals, a refined third-person free-look camera, and robust player–boulder interaction. All systems use clean, modular C# code for polished, responsive gameplay.",
      technologies: ["Unity 3D", "C#", "Physics", "Puzzle Design", "Terrain"],
      image: "5.png", // Boulder to Mountain image
      gradient: "from-orange-500 to-red-500",
      link: "https://drive.google.com/file/d/1yqL8BkJszlI2hlxQM0hwC9rT3mjTyasU/view?usp=sharing"
    },
    {
      title: "RPG Game",
      subtitle: "Unity 3D Animation",
      description: "Developed a 3D RPG game in Unity with a modular, scalable architecture and cleanly organized gameplay systems. The project features a robust event-driven player controller using NavMesh navigation, input routing, and advanced animation logic. I implemented click-to-move pathfinding, intelligent follow-and-attack AI with smooth rotation, and a coroutine-based attack loop with randomized animations and cooldowns. Using AnimatorCoder, I built advanced animation handling with crossfades, chaining, and state-based transitions. The system also includes mouse-based raycast input for movement and combat, global interaction routing, and a smooth third-person RPG camera with stable, cinematic follow behavior.",
      technologies: ["Unity 3D", "C#", "Navmesh", "AI", "Animation"],
      image: "6.png", // RPG Game image
      gradient: "from-yellow-500 to-amber-500",
      link: "https://drive.google.com/file/d/1V708mfTIYdDWpw2Ou6qO2HzFvrzh8X7z/view?usp=sharing"
    }
  ];

  // Handler function for opening links
  const handleProjectClick = (link) => {
    if (link && !link.includes('YOUR_')) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      // You can add a fallback or notification here
      console.log(`Link for this project not configured yet: ${link}`);
      // Optionally show an alert or toast notification
      alert("Download link for this project will be available soon!");
    }
  };

  // Function to get image source - assuming images are in public folder
  const getImageSource = (imageName) => {
    // If images are in public folder, you can access them directly
    return `/${imageName}`;
    
    // If images are in src/assets folder, use:
    // return require(`../assets/${imageName}`);
  };

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 overflow-hidden">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">Bringing ideas to life through code</p>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center group`}
            >
              {/* Image Side */}
              <div className="lg:w-1/2 relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300`}></div>
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={getImageSource(project.image)}
                    alt={project.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop&text=${project.title}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 space-y-4">
                <div className={`inline-block px-4 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-sm font-semibold mb-2`}>
                  {project.subtitle}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-gray-800 text-purple-400 rounded-full text-sm font-medium border border-purple-500 border-opacity-30 hover:border-opacity-100 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button 
                  onClick={() => handleProjectClick(project.link)}
                  className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-purple-500/50 px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105`}
                >
                  <ExternalLink size={20} />
                  Download Build
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;