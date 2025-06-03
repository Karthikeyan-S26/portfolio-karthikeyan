
import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const achievements = [
    {
      year: '2024',
      title: 'Smart India Hackathon Participant',
      description: 'Developed an innovative Smart Traffic Management System that uses IoT sensors and real-time data analysis to optimize urban traffic flow.',
      category: 'Hackathon'
    },
    {
      year: '2024',
      title: 'HackIndia Spark 2 Participant',
      description: 'Created an AI-powered Habit Tracker application that provides personalized insights and recommendations using machine learning algorithms.',
      category: 'Hackathon'
    },
    {
      year: '2024',
      title: 'Micro IT Internship Completion',
      description: 'Successfully completed a comprehensive Full Stack Development internship, gaining hands-on experience with modern web technologies.',
      category: 'Professional'
    },
    {
      year: '2023',
      title: 'Academic Excellence',
      description: 'Maintained consistent academic performance while actively participating in coding competitions and technical events.',
      category: 'Academic'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Milestones and accomplishments that showcase my journey in technology and innovation
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
          
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full">
                        {achievement.category}
                      </span>
                      <span className="text-lg font-bold text-gray-800">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
