import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="cta-wrapper">
      <style>{ctaStyles}</style>
      <div className="cta-grid">
        
        {/* Left Card: Customer */}
        <div className="cta-card gold-gradient">
          <div className="cta-content">
            <h2 className="cta-title">Need Help Today?</h2>
            <p className="cta-description">
              Book trusted home helpers or event professionals in minutes. 
              Experience hassle-free service booking.
            </p>
            <button className="cta-btn btn-solid-blue">
              Book a Service <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Card: Professional */}
        <div className="cta-card blue-gradient">
          <div className="cta-content">
            <div className="cta-badge">
              <Briefcase size={14} />
              <span>Earn More</span>
            </div>
            <h2 className="cta-title">Are You a Professional?</h2>
            <p className="cta-description">
              Join GLOBAL as a vendor and grow your business. 
              Get access to thousands of customers in your area.
            </p>
            <button className="cta-btn btn-outline-white">
              Become a Vendor <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

const ctaStyles = `
  .cta-wrapper {
    padding: 40px 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
  }

  .cta-grid {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .cta-card {
    border-radius: 40px; /* Highly rounded as per screenshot */
    padding: 45px 50px; /* Reduced vertical padding */
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    min-height: 280px; /* Reduced from 380px to match screenshot height */
    position: relative;
    overflow: hidden;
  }

  .gold-gradient {
    background: linear-gradient(135deg, #dfa927 0%, #a67c13 100%);
    color: #fff;
  }

  .blue-gradient {
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: #fff;
  }

  .cta-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(255, 255, 255, 0.2);
    padding: 5px 14px;
    border-radius: 100px;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 12px;
    width: fit-content;
  }

  .cta-title {
    font-size: 38px; /* Slightly smaller to fit better in a shorter card */
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .cta-description {
    font-size: 17px;
    line-height: 1.4;
    margin-bottom: 24px;
    opacity: 0.9;
    max-width: 420px;
  }

  .cta-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    width: fit-content;
  }

  .btn-solid-blue {
    background-color: #2563eb;
    color: white;
    border: none;
  }

  .btn-outline-white {
    background: transparent;
    color: white;
    border: 1.5px solid white;
  }

  @media (max-width: 1024px) {
    .cta-grid { grid-template-columns: 1fr; }
    .cta-card { padding: 35px; min-height: auto; border-radius: 30px; }
    .cta-title { font-size: 30px; }
  }
`;

export default CtaSection;