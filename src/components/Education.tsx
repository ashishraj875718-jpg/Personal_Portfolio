import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Education as EducationType, Certification } from '../types';

const Education: React.FC = () => {
  const { ref, isInView } = useInView();

  const education: EducationType[] = [
    {
      id: 1,
      degree: "B.Tech Computer Science Engineering",
      institution: "Tula's Institute",
      location: "Dehradun",
      year: "2022–2026",
      grade: "CGPA 7.6/10",
    },
    {
      id: 2,
      degree: "12th Grade (Intermediate)",
      institution: "Sadanand Intermediate College",
      location: "Bihar",
      year: "2021",
      grade: "63.3%",
    },
    {
      id: 3,
      degree: "10th Grade (High School)",
      institution: "Adarsh High School",
      location: "Bihar",
      year: "2019",
      grade: "73.55%",
    },
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Data Structure in C++",
      issuer: "Scaler",
      year: "2024",
      description: "Comprehensive course covering advanced data structures and algorithms",
    },
    {
      id: 2,
      title: "Python Programming",
      issuer: "RCPL",
      year: "2023",
      description: "Foundation course in Python programming language",
    },
    {
      id: 3,
      title: "Advanced Python",
      issuer: "ICT Academy",
      year: "2024",
      description: "Advanced concepts in Python including frameworks and libraries",
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

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
              >
                <GraduationCap className="text-blue-600" />
                Education
              </motion.h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      className="relative flex items-start space-x-6"
                    >
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap size={20} className="text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Award size={14} />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center gap-3"
              >
                <Award className="text-purple-600" />
                Certifications
              </motion.h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 dark:border-purple-800/50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <span className="text-sm text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    {cert.description && (
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {cert.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;