import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  id,
  title,
  children,
  className = '',
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
  };

  return (
    <section 
      id={id} 
      className={`py-20 px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={sectionVariants}
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            {title}
            <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mt-4"></div>
          </motion.h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedSection;