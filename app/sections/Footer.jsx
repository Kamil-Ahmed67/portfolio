'use client'

import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaHeart, 
  FaArrowUp, 
  FaCode, 
  FaExternalLinkAlt, 
  FaMapMarkerAlt 
} from 'react-icons/fa'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: 'Resume', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'GitHub', href: 'https://github.com/kamilahmed' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/kamilahmed' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com/kamilahmed' },
  { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/kamilahmed' },
  { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: 'https://twitter.com/kamilahmed' },
  { name: 'Email', icon: <FaEnvelope className="w-5 h-5" />, href: 'mailto:kamil.ahmed@example.com' }
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1))
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gray-900 text-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-3">
                KA
              </div>
              <div>
                <h3 className="font-bold text-xl">Kamil Ahmed</h3>
                <p className="text-gray-400 text-sm">Software Engineer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building scalable, intelligent solutions that bridge the gap between complex data and human experience. Graduate of AIUB, CSE - Information Systems.
            </p>
            <div className="flex items-center text-gray-400 text-sm">
              <FaMapMarkerAlt className="w-4 h-4 mr-2" />
              Dhaka, Bangladesh
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-500 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                    {link.href.startsWith('http') && <FaExternalLinkAlt className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mb-2">Subscribe to updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-l-xl bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-xl transition-colors">
                <FaEnvelope className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} Kamil Ahmed. All rights reserved.</span>
              <span className="mx-2">|</span>
              <span className="flex items-center">
                Made with <FaHeart className="w-3 h-3 mx-1 text-red-500" /> using
                <FaCode className="w-3 h-3 mx-1" /> Next.js
              </span>
            </div>

            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </footer>
  )
}