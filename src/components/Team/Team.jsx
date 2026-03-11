import React from 'react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiMail } from 'react-icons/fi'
import { teamMembers } from '../../data/dummyData'

const Team = () => {
  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-cass-dark mb-4"
            >
              Executive Committee
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-cass-gray"
            >
              The driving force behind our community's success and continuous growth.
            </motion.p>
          </div>
        </div>

        {/* Circular Avatar Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Avatar Bubble */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden bg-cass-light shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale-[10%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />

                {/* Social Overlay triggers on hover of the avatar */}
                <div className="absolute inset-0 bg-cass-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-cass-dark hover:bg-cass-green hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                    <FiLinkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-cass-dark hover:bg-cass-green hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <FiMail size={18} />
                  </a>
                </div>
              </div>

              {/* Info Text */}
              <h3 className="text-xl font-bold text-cass-dark mb-1 group-hover:text-cass-green transition-colors">
                {member.name}
              </h3>
              <p className="text-cass-green font-semibold text-sm tracking-wide uppercase mb-2">
                {member.role}
              </p>
              <p className="text-sm font-medium text-cass-gray mb-2">
                {member.institution}
              </p>
              <p className="text-xs text-cass-gray/80 line-clamp-3 px-2">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team