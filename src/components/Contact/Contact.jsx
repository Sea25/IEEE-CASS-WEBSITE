import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiInstagram, FiTwitter, FiFacebook, FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#1a1c20] via-cass-dark to-black text-white pt-24 pb-8 border-t-[6px] border-yellow-500 relative overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

      {/* Decorative Premium Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cass-green/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDEwaDQwTTEwIDB2NDBNMCAyMGg0ME0yMCAwdjQwTTAgMzBoNDBNMzAgMHY0MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

          {/* Column 1: Brand & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 tracking-tight">
              IEEE CAS Kerala
            </h3>
            <p className="text-gray-300 leading-relaxed font-light mb-8 max-w-sm drop-shadow-sm">
              Advancing circuits and systems education and research across Kerala's premier engineering institutions.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FiLinkedin, href: "#" },
                { Icon: FiInstagram, href: "#" },
                { Icon: FiFacebook, href: "#" },
                { Icon: FiTwitter, href: "#" }
              ].map((item, idx) => (
                <a key={idx} href={item.href} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-600 hover:border-transparent hover:text-cass-dark transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(251,188,4,0.4)] hover:-translate-y-1">
                  <item.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col lg:pl-8"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">Quick Links</h3>
            <ul className="space-y-4 font-medium text-gray-400 w-full">
              {['About Us', 'Leadership Team', 'Events', 'Chapters', 'Resources', 'IEEE.org'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="group inline-flex items-center gap-2 hover:text-yellow-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-yellow-400 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="text-xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-3">Contact Info</h3>
            <div className="flex flex-col gap-6 text-gray-300 font-light">
              <a href="mailto:circuitandsystemsociety@gmail.com" className="flex items-start gap-4 hover:text-yellow-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/20 transition-colors shrink-0">
                  <FiMail className="text-lg" />
                </div>
                <span className="break-all mt-2">circuitandsystemsociety@gmail.com</span>
              </a>
              <a href="tel:+917736273307" className="flex items-start gap-4 hover:text-yellow-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400/20 transition-colors shrink-0">
                  <FiPhone className="text-lg" />
                </div>
                <span className="mt-2">+91 773 627 3307</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-yellow-400 shrink-0">
                  <FiMapPin className="text-lg" />
                </div>
                <span className="leading-relaxed mt-1">Thiruvananthapuram,<br />Kerala, India</span>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Stay Updated / Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden"
          >
            {/* Inner card glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl" />

            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Stay Updated</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm relative z-10">
              Subscribe to our newsletter for the latest updates on events and opportunities.
            </p>
            <form className="flex flex-col gap-3 relative z-10" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:border-yellow-500 transition-colors font-light placeholder:text-gray-500"
                  required
                />
                <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <button
                type="submit"
                className="w-full relative group overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-600 text-cass-dark font-black py-3 px-6 rounded-xl transition-all shadow-[0_4px_15px_rgba(251,188,4,0.3)] hover:shadow-[0_6px_25px_rgba(251,188,4,0.5)] transform hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shine_0.8s_ease-out]" />
                <span className="flex items-center justify-center gap-2 relative z-10">
                  Subscribe Now <FiSend className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center gap-4">
          <p className="text-gray-500 font-medium text-sm">
            &copy; 2026 IEEE Circuits and Systems Society Kerala Section.
          </p>
          <p className="text-gray-500 font-medium text-sm">
            Designed by <span className="text-yellow-500 font-bold ml-1">Web Team CASS KC</span>
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes shine {
          100% {
            transform: translateX(100%) skewX(12deg);
          }
        }
      `}</style>
    </footer>
  )
}

export default Contact