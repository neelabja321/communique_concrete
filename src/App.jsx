import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Products from './components/Products';
import Facilities from './components/Facilities';
import QualityControl from './components/QualityControl';
import Projects from './components/Projects';
import Laboratory from './components/Laboratory';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Units from './components/Units';
import Customers from './components/Customers';
import QCICertificate from './components/QCICertificate';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsAndCondition';

// Home Page Component - All sections together
const HomePage = () => {
  return (
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
  );
};

function App() {
  return (
    <>
      {/* Main container with overflow control */}
      < div className="min-h-screen bg-white overflow-x-hidden" >
        {/* Content wrapper */}
        < div className="relative" >
          {/* Navigation Component - Always visible */}
          < Navbar />

          {/* Routes Configuration */}
          < Routes >
            {/* Main Home Page Route */}
            < Route path="/" element={< HomePage />} />

            {/* Gallery Page Route */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
          </Routes >

          {/* Footer Section - Always visible */}
          < Footer />
        </div >
      </div >
    </>
  );
}

export default App;