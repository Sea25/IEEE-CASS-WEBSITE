import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { events } from '../../data/dummyData'

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')
  const activeEvents = activeTab === 'upcoming' ? events.upcoming : events.past

  return (
    <section id="events" className="py-20 md:py-32 bg-cass-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-cass-dark mb-8">
            Events Timeline
          </h2>

          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all ${activeTab === 'upcoming'
                ? 'bg-cass-green text-white shadow'
                : 'text-cass-gray hover:text-cass-dark'
                }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-2.5 rounded-md font-semibold text-sm transition-all ${activeTab === 'past'
                ? 'bg-cass-dark text-white shadow'
                : 'text-cass-gray hover:text-cass-dark'
                }`}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cass-green via-cass-green/50 to-transparent transform md:-translate-x-1/2 rounded-full" />

          <div className="space-y-12 md:space-y-24 relative mt-10">
            {activeEvents.map((event, index) => {
              const isEven = index % 2 === 0
              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full">


                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-cass-green rounded-full z-10 shadow mt-6 md:mt-0" />


                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-12 lg:pr-16 md:text-right' : 'md:pl-12 lg:pl-16 md:ml-auto'}`}
                  >
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group overflow-hidden relative">

                      <div className={`absolute top-0 bottom-0 w-1 bg-cass-green transform origin-top transition-transform duration-300 scale-y-0 group-hover:scale-y-100 ${isEven ? 'right-0' : 'left-0'}`}></div>

                      <div className={`flex items-center gap-3 mb-4 text-xs font-bold text-cass-green tracking-wide uppercase ${isEven ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1.5"><FiCalendar size={14} /> {event.date}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                        <span className="flex items-center gap-1.5"><FiMapPin size={14} /> {event.location}</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-cass-dark mb-3">
                        {event.title}
                      </h3>
                      <p className="text-cass-gray text-sm md:text-base leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <button className="text-cass-green font-semibold text-sm hover:text-cass-dark transition-colors inline-flex items-center gap-1">
                        {activeTab === 'upcoming' ? 'Register Now' : 'Read Recap'} &rarr;
                      </button>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Events