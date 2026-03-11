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
    </div>
  )
}

export default App