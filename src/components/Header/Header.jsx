import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ]

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 z-50">
              <div className="w-10 h-10 bg-cass-green rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg tracking-wider">CA</span>
              </div>
              <div className={`flex flex-col ${scrolled ? 'text-cass-dark' : 'text-cass-dark drop-shadow-sm'}`}>
                <span className="font-bold text-sm md:text-base leading-tight">IEEE CASS</span>
                <span className="text-xs font-medium opacity-80">Kerala Chapter</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors ${scrolled
                      ? 'text-cass-gray hover:text-cass-green'
                      : 'text-cass-dark/80 hover:text-cass-green'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-cass-green text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow hover:bg-opacity-90 hover:shadow-lg transition-all"
              >
                Get Involved
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 -mr-2 z-50 transition-colors ${scrolled || isOpen ? 'text-cass-dark' : 'text-cass-dark'
                }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold text-cass-dark hover:text-cass-green border-b border-gray-100 pb-4 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href="#contact"
                className="block w-full text-center bg-cass-green text-white py-4 rounded-xl font-bold text-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header