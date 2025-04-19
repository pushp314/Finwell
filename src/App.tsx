import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Values from './components/Values';
import Workplace from './components/Workplace';
import Greenbull from './components/Greenbull';
import Careers from './components/Careers';
import Timeline from './components/Timeline/Timeline';
import PressRelease from './components/PressRelease/PressRelease';
import Locations from './components/Locations/Locations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Values />
      <Workplace />
      <Greenbull />
      <Careers />
      <Timeline />
      <PressRelease />
      <Locations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;