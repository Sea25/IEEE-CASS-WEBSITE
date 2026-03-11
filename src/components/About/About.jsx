import React from 'react'
import { FiTarget, FiEye, FiHeart, FiCpu } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-cass-green mb-4">About IEEE CASS</h2>
          <div className="w-24 h-1 bg-cass-green mx-auto"></div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-cass-gray leading-relaxed">
            The IEEE Circuits and Systems Society (CASS) is the leading organization 
            promoting the advancement of the theory, analysis, design, and implementation 
            of circuits and systems. The Kerala Chapter brings together professionals, 
            researchers, and students from across the state to foster innovation and 
            collaboration in this dynamic field.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vision Card */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-cass-green">
            <div className="w-16 h-16 bg-cass-green/10 rounded-full flex items-center justify-center mb-6">
              <FiEye className="text-3xl text-cass-green" />
            </div>
            <h3 className="text-2xl font-bold text-cass-dark mb-4">Our Vision</h3>
            <p className="text-cass-gray leading-relaxed">
              To be the premier hub for circuits and systems innovation in Kerala, 
              fostering cutting-edge research, education, and industry collaboration 
              that shapes the future of electronics and technology.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-cass-green">
            <div className="w-16 h-16 bg-cass-green/10 rounded-full flex items-center justify-center mb-6">
              <FiTarget className="text-3xl text-cass-green" />
            </div>
            <h3 className="text-2xl font-bold text-cass-dark mb-4">Our Mission</h3>
            <p className="text-cass-gray leading-relaxed">
              • Promote technical excellence through conferences and workshops<br/>
              • Foster collaboration between academia and industry<br/>
              • Support student members through mentorship programs<br/>
              • Advance research in circuits, systems, and signal processing
            </p>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-cass-dark mb-8">
            Key Focus Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'VLSI Design',
              'Analog Circuits',
              'Signal Processing',
              'Embedded Systems',
              'Power Electronics',
              'RF & Microwave',
              'Neural Networks',
              'IoT Systems'
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center group hover:bg-cass-green hover:text-white transition-colors cursor-default">
                <FiCpu className="mx-auto text-2xl text-cass-green group-hover:text-white mb-2" />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About