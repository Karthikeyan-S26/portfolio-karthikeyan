
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "IT Student | Full Stack Developer";
  const [index, setIndex] = useState(0);
  const animationSpeed = 70;

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, animationSpeed);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
      animate={{
        y: [-20, -80, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4 + i,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut"
      }}
      style={{
        left: `${20 + i * 15}%`,
        top: `${30 + i * 10}%`,
      }}
    />
  ));

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-300/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-300/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-sm"
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Karthikeyan S
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 min-h-[2rem] font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 text-blue-600"
              >
                |
              </motion.span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl transition-all duration-300 group"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            <span>Download Resume</span>
          </motion.button>
          
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              borderColor: "rgb(59, 130, 246)"
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 border-2 border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-300 px-8 py-4 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group backdrop-blur-sm bg-white/10 dark:bg-gray-800/20"
          >
            <Mail size={20} className="group-hover:animate-wiggle" />
            <span>Connect With Me</span>
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 dark:text-gray-400"
          >
            <ChevronDown size={32} className="animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
