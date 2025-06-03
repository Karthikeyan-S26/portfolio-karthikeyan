
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      category: 'Frontend',
      icon: '🌐',
      description: 'Markup language for web pages'
    },
    {
      name: 'CSS',
      category: 'Frontend',
      icon: '🎨',
      description: 'Styling and layout for web pages'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: '⚡',
      description: 'Dynamic programming for web'
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: '⚛️',
      description: 'Modern UI library'
    },
    {
      name: 'Python',
      category: 'Backend',
      icon: '🐍',
      description: 'Versatile programming language'
    },
    {
      name: 'Java',
      category: 'Backend',
      icon: '☕',
      description: 'Object-oriented programming'
    },
    {
      name: 'C',
      category: 'Programming',
      icon: '🔧',
      description: 'System programming language'
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: '🗄️',
      description: 'Relational database management'
    },
    {
      name: 'Firebase',
      category: 'Backend',
      icon: '🔥',
      description: 'Backend-as-a-Service platform'
    }
  ];

  const categories = ['Frontend', 'Backend', 'Programming', 'Database'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are the technologies and programming languages I work with
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              {category}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-4xl">{skill.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {skill.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
