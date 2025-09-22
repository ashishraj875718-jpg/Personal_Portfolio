import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Code, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const { ref, isInView } = useInView();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "Passionate about solving complex problems through code and innovative thinking.",
    },
    {
      icon: Lightbulb,
      title: "Creative Thinker",
      description: "Always exploring new ideas and approaches to build better solutions.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on continuous learning and achieving excellence in every project.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-80"></div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Computer Science Engineering student at Tula's Institute, Dehradun, 
                  with a strong foundation in programming and problem-solving. My journey in tech began 
                  with curiosity and has evolved into a deep commitment to creating innovative solutions.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I specialize in C++ with Data Structures & Algorithms, Python development, and web technologies. 
                  I'm always eager to take on new challenges and contribute to meaningful projects that make a difference.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {['Problem Solving', 'Team Collaboration', 'Innovation', 'Leadership'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                    <highlight.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;