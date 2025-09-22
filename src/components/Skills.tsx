import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Database, Globe, Monitor } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const { ref, isInView } = useInView();

  const skills: Skill[] = [
    { name: 'C++ with DSA', level: 85, category: 'Programming' },
    { name: 'Python', level: 70, category: 'Programming' },
    { name: 'HTML5', level: 80, category: 'Frontend' },
    { name: 'CSS3', level: 75, category: 'Frontend' },
    { name: 'JavaScript', level: 60, category: 'Frontend' },
    { name: 'DBMS', level: 75, category: 'Core' },
    { name: 'Computer Networks', level: 70, category: 'Core' },
    { name: 'Operating Systems', level: 70, category: 'Core' },
  ];

  const skillCategories = [
    { name: 'Programming', icon: Code, color: 'from-blue-600 to-blue-400' },
    { name: 'Frontend', icon: Globe, color: 'from-green-600 to-green-400' },
    { name: 'Core', icon: Database, color: 'from-purple-600 to-purple-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category.name);
              
              return (
                <motion.div key={category.name} variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg`}>
                      <category.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Problem Solving', 'Algorithms', 'Data Structures', 'Object-Oriented Programming',
                'Software Development', 'Team Collaboration', 'Project Management', 'Critical Thinking'
              ].map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;