'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code2, Lightbulb, Target, BookOpen, Award } from 'lucide-react'

const stats = [
  { icon: Code2, value: '15+', label: 'Projects Completed' },
  { icon: BookOpen, value: '3.7+', label: 'CGPA' },
  { icon: Award, value: '10+', label: 'Certifications' },
  { icon: Target, value: '100%', label: 'Commitment' },
]

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Sc. in Computer Science & Engineering from American International University Bangladesh (AIUB), majoring in Information Systems.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Passionate about building full-stack applications using modern technologies like React, Next.js, Node.js, and cloud services.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Strong analytical skills with experience in algorithm design, system architecture, and optimizing application performance.',
  },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4 border border-primary-500/20"
          >
            About Me
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Know Who <span className="text-gradient">I Am</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate software engineer dedicated to creating impactful digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-2xl border border-white/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AIUB Graduate</h3>
                  <p className="text-gray-400">Class of 2024</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/15 rounded-full blur-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Software Engineer with a Passion for Innovation
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I graduated from <span className="text-primary-400 font-semibold">American International University Bangladesh (AIUB)</span> with a Bachelor&apos;s degree in Computer Science & Engineering, specializing in Information Systems. My academic journey equipped me with a strong foundation in software engineering principles, database management, and system design.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I thrive on turning complex problems into elegant, efficient solutions. Whether it&apos;s crafting responsive frontends with React and Next.js or architecting robust backend systems with Node.js, I am committed to delivering high-quality code that makes a difference.
                </p>
              </div>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.15 }}
                    className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary-500/30 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}