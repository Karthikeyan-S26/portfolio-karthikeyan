
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      name: 'HTML',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Markup language for web pages'
    },
    {
      name: 'CSS',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      description: 'Styling and layout for web pages'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'Dynamic programming for web'
    },
    {
      name: 'React',
      category: 'Frontend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Modern UI library'
    },
    {
      name: 'Python',
      category: 'Backend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Versatile programming language'
    },
    {
      name: 'Java',
      category: 'Backend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      description: 'Object-oriented programming'
    },
    {
      name: 'C',
      category: 'Programming',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      description: 'System programming language'
    },
    {
      name: 'MySQL',
      category: 'Database',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      description: 'Relational database management'
    },
    {
      name: 'Firebase',
      category: 'Backend',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      description: 'Backend-as-a-Service platform'
    }
  ];

  const categories = ['Frontend', 'Backend', 'Programming', 'Database'];

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
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
          >
            Here are the technologies and programming languages I work with
          </motion.p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center"
            >
              {category}
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 flex items-center justify-center"
                      >
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                        >
                          {skill.name}
                        </motion.h4>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="text-gray-600 dark:text-gray-300 text-sm"
                        >
                          {skill.description}
                        </motion.p>
                      </div>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
                    />
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
