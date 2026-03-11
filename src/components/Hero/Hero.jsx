import React from 'react'
import { FiArrowRight, FiUsers, FiCalendar, FiAward } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cass-green to-green-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container-custom relative z-10 text-white pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse mr-2"></span>
            <span className="text-sm font-semibold">IEEE CASS Kerala Chapter</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Advancing Circuits and Systems
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-light">
              Innovation • Research • Collaboration
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join the premier community of circuits and systems professionals in Kerala. 
            Connect, learn, and innovate with IEEE CASS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="bg-white text-cass-green px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 group"
            >
              Join Us Today 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#events"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cass-green transition-all"
            >
              Explore Events
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <FiUsers className="text-3xl" />
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Members</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FiCalendar className="text-3xl" />
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Events/Year</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FiAward className="text-3xl" />
              <div>
                <div className="text-2xl font-bold">25+</div>
                <div className="text-sm opacity-90">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero