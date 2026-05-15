import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "49",
      period: "per month",
      features: [
        "Access to main gym floor",
        "Free weights area",
        "Locker room access",
        "1 Free guest pass per month"
      ],
      isPopular: false
    },
    {
      id: 2,
      name: "Pro",
      price: "89",
      period: "per month",
      features: [
        "All Basic features",
        "Group fitness classes",
        "Functional training zone",
        "Sauna & Recovery area",
        "1 PT session per month"
      ],
      isPopular: true
    },
    {
      id: 3,
      name: "Elite",
      price: "149",
      period: "per month",
      features: [
        "All Pro features",
        "Unlimited PT sessions",
        "Personalized nutrition plan",
        "VIP locker & laundry service",
        "Exclusive Elite-only hours"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">Membership <span>Plans</span></h2>
          <p className="section-subtitle">Choose the perfect plan to match your fitness goals. No hidden fees, no long-term contracts.</p>
        </div>

        <div className="pricing-grid">
          {plans.map(plan => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-card-header">
                <h3>{plan.name}</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                </div>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <Check size={20} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
