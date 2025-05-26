import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { skills } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatedSection id="skills" title="My Skills" className="bg-white dark:bg-gray-900">
      <div className="relative max-w-6xl mx-auto">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
        </button>

        {/* Skills Slider */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6 px-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillVariants}
                className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-xl transition-all border border-gray-100 dark:border-gray-700 min-w-[220px] snap-center flex-shrink-0 transform`}
                style={{
                  transform: hoveredSkill === skill.name ? 'translateY(-16px) scale(1.05)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredSkill === skill.name ? `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 15px ${skill.hoverColor || 'rgba(79, 70, 229, 0.4)'}` : '',
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center">
                  <div className="text-5xl mb-4 transform transition-transform duration-300" 
                    style={{ 
                      transform: hoveredSkill === skill.name ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0)',
                    }}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {skill.name}
                  </h3>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-3">
                    <motion.div 
                      className="h-3 rounded-full"
                      style={{ 
                        backgroundImage: hoveredSkill === skill.name 
                          ? `linear-gradient(to right, ${skill.hoverColor || '#4f46e5'}, ${skill.hoverColor ? skill.hoverColor + '99' : '#7c3aed'})`
                          : 'linear-gradient(to right, #4f46e5, #7c3aed)' 
                      }}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${skill.level}%`,
                        boxShadow: hoveredSkill === skill.name ? `0 0 10px ${skill.hoverColor || 'rgba(79, 70, 229, 0.6)'}` : 'none'
                      }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                  
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {skill.level}% Proficiency
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-indigo-950 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Frontend Development
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Building responsive, accessible web applications
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Creating interactive UIs with React and Next.js
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Implementing modern CSS frameworks like Tailwind
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              State management with Redux, Context API
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Creating smooth animations and transitions
            </li>
          </ul>
        </motion.div>
        
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-indigo-950 dark:to-gray-800 rounded-lg p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            UI/UX Design
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Designing intuitive, user-centered interfaces
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Creating wireframes and high-fidelity prototypes
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Implementing visual design principles for hierarchy
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Conducting user research and usability testing
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
              Creating consistent design systems
            </li>
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;