import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  // For 3D tilt effect
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  // Animation controls
  const controls = useAnimation();
  
  useEffect(() => {
    // Handle tilt effect based on mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setTilt({ x: x * 10, y: y * -10 });
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };
    
    // Initialize animations
    controls.start({ opacity: 1, y: 0 });
    
    // Add event listener for mouse movement
    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [controls]);
  
  // Skills for animated badges
  const skills = [
    "React", "Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind"
  ];
  
  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6"
    >
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15), transparent 80%),
                      linear-gradient(to bottom right, var(--color-indigo-50, #eef2ff), var(--color-white, #ffffff), var(--color-purple-50, #faf5ff))`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear" 
        }}
        className="absolute inset-0 dark:hidden z-0"
      />
      
      {/* Dark mode gradient */}
      <motion.div 
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.3), transparent 80%),
                      linear-gradient(to bottom right, var(--color-gray-900, #111827), var(--color-gray-800, #1f2937), var(--color-indigo-950, #1e1b4b))`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear" 
        }}
        className="absolute inset-0 hidden dark:block z-0"
      />
      
      {/* Dynamic Particles - Small */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`small-particle-${index}`}
          className="absolute rounded-full bg-indigo-400/20 dark:bg-indigo-400/10 z-0 hidden sm:block"
          style={{
            width: Math.random() * 8 + 3,
            height: Math.random() * 8 + 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, Math.random() * 60 - 30],
            x: [0, Math.random() * 30 - 15],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, Math.random() * 0.5 + 1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Dynamic Particles - Medium */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`medium-particle-${index}`}
          className="absolute rounded-full bg-purple-400/20 dark:bg-purple-400/10 z-0"
          style={{
            width: Math.random() * 15 + 8,
            height: Math.random() * 15 + 8,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 60 - 30],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, Math.random() * 0.7 + 1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Interactive floating circles */}
      <motion.div 
        className="absolute top-[20%] right-[20%] w-72 h-72 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20 z-0"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
        style={{ 
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: 'preserve-3d',
          left: `calc(${mousePosition.x / 10}% + 20%)`,
          top: `calc(${mousePosition.y / 10}% + 10%)`,
        }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] left-[20%] w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 dark:opacity-20 z-0"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
        style={{ 
          transform: `rotateX(${tilt.y * 0.7}deg) rotateY(${tilt.x * 0.7}deg)`,
          transformStyle: 'preserve-3d',
          left: `calc(${mousePosition.x / -15}% + 20%)`,
          bottom: `calc(${mousePosition.y / -15}% + 30%)`,
        }}
      />
      
      {/* Wave Animation at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-0 opacity-30 dark:opacity-20">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400"
          style={{
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 C150,90 350,0 500,100 C650,190 850,100 1000,190 L1200,120 L1200,0 L0,0 Z\'%3E%3C/path%3E%3C/svg%3E")',
            maskSize: '1200px 100%',
            maskRepeat: 'repeat-x',
          }}
          animate={{
            x: [0, -1200],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400"
          style={{
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1200 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0,0 C150,90 350,0 500,100 C650,190 850,100 1000,190 L1200,120 L1200,0 L0,0 Z\'%3E%3C/path%3E%3C/svg%3E")',
            maskSize: '1000px 100%',
            maskRepeat: 'repeat-x',
          }}
          animate={{
            x: [-1000, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div 
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl"
          style={{ 
            perspective: 1000,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.y/3}deg) rotateY(${tilt.x/3}deg)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative">
              <span className="block bg-gradient-to-r from-gray-900 via-indigo-600 to-gray-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent">
                Hi, I'm Dheeraj Sonkar
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 h-16"
          >
            <span className="mr-2">I'm a</span>
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                1500,
                'UI/UX Designer',
                1500,
                'React Specialist',
                1500,
                'Problem Solver',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-indigo-600 dark:text-indigo-400 font-medium"
            />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
          >
            I build exceptional digital experiences with modern technologies,
            focusing on clean design and performance optimization.
          </motion.p>
          
          {/* Animated Skill Badges */}
          <motion.div 
            className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#4f46e5", 
                  color: "#ffffff",
                  boxShadow: "0 0 15px rgba(79, 70, 229, 0.5)" 
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center"
            >
              View My Work
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="group px-8 py-3 bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg shadow-lg border border-indigo-600 dark:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
            >
              Get In Touch
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-y-[-2px]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </motion.svg>
            </motion.a>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="https://github.com/DHEERAJSONKAR"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dheeraj-sonkar-304b982b7/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:dheerajsonkarmy@gmail.com?subject=Hello%20Dheeraj&body=I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you!"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Email"
              title="Send me an email"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Profile Image Section - New */}
        <motion.div 
          className="hidden md:block relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.y/2}deg) rotateY(${tilt.x/2}deg)`,
          }}
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Glowing background effect */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 blur-xl opacity-30"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity,
                ease: "linear" 
              }}
            />
            
            {/* Rotating border effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-indigo-500/50 dark:border-indigo-400/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            
            {/* Actual image container */}
            <div className="absolute inset-4 overflow-hidden rounded-full border-2 border-white dark:border-gray-800 shadow-xl z-10">
              <img 
                src="/dkphoto.jpg" 
                alt="Dheeraj Sonkar"
                className="w-full h-full object-cover"
              />
              
              {/* Sheen effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 dark:via-indigo-400 dark:hover:opacity-10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-lg z-0"
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -top-8 -left-4 w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full z-0"
              animate={{
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0],
        }}
        transition={{ 
          opacity: { repeat: Infinity, duration: 2 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;