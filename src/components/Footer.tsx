import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { socialLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
              Dheeraj Sonkar
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer 
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon === 'github' && <Github size={24} />}
                {link.icon === 'linkedin' && <Linkedin size={24} />}
                {link.icon === 'instagram' && <Instagram size={24} />}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> 
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;