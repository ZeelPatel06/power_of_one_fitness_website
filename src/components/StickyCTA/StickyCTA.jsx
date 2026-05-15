import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import './StickyCTA.css';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-cta-container ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-cta">
        <div className="cta-content">
          <span className="cta-highlight">Limited Time Offer</span>
          <p className="cta-text">Get 7 Days Free Access to Power of One Fitness</p>
        </div>
        <button className="btn-primary cta-btn">
          <Calendar size={20} />
          Claim Trial
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
