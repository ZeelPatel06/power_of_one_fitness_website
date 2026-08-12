import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Dumbbell className="logo-icon" size={28} />
          <span className="logo-text">URBAN <span>ONE</span> FITNESS</span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#footer" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Results</a>
          <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Facility</a>
          <button className="btn-primary nav-cta" onClick={() => window.location.href = "#pricing"}>Join Now</button>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
