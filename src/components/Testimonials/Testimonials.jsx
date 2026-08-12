import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex M.",
      role: "Member for 2 years",
      content: "Joining URBAN ONE FITNESS was the best decision I ever made. The trainers push you to limits you didn't know you had, and the community is incredibly supportive.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah T.",
      role: "Member for 6 months",
      content: "The equipment here is top-notch. I've been to many premium gyms, but nothing compares to the atmosphere and raw energy of this place.",
      rating: 5
    },
    {
      id: 3,
      name: "David K.",
      role: "Member for 1 year",
      content: "Finally, a gym that takes fitness as seriously as I do. The functional training area is perfectly equipped, and the 24/7 access fits my schedule perfectly.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Success <span>Stories</span></h2>
          <p className="section-subtitle">Don't just take our word for it. Hear from the people who have transformed their lives at URBAN ONE FITNESS.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map(review => (
            <div key={review.id} className="testimonial-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="var(--accent-primary)" color="var(--accent-primary)" />
                ))}
              </div>
              <p className="testimonial-content">"{review.content}"</p>
              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
