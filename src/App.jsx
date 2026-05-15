import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Showcase from './components/Showcase/Showcase';
import Testimonials from './components/Testimonials/Testimonials';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import StickyCTA from './components/StickyCTA/StickyCTA';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
