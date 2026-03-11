import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiActivity, FiCpu, FiGlobe, FiAward } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 bg-[#fefefe] overflow-hidden flex flex-col justify-center">

      {/* Schematic Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
        <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-cass-gray" />
        <div className="absolute top-0 bottom-0 right-[10%] w-[1px] bg-cass-gray" />
        <div className="absolute left-0 right-0 top-[20%] h-[1px] bg-cass-gray" />
        <div className="absolute left-0 right-0 top-[80%] h-[1px] bg-cass-gray" />
        {/* Intersection node dots */}
        <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 bg-cass-green transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="absolute top-[80%] right-[10%] w-1.5 h-1.5 bg-cass-green transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Main Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cass-green/10 text-cass-green">
                <FiCpu size={14} />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cass-gray/80">
                IEEE CASS Kerala
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-cass-dark mb-8 leading-[1.1] tracking-tight">
              Advancing the science of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cass-green to-teal-500">
                circuits & systems
              </span>
            </h1>

            <p className="text-base md:text-lg text-cass-gray/80 leading-relaxed font-light mb-10 max-w-lg">
              We connect researchers, students, and industry leaders across Kerala to share knowledge, foster collaboration, and shape tomorrow's deeply embedded technology.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a href="#contact" className="group flex items-center gap-4 bg-cass-dark text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-cass-green transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,135,82,0.3)]">
                Join the Chapter
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#events" className="group flex items-center gap-3 text-sm font-semibold text-cass-dark hover:text-cass-green transition-colors">
                <span className="border-b border-cass-dark group-hover:border-cass-green pb-0.5 transition-colors">
                  Explore Events
                </span>
              </a>
            </div>
          </motion.div>

          {/* Minimalist Stats Pane */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6 lg:ml-10"
          >
            {/* Stat Block 1 */}
            <div className="relative p-6 border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiGlobe size={40} className="text-cass-green" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-cass-dark mb-1 tracking-tight">500<span className="text-cass-green">+</span></h3>
              <p className="text-xs uppercase tracking-widest font-semibold text-cass-gray/60">Active Members</p>
            </div>

            {/* Stat Block 2 */}
            <div className="relative p-6 border border-gray-100 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FiActivity size={40} className="text-cass-green" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-cass-dark mb-1 tracking-tight">50<span className="text-cass-green">+</span></h3>
              <p className="text-xs uppercase tracking-widest font-semibold text-cass-gray/60">Annual Events</p>
            </div>

            {/* Stat Block 3 */}
            <div className="relative p-6 border border-gray-100 bg-cass-green rounded-2xl shadow-sm hover:shadow-md hover:shadow-cass-green/20 transition-shadow group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white">
                <FiAward size={40} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-1 tracking-tight">25<span className="text-white/70">+</span></h3>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/80">Awards Won</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero