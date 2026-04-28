'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import { FiLayers } from 'react-icons/fi'
const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard. Features include user authentication, product catalog, shopping cart, and order tracking.',
        image: '/images/projects/ecommerce.jpg',
        tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
        github: 'https://github.com/kamilahmed/ecommerce',
        live: 'https://ecommerce-demo.vercel.app',
        featured: true,
    },
    {
        id: 2,
        title: 'Task Management System',
        description: 'Collaborative project management tool with real-time updates using WebSocket. Includes drag-and-drop Kanban boards, team collaboration features, and automated workflow triggers.',
        image: '/images/projects/taskmanager.jpg',
        tags: ['React', 'Express.js', 'Socket.io', 'PostgreSQL', 'Redux'],
        github: 'https://github.com/kamilahmed/task-manager',
        live: 'https://taskmanager-demo.vercel.app',
        featured: true,
    },
    {
        id: 3,
        title: 'AI Content Generator',
        description: 'An AI-powered content creation platform that generates blog posts, social media content, and marketing copy using OpenAI API. Features include content templates, SEO optimization, and export options.',
        image: '/images/projects/ai-content.jpg',
        tags: ['Next.js', 'OpenAI API', 'Prisma', 'TypeScript', 'Vercel AI SDK'],
        github: 'https://github.com/kamilahmed/ai-content',
        live: 'https://ai-content-demo.vercel.app',
        featured: false,
    },
    {
        id: 4,
        title: 'Health & Fitness Tracker',
        description: 'Mobile-first web application for tracking workouts, nutrition, and health metrics. Includes data visualization with charts, goal setting, and progress tracking with detailed analytics.',
        image: '/images/projects/fitness.jpg',
        tags: ['React Native', 'Node.js', 'MongoDB', 'Chart.js', 'Firebase'],
        github: 'https://github.com/kamilahmed/fitness-tracker',
        live: 'https://fitness-demo.vercel.app',
        featured: false,
    },
    {
        id: 5,
        title: 'Real Estate Listing Platform',
        description: 'Property listing and search platform with advanced filtering, map integration, and virtual tour support. Includes agent dashboards and automated email notifications.',
        image: '/images/projects/realestate.jpg',
        tags: ['Next.js', 'Mapbox', 'PostgreSQL', 'AWS S3', 'Tailwind CSS'],
        github: 'https://github.com/kamilahmed/real-estate',
        live: 'https://realestate-demo.vercel.app',
        featured: false,
    },
    {
        id: 6,
        title: 'Social Media Analytics Dashboard',
        description: 'Comprehensive analytics dashboard for social media managers. Integrates with multiple platforms APIs to provide unified reporting, audience insights, and content performance metrics.',
        image: '/images/projects/analytics.jpg',
        tags: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
        github: 'https://github.com/kamilahmed/social-analytics',
        live: 'https://analytics-demo.vercel.app',
        featured: true,
    },
]

const categories = ['All', 'Featured', 'Full Stack', 'Frontend', 'Backend']

export default function Projects() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
    const [activeFilter, setActiveFilter] = useState('All')

    const filteredProjects = activeFilter === 'All'
        ? projects
        : activeFilter === 'Featured'
            ? projects.filter(p => p.featured)
            : projects.filter(p => p.tags.some(tag =>
                activeFilter === 'Full Stack' ? ['Next.js', 'Node.js', 'Express.js'].some(t => tag.includes(t)) :
                    activeFilter === 'Frontend' ? ['React', 'Next.js', 'Tailwind CSS'].some(t => tag.includes(t)) :
                        ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'].some(t => tag.includes(t))
            ))

    return (
        <section id="projects" className="relative py-24 lg:py-32 bg-dark-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4 border border-primary-500/20">
                        Portfolio
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A collection of projects that showcase my technical skills and problem-solving abilities
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === category
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-900/30 to-accent-900/30">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <FiLayers className="w-16 h-16 text-white/10" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />

                                {project.featured && (
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                                        Featured
                                    </span>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                    >
                                        <FaGithub className="w-6 h-6" />
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                                    >
                                        <FiExternalLink className="w-6 h-6" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <FiArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary-400 transition-colors" />
                                </div>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded-md border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/kamilahmed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                    >
                        <FaGithub className="w-6 h-6" />
                        View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}