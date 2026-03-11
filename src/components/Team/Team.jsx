import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiLinkedin, FiMail } from 'react-icons/fi'
import { teamMembers } from '../../data/dummyData'

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0) // Default expand the first item

  return (
    <section id="team" className="py-24 bg-cass-dark overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              The Committee
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 font-light"
            >
              Hover to expand and learn more about the leading minds pushing the boundaries of circuits and systems in Kerala.
            </motion.p>
          </div>
        </div>

        {/* 
          Horizontal Expanding Accordion (Filmstrip)
          On desktop: Left-to-right flex that expands the hovered card.
          On mobile: Vertical scrolling stack.
        */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[32rem]">
          {teamMembers.map((member, index) => {
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={member.id}
                onMouseEnter={() => setHoveredIndex(index)}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 ease-out flex-shrink-0 lg:flex-shrink ${isHovered
                    ? 'lg:flex-[3] bg-cass-green shadow-2xl h-[28rem] lg:h-full'
                    : 'lg:flex-[1] bg-white/5 border border-white/10 h-24 lg:h-full group hover:bg-white/10'
                  }`}
              >
                {/* 
                  Mobile View (Collapsed): Show simple row
                  Desktop View (Collapsed): Show vertical name
                */}
                <div className={`absolute inset-0 p-6 flex items-center lg:items-end lg:justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}>
                  {/* Mobile text */}
                  <div className="lg:hidden flex items-center gap-4 w-full">
                    <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover filter grayscale" />
                    <div>
                      <h3 className="text-white font-bold">{member.name}</h3>
                      <p className="text-white/60 text-sm uppercase tracking-wider">{member.role}</p>
                    </div>
                  </div>

                  {/* Desktop vertical text */}
                  <div className="hidden lg:flex w-full h-full pb-8 flex-col items-center justify-end">
                    <div className="whitespace-nowrap -rotate-180 writing-vertical-rl text-white/50 text-xl font-bold tracking-widest uppercase mb-8 group-hover:text-cass-green transition-colors">
                      {member.name}
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-cass-green transition-colors">
                      <img src={member.image} alt="Avatar" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                  </div>
                </div>

                {/* Expanded State Content */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full flex flex-col justify-end"
                    >
                      {/* Background Image filling the card */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay filter grayscale-[20%] opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cass-dark via-cass-dark/60 to-transparent" />

                      {/* Info Panel over the image */}
                      <div className="relative z-10 p-6 lg:p-8 w-full">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="inline-block px-3 py-1 mb-3 bg-white text-cass-green rounded-full font-bold text-xs uppercase tracking-widest">
                            {member.role}
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-white/90 font-medium mb-4 text-sm lg:text-base border-b border-white/20 pb-4 inline-block w-full">
                            {member.institution} • {member.qualification}
                          </p>
                          <p className="text-white/70 text-sm leading-relaxed max-w-md hidden sm:block mb-6">
                            {member.bio}
                          </p>

                          <div className="flex gap-4">
                            <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-cass-dark flex items-center justify-center backdrop-blur-md transition-all">
                              <FiLinkedin />
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-cass-dark flex items-center justify-center backdrop-blur-md transition-all">
                              <FiMail />
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Team