import React from 'react';

const GlobalProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      desc: "Browse our wide range of home helpers or event professionals. Filter by category, rating, and availability.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      number: "02",
      title: "Book Your Slot",
      desc: "Select a convenient date and time. Our vendors receive instant notifications of your booking.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      )
    },
    {
      number: "03",
      title: "Get the Job Done",
      desc: "Our verified professional arrives and completes the work with excellence and care.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    {
      number: "04",
      title: "Easy Payment",
      desc: "Pay securely through the platform. Rate your experience and help others choose wisely.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      )
    }
  ];

  return (
    <section className="process-section">
      <style>{processStyles}</style>
      
      <div className="header-area">
        <span className="process-badge">Simple Process</span>
        <h2 className="process-title">How <span className="brand-text">GLOBAL</span> Works</h2>
        <p className="process-subtitle">
          Book trusted services in just a few clicks. Our streamlined process ensures you get the help you need, when you need it.
        </p>
      </div>

      <div className="steps-outer-container">
        {/* The horizontal connecting line */}
        <div className="connecting-line"></div>
        
        <div className="steps-inner-grid">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number-pill">{step.number}</div>
              <div className="step-icon-box">
                {step.icon}
              </div>
              <h3 className="card-title">{step.title}</h3>
              <p className="card-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const processStyles = `
  .process-section {
    padding: 80px 24px;
    background-color: #ffffff;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    text-align: center;
  }

  .process-badge {
    background-color: #FEF9EB;
    color: #C5A059;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
  }

  .process-title {
    font-size: 42px;
    margin: 20px 0 16px 0;
    font-weight: 700;
    color: #111827;
    letter-spacing: -0.02em;
  }

  .brand-text {
    font-weight: 800;
  }

  .process-subtitle {
    color: #6B7280;
    max-width: 600px;
    margin: 0 auto 80px auto;
    line-height: 1.6;
    font-size: 17px;
  }

  .steps-outer-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .connecting-line {
    position: absolute;
    top: 0; /* Matches the vertical center of the pill */
    left: 12%;
    right: 12%;
    height: 1px;
    background-color: #E5E7EB; 
    z-index: 0;
  }

  .steps-inner-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
    z-index: 1;
  }

  .step-card {
    background: #ffffff;
    padding: 60px 24px 40px 24px;
    border-radius: 20px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03);
    border: 1px solid #F3F4F6;
    position: relative;
  }

  .step-number-pill {
    background-color: #C5A059;
    color: white;
    width: 48px;
    height: 28px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid #fff;
  }

  .step-icon-box {
    width: 70px;
    height: 70px;
    background-color: #FFFAF0;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px auto;
  }

  .card-title {
    font-size: 20px;
    margin-bottom: 12px;
    color: #111827;
    font-weight: 700;
  }

  .card-desc {
    font-size: 15px;
    color: #6B7280;
    line-height: 1.6;
  }

  @media (max-width: 1024px) {
    .steps-inner-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
    .connecting-line { display: none; }
    .process-section { padding: 60px 20px; }
  }

  @media (max-width: 640px) {
    .steps-inner-grid { grid-template-columns: 1fr; }
    .process-title { font-size: 32px; }
  }
`;

export default GlobalProcess;