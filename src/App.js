import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-secondary/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-primary"
            >
              Patience Karanja
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-secondary/90">
          <div className="absolute inset-0 opacity-40">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-0.5 bg-blue-500 blur-sm"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                  rotate: Math.random() * 360
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scaleX: [0.1, 1, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>

        {/* Content over background */}
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Patience Karanja</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A passionate Full Stack Developer crafting beautiful digital experiences
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/nimo731" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/patience-karanja" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="mailto:patiencekaranja@gmail.com" className="text-2xl hover:text-primary transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300">
            <p className="mb-4">
              I'm a passionate Full Stack Developer based in Nairobi, currently studying at Moringa School. 
              I love turning ideas into functional, beautiful digital experiences.
            </p>
            <p className="mb-4">
              My journey in tech has equipped me with skills in HTML, CSS, JavaScript, React, Python, and SQL. 
              I'm particularly proud of my work on the Fit Me app, where I collaborated with a team to create 
              something impactful.
            </p>
            <p>
              When I'm not coding, you can find me dreaming about cars - I'm manifesting my journey to own a 
              Range Rover Evoque, Audi Q5, or Volvo XC40 in the next four years!
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fit Me App */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-secondary/50 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Fit Me App</h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive fitness tracking application built with React and Python.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">SQL</span>
                </div>
              </div>
            </motion.div>

            {/* Mood Journal */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-secondary/50 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Mood Journal</h3>
                <p className="text-gray-300 mb-4">
                  A personal mood tracking application to help users monitor their emotional well-being.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">JavaScript</span>
                </div>
              </div>
            </motion.div>

            {/* Gospel Platform */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-secondary/50 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">Gospel Platform</h3>
                <p className="text-gray-300 mb-4">
                  A platform dedicated to sharing and celebrating gospel content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'SQL', 'Git', 'Team Collaboration'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-secondary/50 p-6 rounded-lg text-center"
              >
                <h3 className="text-lg font-semibold text-primary">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:patiencekaranja@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                patiencekaranja@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-secondary/80">
        <div className="container mx-auto text-center text-gray-400">
          <p>© 2024 Patience Karanja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 