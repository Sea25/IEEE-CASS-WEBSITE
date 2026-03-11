import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const focusAreas = [
    'VLSI & Architecture', 'Analog & Mixed Signal', 'Digital Signal Processing',
    'Sensors & IoT', 'Power & Energy Circuits', 'AI & Neural Networks'
  ]

  return (
    <section id="about" className="py-24 md:py-32 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-12 mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-cass-green text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              About The Chapter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-cass-dark leading-tight tracking-tight">
              Engineering the foundation of modern technology.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:w-[40%] text-sm text-cass-gray/80 font-light leading-relaxed"
          >
            The IEEE Circuits and Systems Society Kerala Section is dedicated to advancing the theory and application of circuits and systems. Our student leadership team works tirelessly to bridge the gap between academic learning and industry requirements. We organize technical workshops, seminars, competitions, and networking events to foster innovation and professional development among students and young professionals in Kerala.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-cass-green block" />
                <h3 className="text-lg font-bold text-cass-dark tracking-wide">Our Vision</h3>
              </div>
              <p className="text-base text-cass-gray leading-loose font-light">
                To serve as the definitive hub for circuits and systems innovation in Kerala. We aim to nurture cutting-edge research, hands-on education, and thriving industry collaboration, building a community where ideas seamlessly transition into impactful technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-cass-green block" />
                <h3 className="text-lg font-bold text-cass-dark tracking-wide">Our Mission</h3>
              </div>
              <ul className="space-y-4 text-base text-cass-gray font-light">
                <li className="flex items-start gap-4">
                  <span className="text-cass-green mt-1 text-xs">01</span>
                  <span className="leading-relaxed">Promote technical excellence through globally recognized conferences, workshops, and publications.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-cass-green mt-1 text-xs">02</span>
                  <span className="leading-relaxed">Foster high-level collaboration across academic borders and industry boundaries.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-cass-green mt-1 text-xs">03</span>
                  <span className="leading-relaxed">Support student members through dedicated mentorship and deep-tech networking opportunities.</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-cass-dark rounded-xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cass-green/20 rounded-full blur-[50px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-8 tracking-wide">Core Research Areas</h3>
              <div className="flex flex-col gap-4">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-white/80 group">
                    <span className="w-2 h-2 rounded-full border border-cass-green group-hover:bg-cass-green transition-colors" />
                    <span className="text-sm font-light tracking-wide">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About