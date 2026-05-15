import React from 'react';
import './Showcase.css';

const Showcase = () => {
  return (
    <section className="showcase" id="showcase">
      <div className="container">
        <div className="showcase-header">
          <h2 className="section-title">The <span>Facility</span></h2>
          <p className="section-subtitle">Take a look inside our state-of-the-art training facility. Equipped with everything you need to succeed.</p>
        </div>

        <div className="showcase-grid">
          <div className="showcase-item large">
            <img src="/assets/gym_image_3.jpeg" alt="Person deadlifting in modern gym" />
            <div className="showcase-overlay">
              <h3>Free Weights Zone</h3>
            </div>
          </div>
          <div className="showcase-item">
            <img src="/assets/showcase-2.png" alt="Kettlebells and dumbbells close up" />
            <div className="showcase-overlay">
              <h3>Functional Training</h3>
            </div>
          </div>
          <div className="showcase-item">
            <img src="/assets/gym_image_1.jpeg" alt="Kettlebells and dumbbells close up" />
            <div className="showcase-overlay">
              <h3>Training with Fun</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
