import React from 'react';
import {MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          {/* Inquiry Form Callout */}
          <div className="footer-inquiry">
            <h3>Ready to start your journey?</h3>
            <p>Fill out our inquiry form and a coach will get back to you within 24 hours.</p>
            <a 
              href="#pricing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Submit Inquiry <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="footer-main">
          {/* Brand & Social */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              URBAN <span>ONE</span> FITNESS
            </div>
            <p className="footer-desc">
              Premium fitness facility dedicated to helping you break your limits and achieve your true potential.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/power_of_one_fitnes/?g=5" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={24} />
              </a>
              <a href="https://www.facebook.com/Powerofonefitnessss/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={20} />
                <span>Vimawala Arcade, 3rd Floor, Anand-Vidyanagar Road., near Big Bazar, Anand, Gujarat 388120</span>
              </li>
              <li>
                <Phone size={20} />
                <span>+91 9574357480</span>
              </li>
              <li>
                <Mail size={20} />
                <span>[EMAIL_ADDRESS]</span>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="footer-col map-col">
            <h4>Find Us</h4>
            <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.710758008068!2d72.9437028!3d22.5525053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e7fa58ac75b%3A0xfe05277cd7054958!2sPower%20of%20One%20Fitness!5e0!3m2!1sen!2sin!4v1778850786109!5m2!1sen!2sin" 
                width="100%" height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>  
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} URBAN ONE FITNESS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
