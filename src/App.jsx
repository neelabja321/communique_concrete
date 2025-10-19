import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MissionVision from './components/MissionVision'
import Products from './components/Products'
import Facilities from './components/Facilities'
import QualityControl from './components/QualityControl'
import Projects from './components/Projects'
import Laboratory from './components/Laboratory'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Units from './components/Units'
import Customers from './components/Customers'
import QCICertificate from './components/QCICertificate'
import Footer from './components/Footer'

function App() {
  return (
    // Main container with overflow control
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Content wrapper */}
      <div className="relative">
        {/* Navigation Component */}
        <Navbar />
        
        <main className="relative">
          {/* Hero Section - Landing page main banner */}
          <Hero />

        {/* Company Information Sections */}
        <About />
        <MissionVision />
        
        {/* Product and Services Sections */}
        <Products />
        <Facilities />
        <QualityControl />
        
        {/* Portfolio and Expertise Sections */}
        <Projects />
        <Laboratory />
        <WhyChooseUs />
        
        {/* Manufacturing Units Section */}
        <Units />
        
        {/* Customers Section */}
        <Customers />
        
        {/* QCI Certificate Section */}
        <QCICertificate />
        
        {/* Contact Information Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
    </div>
  )
}

export default App
