import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const filters = ['All', 'React', 'Next.js', 'JavaScript', 'TailwindCSS', 'Node.js'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      transition: { 
        duration: 0.3 
      } 
    }
  };

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const selectedProjectData = selectedProject !== null 
    ? projects.find(project => project.id === selectedProject) 
    : null;

  return (
    <AnimatedSection id="projects" title="My Projects" className="bg-gray-50 dark:bg-gray-800">
      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {filters.map((item) => (
          <motion.button
            key={item}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === item 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-3 mt-auto">
                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => handleProjectClick(project.id)}
                  className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  View Details
                </motion.button>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  <ExternalLink size={16} /> Live
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:underline"
                >
                  <Github size={16} /> Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-4">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProjectData.title}
                </h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProjectData.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed space-y-4">
                  <p>{selectedProjectData.description}</p>
                  
                  {selectedProjectData.id === 1 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Overview:</h3>
                      <p>
                        KodeBase is a collaborative platform where developers can share, review, and collaborate on code snippets.
                        It features syntax highlighting for multiple programming languages, user authentication, and real-time collaboration tools.
                      </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Real-time code sharing with syntax highlighting</li>
                          <li>User authentication and profile management</li>
                          <li>Comment system for code reviews</li>
                          <li>Responsive design that works on all devices</li>
                          <li>Dark/Light mode toggle for better readability</li>
                        </ul>
                      </p>
                    </>
                  )}
                  
                  {selectedProjectData.id === 2 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Overview:</h3>
                      <p>
                        The Gym Management System is a comprehensive solution designed to streamline operations for fitness centers. 
                        It handles member registrations, attendance tracking, workout plans, and equipment management.
                      </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Member registration and profile management</li>
                          <li>Attendance tracking with QR code scanning</li>
                          <li>Workout plan creation and assignment</li>
                          <li>Equipment inventory and maintenance tracking</li>
                          <li>Payment processing and subscription management</li>
                          <li>Performance analytics and reporting</li>
                        </ul>
                      </p>
                    </>
                  )}
                  
                  {selectedProjectData.id === 3 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Overview:</h3>
                      <p>
                        This is a modern implementation of the classic Tic Tac Toe game with a clean UI and smooth animations.
                        The game features both single-player mode against an AI and a two-player mode.
                      </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Single-player mode with adjustable AI difficulty</li>
                          <li>Two-player mode for playing with friends</li>
                          <li>Game history tracking</li>
                          <li>Beautiful animations and transitions</li>
                          <li>Responsive design that works on mobile devices</li>
                          <li>Sound effects and background music options</li>
                        </ul>
                      </p>
                    </>
                  )}
                  
                  {selectedProjectData.id === 4 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Overview:</h3>
                      <p>
                        Shipra AI is an intelligent assistant that helps users with content creation, productivity tasks, and information retrieval.
                        It leverages OpenAI's API to provide context-aware responses and creative content generation.
                      </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Natural language processing for understanding complex queries</li>
                          <li>Content generation for blog posts, emails, and social media</li>
                          <li>Language translation capabilities</li>
                          <li>Text summarization for long articles</li>
                          <li>Personalized responses based on user preferences</li>
                          <li>Voice-to-text input for hands-free operation</li>
                        </ul>
                      </p>
                    </>
                  )}
                  
                  {selectedProjectData.id === 5 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Overview:</h3>
                      <p>
                        SalesForce UI is a modern redesign of the popular CRM platform's interface, focusing on improved usability,
                        accessibility, and visual appeal. The project aims to enhance user experience while maintaining all functionality.
                      </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>Streamlined dashboard with customizable widgets</li>
                          <li>Improved navigation system with quick access menus</li>
                          <li>Enhanced data visualization with interactive charts</li>
                          <li>Accessibility improvements for users with disabilities</li>
                          <li>Dark mode support for reduced eye strain</li>
                          <li>Responsive design for mobile and tablet devices</li>
                        </ul>
                      </p>
                    </>
                  )}
                  
                  {selectedProjectData.id === 6 && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Project Overview:</h3>
                      <p>
                        Card Hover Effects is a collection of interactive card designs and hover animations that can be easily
                        integrated into various web projects. It demonstrates creative CSS techniques and modern design principles.
                      </p>
                      <p>
                        <strong>Key Features:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                          <li>15+ unique hover effect styles</li>
                          <li>Smooth animations with CSS transitions and keyframes</li>
                          <li>Fully responsive cards that work on all screen sizes</li>
                          <li>Easy-to-implement code snippets</li>
                          <li>Documentation for customization options</li>
                          <li>Cross-browser compatibility</li>
                        </ul>
                      </p>
                    </>
                  )}
                  
                  <p className="mt-4">
                    <strong>Technical Implementation:</strong> This project was built using {selectedProjectData.tags.join(', ')}.
                    I focused on creating clean code architecture, ensuring optimal performance, and implementing best practices
                    for maintainability and scalability.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProjectData.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink size={18} /> View Live
                  </a>
                  <a
                    href={selectedProjectData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={18} /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
};

export default Projects;