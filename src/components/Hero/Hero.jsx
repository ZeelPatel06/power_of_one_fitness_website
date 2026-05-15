import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Premium Gym in City
          </div>
          <h1 className="hero-title">
            Unleash Your <span>True Potential</span>
          </h1>
          <p className="hero-subtitle">
            Experience state-of-the-art equipment, elite coaching, and a community that pushes you to break your limits. Start your fitness journey today.
          </p>
          <div className="hero-actions">
            <a href="https://maps.app.goo.gl/UbiFaiR7xCN3b3Jy8" target='_blank' rel='noopener noreferrer' className="btn-primary">
              Visit Today <ChevronRight size={20} />
            </a>
            <a href="https://www.instagram.com/power_of_one_fitnes/reel/C50gY8CsORz/" target='_blank' rel='noopener noreferrer' className="btn-secondary play-btn">
              <Play size={20} fill="currentColor" /> Watch Tour
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>5k+</h3>
              <p>Active Members</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Expert Trainers</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Facility Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
