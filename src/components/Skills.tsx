
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'React',
      description: 'Modern UI library for building interactive interfaces',
      icon: '⚛️',
      level: 90
    },
    {
      name: 'JavaScript',
      description: 'Dynamic programming language for web development',
      icon: '🟨',
      level: 85
    },
    {
      name: 'Python',
      description: 'Versatile language for backend and data science',
      icon: '🐍',
      level: 80
    },
    {
      name: 'Java',
      description: 'Object-oriented programming for enterprise applications',
      icon: '☕',
      level: 75
    },
    {
      name: 'Node.js',
      description: 'Server-side JavaScript runtime environment',
      icon: '🟢',
      level: 70
    },
    {
      name: 'MySQL',
      description: 'Relational database management system',
      icon: '🗄️',
      level: 75
    },
    {
      name: 'MongoDB',
      description: 'NoSQL database for modern applications',
      icon: '🍃',
      level: 70
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid styling',
      icon: '🎨',
      level: 85
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
