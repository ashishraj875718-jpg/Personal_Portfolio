import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Trophy, Award, Star, Calendar } from 'lucide-react';
import { Achievement } from '../types';

const Achievements: React.FC = () => {
  const { ref, isInView } = useInView();

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "First Runner-Up",
      description: "Achieved first runner-up position in HackTheFuture1.0, a competitive hackathon showcasing innovative tech solutions.",
      year: "2025",
      type: "Competition",
    },
    {
      id: 2,
      title: "Winner - Ideathon",
      description: "Won the Ideathon competition at Uttaranchal University, demonstrating creative problem-solving and innovative thinking.",
      year: "2025",
      type: "Competition",
    },
    {
      id: 3,
      title: "QRIFY Project Success",
      description: "Successfully developed and deployed QRIFY (HORECA Model), revolutionizing restaurant ordering systems through QR code technology.",
      year: "2024",
      type: "Project",
    },
    {
      id: 4,
      title: "Academic Excellence",
      description: "Maintained consistent academic performance with CGPA 7.6/10 in Computer Science Engineering program.",
      year: "2022-2026",
      type: "Academic",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'Competition':
        return Trophy;
      case 'Project':
        return Star;
      case 'Academic':
        return Award;
      default:
        return Award;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'Competition':
        return 'from-yellow-500 to-orange-500';
      case 'Project':
        return 'from-blue-500 to-purple-500';
      case 'Academic':
        return 'from-green-500 to-teal-500';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy size={40} className="text-yellow-500" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Achievements & Activities
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Highlights of my academic and competitive achievements, showcasing dedication to excellence and innovation.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = getIcon(achievement.type);
              const colorClass = getColor(achievement.type);

              return (
                <motion.div
                  key={achievement.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${colorClass} rounded-full transform translate-x-8 -translate-y-8`}></div>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-r ${colorClass} rounded-xl shadow-lg`}>
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Calendar size={14} />
                          <span>{achievement.year}</span>
                        </div>
                        <span className={`inline-block mt-1 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${colorClass} text-white`}>
                          {achievement.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>

                    {/* Achievement Badge */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${colorClass} rounded-full animate-pulse`}></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Verified Achievement
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievement Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
                <div className="text-3xl font-bold text-yellow-600 mb-2">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Competition Wins</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">7.6</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Academic CGPA</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;