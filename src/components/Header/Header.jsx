import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
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

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-cass-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">CASS</span>
            </div>
            <div className={`transition-colors ${scrolled ? 'text-cass-dark' : 'text-white'}`}>
              <h2 className="text-sm md:text-base font-bold leading-tight">IEEE CASS</h2>
              <p className="text-xs opacity-90">Kerala Chapter</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-cass-green ${
                  scrolled ? 'text-cass-dark' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? 'text-cass-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-cass-dark hover:text-cass-green font-medium border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header