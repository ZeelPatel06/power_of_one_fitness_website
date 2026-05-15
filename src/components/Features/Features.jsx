import React from 'react';
import { Users, Dumbbell, TrendingUp } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Users size={40} />,
      title: "Elite Trainers",
      description: "Work with certified professionals dedicated to pushing you beyond your perceived limits."
    },
    {
      id: 2,
      icon: <Dumbbell size={40} />,
      title: "Premium Equipment",
      description: "Access top-tier strength and conditioning equipment designed for serious results."
    },
    {
      id: 3,
      icon: <TrendingUp size={40} />,
      title: "Proven Results",
      description: "Join a community of high-performers. Our data-driven approach guarantees transformation."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Why Choose <span>Power of One Fitness</span></h2>
          <p className="section-subtitle">We don't just provide equipment; we provide the environment, expertise, and community you need to build your best self.</p>
        </div>
        
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
