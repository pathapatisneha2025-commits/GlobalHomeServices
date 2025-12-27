import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <style>{footerStyles}</style>
      <div className="footer-main">
        {/* Branding Column */}
        <div className="footer-col brand-col">
          <img src="/companylogo.png" alt="Logo" className="footer-logo" />
          <p className="footer-desc">
            India's first dual-purpose booking platform connecting household 
            service providers and event professionals in one simple app.
          </p>
          <div className="social-row">
            <div className="social-icon"><Facebook size={18} /></div>
            <div className="social-icon"><Instagram size={18} /></div>
            <div className="social-icon"><Twitter size={18} /></div>
            <div className="social-icon"><Linkedin size={18} /></div>
          </div>
        </div>

        {/* Home Services */}
        <div className="footer-col">
          <h4 className="col-title">Home Services</h4>
          <ul className="footer-list">
            <li>Kitchen Cleaning</li>
            <li>Floor Cleaning</li>
            <li>Bathroom & Cloth Washing</li>
            <li>Electrical & Plumbing</li>
            <li>Maids & Daily Helpers</li>
          </ul>
        </div>

        {/* Event Services */}
        <div className="footer-col">
          <h4 className="col-title">Event Services</h4>
          <ul className="footer-list">
            <li>DJ & Music</li>
            <li>Photographers</li>
            <li>Dancers & Performers</li>
            <li>Catering Services</li>
            <li>Function Halls & Decorators</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-col">
          <h4 className="col-title">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={20} className="gold-text" />
            <span>123 Business Park, Sector 5, Mumbai, Maharashtra 400001</span>
          </div>
          <div className="contact-item">
            <Phone size={20} className="gold-text" />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <Mail size={20} className="gold-text" />
            <span>support@global.in</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 GLOBAL. All rights reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Become a Vendor</a>
        </div>
      </div>
    </footer>
  );
};

const footerStyles = `
  .footer-container { background-color: #070B14; color: #94A3B8; padding: 80px 40px 20px; }
  .footer-main { 
    max-width: 1280px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1.5fr 1fr 1fr 1.2fr; 
    gap: 40px;
    padding-bottom: 60px;
  }
  .footer-logo { height: 80px; margin-bottom: 24px; }
  .footer-desc { line-height: 1.6; margin-bottom: 24px; max-width: 300px; }
  .social-row { display: flex; gap: 12px; }
  .social-icon { 
    width: 36px; height: 36px; border-radius: 50%; 
    border: 1px solid #EAB308; color: #EAB308;
    display: flex; align-items: center; justify-content: center;
  }
  .col-title { color: #EAB308; font-size: 18px; margin-bottom: 24px; font-weight: 700; }
  .footer-list { list-style: none; padding: 0; }
  .footer-list li { margin-bottom: 12px; cursor: pointer; transition: 0.2s; }
  .footer-list li:hover { color: #EAB308; }
  .contact-item { display: flex; gap: 12px; margin-bottom: 20px; align-items: flex-start; }
  .gold-text { color: #EAB308; flex-shrink: 0; }
  
  .footer-bottom { 
    max-width: 1280px; margin: 0 auto; 
    padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05);
    display: flex; justify-content: space-between; font-size: 14px;
  }
  .bottom-links { display: flex; gap: 24px; }
  .bottom-links a { color: #94A3B8; text-decoration: none; }

  @media (max-width: 1024px) {
    .footer-main { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .footer-main { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
  }
`;

export default Footer;