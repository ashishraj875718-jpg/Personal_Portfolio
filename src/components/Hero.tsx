import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Phone, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const floatingAnimation = {
    y: [-20, 20],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ashishraj875718-jpg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-raj-87531428b/', label: 'LinkedIn' },
    { icon: ExternalLink, href: '#', label: 'Portfolio' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white"
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ashish Raj
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              Computer Science Engineering Student
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Nalanda, Bihar, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:ashishraj875718@gmail.com" className="hover:text-blue-600 transition-colors">
                  ashishraj875718@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 7858074043</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                animate={{
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    delay: index * 0.2,
                  },
                }}
              >
                <social.icon size={24} className="text-gray-700 dark:text-gray-300" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8">
            <motion.button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
