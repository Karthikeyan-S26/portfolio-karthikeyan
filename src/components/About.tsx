
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl"
              >
                <img
                  src="/lovable-uploads/a2a1d0b9-6b44-4b37-bd41-0b4c2bd2bd07.png"
                  alt="Karthikeyan S"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Passionate IT Student & Developer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm an IT student with a strong foundation in multiple programming languages and technologies. 
              My journey in software development has been driven by curiosity and a passion for creating 
              innovative solutions to real-world problems.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              With expertise in <span className="font-semibold text-blue-600 dark:text-blue-400">Java, Python, C, MySQL, HTML, CSS, JavaScript, React, and DBMS</span>, 
              I've built a solid technical foundation that allows me to work across the full stack.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Hackathon Experience</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• SIH 2024 - Smart Traffic System</li>
                  <li>• HackIndia Spark 2 - AI Habit Tracker</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Professional Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">Completed Micro IT Internship with Full Stack Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
