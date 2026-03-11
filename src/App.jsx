import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Events from './components/Events/Events'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Contact />
      </main>
      <footer className="bg-cass-dark text-white py-8">
        <div className="container-custom text-center">
          <p className="text-sm md:text-base">
            © 2026 IEEE Circuits and Systems Society - Kerala Chapter. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Designed with 🤍 for the CASS community
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App