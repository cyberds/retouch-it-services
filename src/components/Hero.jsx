import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollCue, setShowScrollCue] = useState(true);

  const services = [
    'UX Design',
    'AI Solutions',
    'Digital Marketing',
    'CRM Development',
    'Web & Java Development',
    '.NET Development',
    'DevOps',
    'Android Development',
    'AngularJS',
    'Technical Consulting',
    'Healthcare IT',
    'Procurement Solutions',
    'Financial & Banking Services'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollCue(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentService = services[currentIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentService.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentService.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentService) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % services.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, services]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-900 animate-gradient-xy" />
      
      {/* Particle effect overlay */}
      <div className="absolute inset-0 bg-[url('https://i.makeagif.com/media/1-17-2017/py-b7X.gif')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Global Digital Solutions,
          <br />
          Serving the world
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-8 min-h-[2em]"
        >
          {currentText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Talk to an Expert
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            See Our Work
          </motion.button>
        </motion.div>

        {showScrollCue && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-[-20] left-1/2 transform -translate-x-1/2"
          >
            <FiChevronDown className="text-white w-8 h-8" />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero; 