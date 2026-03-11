import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiActivity, FiGlobe, FiUsers } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center pt-24 pb-16 bg-cass-light lg:pt-32 overflow-hidden">
      {/* Soft geometric background */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-cass-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-cass-green/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 text-sm font-semibold text-cass-green">
              <FiActivity className="animate-pulse" />
              <span>Innovating the Future</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cass-dark mb-6 leading-tight">
              Advancing <span className="text-cass-green">Circuits</span> &<br className="hidden lg:block" /> Systems
            </h1>

            <p className="text-lg md:text-xl text-cass-gray max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
              We are the Kerala Chapter of IEEE CASS. Connecting researchers, students, and industry leaders to shape tomorrow's technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="w-full sm:w-auto bg-cass-green text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group">
                Become a Member
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#events" className="w-full sm:w-auto bg-white text-cass-dark border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:border-cass-green hover:text-cass-green transition-all flex items-center justify-center">
                Explore Events
              </a>
            </div>
          </motion.div>

          {/* Right Visual Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 bg-cass-dark text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
              <FiGlobe className="text-4xl text-cass-green mb-4" />
              <h3 className="text-5xl font-bold mb-2">500+</h3>
              <p className="text-white/80 font-medium">Active Members across Kerala</p>
            </div>

            <div className="col-span-1 bg-white p-6 md:p-8 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col justify-end group">
              <h3 className="text-4xl font-bold text-cass-dark mb-1 group-hover:text-cass-green transition-colors">50+</h3>
              <p className="text-cass-gray text-sm md:text-base font-medium">Annual Events</p>
            </div>

            <div className="col-span-1 bg-cass-green text-white p-6 md:p-8 rounded-[2rem] shadow-lg flex flex-col justify-end group">
              <h3 className="text-4xl font-bold mb-1">25+</h3>
              <p className="text-white/90 text-sm md:text-base font-medium">Awards Won</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero