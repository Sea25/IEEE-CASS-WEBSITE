import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'
import { socialLinks } from '../../data/dummyData'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message Sent Successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  const socialIcons = {
    facebook: FiFacebook, twitter: FiTwitter,
    linkedin: FiLinkedin, instagram: FiInstagram,
    youtube: FiYoutube
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-cass-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left Side: Massive Typography Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Let's talk <br /> <span className="text-cass-green">Circuit</span> tech.
            </h2>
            <p className="text-lg text-white/70 mb-12 max-w-md">
              Whether you want to partner up, ask a question, or simply say hello, our inbox is always open.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4 group">
                <FiMail className="text-3xl text-cass-green group-hover:scale-110 transition-transform" />
                <a href="mailto:info@ieeecasskerala.org" className="text-xl font-medium hover:text-white transition-colors">info@ieeecasskerala.org</a>
              </div>
              <div className="flex items-center gap-4 group">
                <FiPhone className="text-3xl text-cass-green group-hover:scale-110 transition-transform" />
                <span className="text-xl font-medium">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-4 group">
                <FiMapPin className="text-3xl text-cass-green group-hover:scale-110 transition-transform" />
                <span className="text-xl font-medium">CET, Thiruvananthapuram, Kerala</span>
              </div>
            </div>

            {/* Socials Minimal */}
            <div className="flex gap-4">
              {Object.entries(socialLinks).map(([platform, url]) => {
                const Icon = socialIcons[platform]
                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-cass-green hover:border-cass-green transition-all">
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side: Clean Input Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8 text-white">

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-white/60">Full Name</label>
                <input
                  type="text" required
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-white/20 py-3 text-lg focus:outline-none focus:border-cass-green transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-white/60">Email Address</label>
                <input
                  type="email" required
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-white/20 py-3 text-lg focus:outline-none focus:border-cass-green transition-colors"
                  placeholder="hello@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-wide text-white/60">Message</label>
                <textarea
                  required rows="4"
                  value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-white/20 py-3 text-lg focus:outline-none focus:border-cass-green transition-colors resize-none"
                  placeholder="How can we collaborate?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cass-green text-white py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-cass-dark transition-all flex justify-center items-center gap-2 group"
              >
                Send Request <FiSend className="group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact