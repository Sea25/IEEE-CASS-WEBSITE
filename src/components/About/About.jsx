import React from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const About = () => {
  const focusAreas = [
    'VLSI Design', 'Analog Circuits', 'Signal Processing',
    'Embedded Systems', 'Power Electronics', 'RF & Microwave',
    'Neural Networks', 'IoT Systems', 'Mixed-Signal Design', 'FPGA Design'
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-cass-dark mb-6"
          >
            About <span className="text-cass-green">IEEE CASS</span> Kerala
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-cass-gray leading-relaxed"
          >
            Dedicated to the advancement of theory, analysis, and implementation of circuits and systems for a better tomorrow.
          </motion.p>
        </div>

        {/* Narrative Flow - Alternating Rows */}
        <div className="space-y-24">

          {/* Vision Row */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cass-dark mb-4 border-l-4 border-cass-green pl-4">Our Vision</h3>
              <p className="text-cass-gray text-lg leading-relaxed bg-gray-50 p-6 md:p-8 rounded-2xl md:rounded-r-3xl">
                To be the core hub for circuits and systems innovation in Kerala, nurturing cutting-edge research, hands-on education, and thriving industry collaboration. We envision a community where ideas seamlessly transition into impactful technology.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full order-1 md:order-2"
            >
              <div className="aspect-video bg-cass-dark rounded-3xl overflow-hidden relative shadow-2xl flex items-center justify-center p-8 text-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cass-green to-transparent"></div>
                <p className="text-2xl md:text-4xl font-light text-white italic z-10 leading-snug">"Empowering minds to design the future."</p>
              </div>
            </motion.div>
          </div>

          {/* Mission Row */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Promote Technical Excellence",
                  "Foster Industry Work",
                  "Support Student Mentorship",
                  "Advance Deep Tech Research"
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
                    <FiCheckCircle className="text-cass-green text-3xl" />
                    <span className="font-semibold text-cass-dark text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cass-dark mb-4 border-l-4 border-cass-green pl-4">Our Mission</h3>
              <p className="text-cass-gray text-lg leading-relaxed mb-6">
                We are on a structured path to bridge the gap between academic research and practical industry application. Through relentless mentorship and global networking, we ensure our members are always at the forefront of tech.
              </p>
            </motion.div>
          </div>

          {/* Focus Areas Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-16 border-t border-gray-100"
          >
            <h3 className="text-center text-xl font-bold text-cass-dark mb-8">Core Focus Areas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {focusAreas.map(area => (
                <span key={area} className="px-5 py-2.5 bg-cass-light text-cass-dark rounded-lg font-medium text-sm hover:bg-cass-green hover:text-white transition-colors cursor-default border border-gray-200">
                  {area}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About