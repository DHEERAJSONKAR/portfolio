import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { experiences, education } from '../constants';

const Experience: React.FC = () => {
  const isLight = document.documentElement.classList.contains('dark') ? false : true;

  return (
    <AnimatedSection id="experience" title="Experience & Education" className="bg-gray-50 dark:bg-gray-800">
      <VerticalTimeline lineColor={isLight ? '#4f46e5' : '#818cf8'}>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: isLight ? '#ffffff' : '#1f2937',
              color: isLight ? '#1f2937' : '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '0.5rem',
              border: isLight ? '1px solid #e5e7eb' : '1px solid #374151',
            }}
            contentArrowStyle={{ borderRight: isLight ? '7px solid #ffffff' : '7px solid #1f2937' }}
            date={experience.date}
            iconStyle={{ 
              background: isLight ? '#4f46e5' : '#818cf8', 
              color: '#ffffff',
              boxShadow: '0 0 0 4px #e5e7eb',
            }}
            icon={<Briefcase />}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              {experience.company && (
                <h4 className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {experience.company}
                </h4>
              )}
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {experience.description}
              </p>
            </motion.div>
          </VerticalTimelineElement>
        ))}

        {education.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            contentStyle={{
              background: isLight ? '#ffffff' : '#1f2937',
              color: isLight ? '#1f2937' : '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '0.5rem',
              border: isLight ? '1px solid #e5e7eb' : '1px solid #374151',
            }}
            contentArrowStyle={{ borderRight: isLight ? '7px solid #ffffff' : '7px solid #1f2937' }}
            date={item.date}
            iconStyle={{ 
              background: isLight ? '#8b5cf6' : '#a78bfa', 
              color: '#ffffff',
              boxShadow: '0 0 0 4px #e5e7eb',
            }}
            icon={<GraduationCap />}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                {item.degree}
              </h3>
              <h4 className="text-purple-600 dark:text-purple-400 font-medium">
                {item.school}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </AnimatedSection>
  );
};

export default Experience;