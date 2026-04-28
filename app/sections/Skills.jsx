'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaLinux,
  FaHtml5, FaCss3Alt, FaJs, FaFigma, FaDatabase, FaServer,
  FaCode, FaMicrosoft
} from 'react-icons/fa'
import { SiDotnet, SiFirebase, SiMysql, SiNextdotjs, SiPostman, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si'


const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Next.js', level: 95 },
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'HTML5/CSS3', level: 90 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'ASP .NET', level: 88 },
      { name: 'Node.js', level: 88 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'Microsoft SQL', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'Firebase', level: 80 },
    ],
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vercel/Netlify', level: 90 },
      { name: 'Linux', level: 78 },
    ],
  },
]

const techStack = [
  { name: 'React', icon: <FaReact className="w-4 h-4" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
  { name: 'ASP .NET', icon: <SiDotnet className="w-4 h-4" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-4 h-4" /> },
  { name: 'Microsoft SQL', icon: <FaDatabase className="w-4 h-4" /> },
  { name: 'MySQL', icon: <SiMysql className="w-4 h-4" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-4 h-4" /> },
  { name: 'Git', icon: <FaGitAlt className="w-4 h-4" /> },
  { name: 'Python', icon: <FaPython className="w-4 h-4" /> },
  { name: 'JavaScript', icon: <FaJs className="w-4 h-4" /> },
  { name: 'HTML5', icon: <FaHtml5 className="w-4 h-4" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="w-4 h-4" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-4 h-4" /> },
  { name: 'Vercel', icon: <SiVercel className="w-4 h-4" /> },
  { name: 'Linux', icon: <FaLinux className="w-4 h-4" /> },
  { name: 'Figma', icon: <FaFigma className="w-4 h-4" /> },
  { name: 'Postman', icon: <SiPostman className="w-4 h-4" /> },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState(0)
  const [progressKey, setProgressKey] = useState(0)

  const handleCategoryChange = (index) => {
    setActiveCategory(index)
    setProgressKey(prev => prev + 1)
  }

  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-dark-900/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4 border border-primary-500/20">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              onClick={() => handleCategoryChange(index)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={`${activeCategory}-${progressKey}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={`${activeCategory}-${skill.name}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-5"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-primary-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  key={`bar-${activeCategory}-${index}-${progressKey}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-linear-to-r from-gray-700 to-gray-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-primary-500/20 hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300 cursor-default"
              >
                {tech.icon}
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}