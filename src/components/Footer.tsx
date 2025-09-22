import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ashishraj875718-jpg', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashish-raj-87531428b/', label: 'LinkedIn' },
    { icon: ExternalLink, href: '#', label: 'Portfolio' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Ashish Raj
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Computer Science Engineering student passionate about creating innovative solutions 
              and building meaningful projects that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Nalanda, Bihar, India</p>
              <a 
                href="mailto:ashishraj875718@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                ashishraj875718@gmail.com
              </a>
              <a 
                href="tel:+917858074043"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                +91 7858074043
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 text-sm text-gray-400 mb-4 md:mb-0">
            <span>© 2025 Ashish Raj. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
