import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'StyleSpot E-commerce Website',
      summary: 'Full-stack e-commerce platform with modern UI and secure payment integration',
      description: 'A comprehensive e-commerce solution built with React and Node.js, featuring user authentication, product catalog, shopping cart, and payment processing. Includes admin panel for inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      github: 'https://github.com/Karthikeyan-S26/stylespot',
      demo: 'https://stylespot-demo.vercel.app'
    },
    {
      id: 2,
      title: 'ThoughtNest Blog Platform',
      summary: 'Modern blogging platform with rich text editor and social features',
      description: 'A feature-rich blogging platform that allows users to create, edit, and share articles. Includes features like comments, likes, user profiles, and content moderation.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      tags: ['React', 'Express.js', 'PostgreSQL', 'AWS S3', 'JWT'],
      github: 'https://github.com/Karthikeyan-S26/thoughtnest',
      demo: 'https://thoughtnest-demo.netlify.app'
    },
    {
      id: 3,
      title: 'Sign Language to Text Converter',
      summary: 'ML-powered application that converts sign language gestures to text in real-time',
      description: 'An innovative machine learning application that uses computer vision and deep learning to recognize sign language gestures and convert them to text. Built with TensorFlow and OpenCV for real-time gesture recognition.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      tags: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/Karthikeyan-S26/sign-language-converter',
      demo: 'https://sign-language-demo.herokuapp.com'
    },
    {
      id: 4,
      title: 'AI Habit Tracker App',
      summary: 'Smart habit tracking application with AI-powered insights and recommendations',
      description: 'An intelligent habit tracking app that uses machine learning to provide personalized recommendations and insights. Built during HackIndia Spark 2 hackathon.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'Chart.js'],
      github: 'https://github.com/Karthikeyan-S26/ai-habit-tracker',
      demo: 'https://habit-tracker-demo.app'
    },
    {
      id: 5,
      title: 'Smart Traffic Management System',
      summary: 'IoT-based traffic optimization system for urban environments',
      description: 'An intelligent traffic management solution using IoT sensors and real-time data analysis to optimize traffic flow. Developed for Smart India Hackathon 2024.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
      tags: ['Python', 'IoT', 'OpenCV', 'Django', 'Raspberry Pi'],
      github: 'https://github.com/Karthikeyan-S26/smart-traffic',
      demo: 'https://smart-traffic-demo.herokuapp.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github size={18} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Demo</span>
                    </motion.a>
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-lg hover:shadow-lg transition-shadow"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
