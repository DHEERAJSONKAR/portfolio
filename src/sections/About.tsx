import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <AnimatedSection id="about" title="About Me" className="bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={cardVariants}
          className="order-2 md:order-1"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
           Full Stack Developer 
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Hello! I'm Dheeraj Sonkar, a passionate Full Stack Developer  with a strong focus on creating beautiful, 
            functional, and user-centered digital experiences. With expertise in modern frontend technologies like Html, javascript, React, 
            Next.js, and TailwindCSS, I build applications that are not only visually appealing but also perform exceptionally well.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            My approach combines technical excellence with creative problem-solving. I believe that great design should be 
            accessible, intuitive, and delightful. When I'm not coding, I'm exploring new design trends, contributing to 
            open-source projects, or expanding my knowledge through continuous learning.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">India</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Email</h4>
              <p className="text-gray-600 dark:text-gray-400">dheerajsonkarmy@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Available for</h4>
              <p className="text-gray-600 dark:text-gray-400">Full-time</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
              <p className="text-gray-600 dark:text-gray-400">0-1</p>
            </div>
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors"
          >
            Contact Me
          </motion.a>
        </motion.div>
        
        <motion.div
          variants={cardVariants}
          className="order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 -mt-4 -ml-4 bg-indigo-600 dark:bg-indigo-500 rounded-lg z-0"></div>
            <img 
              src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Dheeraj Sonkar" 
              className="relative z-10 w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;