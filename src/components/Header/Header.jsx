import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi'

const Header = () => {
  const [active, setActive] = useState('#home')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href) => {
    setActive(href)
    setIsMobileOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">

        {/* The Floating Top Pill Nav */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`relative pointer-events-auto flex items-center justify-between w-full max-w-5xl transition-all duration-500 rounded-full border ${scrolled
            ? 'bg-white/90 backdrop-blur-xl border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2 px-4'
            : 'bg-cass-dark/80 backdrop-blur-md border-white/10 shadow-2xl py-3 px-6 text-white'
            }`}
        >
          {/* Logo Section */}
          <a href="#home" className={`flex items-center gap-3 relative z-10 transition-transform hover:scale-105 ${scrolled ? 'text-cass-dark' : 'text-white'}`}>
            {/* Removed the circular container and directly displaying the image */}
            <img
              src="/IEEE CAS Logo.png"
              alt="IEEE CASS Kerala Chapter Logo"
              className="h-10 md:h-12 w-auto object-contain drop-shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-sm tracking-wide leading-tight">IEEE CASS</span>
              <span className={`text-[10px] uppercase tracking-widest ${scrolled ? 'text-cass-gray' : 'text-white/70'}`}>Kerala</span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center absolute inset-0 z-0">
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = active === item.href
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`relative px-5 py-2 rounded-full font-semibold text-sm transition-colors duration-300 z-10 ${isActive
                      ? (scrolled ? 'text-white' : 'text-white')
                      : (scrolled ? 'text-cass-gray hover:text-cass-dark' : 'text-white/70 hover:text-white')
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-bubble"
                        className={`absolute inset-0 rounded-full -z-10 ${scrolled ? 'bg-cass-green shadow-md' : 'bg-cass-green'}`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:block relative z-10">
            <a
              href="#contact"
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${scrolled
                ? 'bg-cass-dark text-white border-2 border-transparent hover:bg-gray-800'
                : 'bg-transparent text-white border-2 border-white/20 hover:bg-white hover:text-cass-dark'
                }`}
            >
              Join Chapter
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className={`md:hidden relative z-10 p-2 rounded-full transition-colors ${scrolled ? 'text-cass-dark hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Slide-out Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className="group flex items-center justify-between border-b border-gray-100 pb-4 text-cass-dark text-3xl font-bold"
                >
                  <span className="group-hover:text-cass-green transition-colors">{item.name}</span>
                  <FiChevronRight className="opacity-0 group-hover:opacity-100 text-cass-green transform -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>
            <div className="mt-12 text-center">
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className="inline-block w-full bg-cass-green text-white py-4 rounded-full text-xl font-bold shadow-lg"
              >
                Join Chapter
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header