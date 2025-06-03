
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
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
                className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img
                  src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`}
                  alt="Karthikeyan S"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-300"
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate IT Student & Developer
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm an IT student with a strong foundation in multiple programming languages and technologies. 
              My journey in software development has been driven by curiosity and a passion for creating 
              innovative solutions to real-world problems.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With expertise in <span className="font-semibold text-blue-600">Java, Python, C, MySQL, HTML, CSS, JavaScript, React, and DBMS</span>, 
              I've built a solid technical foundation that allows me to work across the full stack.
            </p>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Hackathon Experience</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• SIH 2024 - Smart Traffic System</li>
                  <li>• HackIndia Spark 2 - AI Habit Tracker</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Professional Experience</h4>
                <p className="text-gray-600">Completed Micro IT Internship with Full Stack Focus</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
