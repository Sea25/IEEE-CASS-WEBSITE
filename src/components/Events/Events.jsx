import React, { useState } from 'react'
import { FiCalendar, FiMapPin, FiClock, FiUsers } from 'react-icons/fi'
import { events } from '../../data/dummyData'

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  return (
    <section id="events" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-cass-green mb-4">Events & Activities</h2>
          <div className="w-24 h-1 bg-cass-green mx-auto mb-4"></div>
          <p className="text-cass-gray max-w-2xl mx-auto">
            Join us for technical talks, workshops, conferences, and networking opportunities
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-cass-green text-white'
                  : 'text-cass-gray hover:text-cass-green'
              }`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Events
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-cass-green text-white'
                  : 'text-cass-gray hover:text-cass-green'
              }`}
              onClick={() => setActiveTab('past')}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {(activeTab === 'upcoming' ? events.upcoming : events.past).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-cass-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {activeTab === 'upcoming' ? 'Upcoming' : 'Past Event'}
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cass-dark mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-cass-gray">
                    <FiCalendar className="mr-2 text-cass-green" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-cass-gray">
                    <FiMapPin className="mr-2 text-cass-green" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-cass-gray mb-4">
                  {event.description}
                </p>

                {activeTab === 'upcoming' && (
                  <button className="w-full bg-cass-green text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors font-semibold">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events