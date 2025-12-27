import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Verified Vendors",
      desc: "All vendors undergo KYC verification and phone checks for your safety.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    {
      title: "Transparent Ratings",
      desc: "Transparent ratings help you choose the best professionals.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    },
    {
      title: "Real-time Notifications",
      desc: "Stay updated with instant booking confirmations and alerts.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      )
    },
    {
      title: "24/7 Customer Support",
      desc: "Our support team is always ready to assist you.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      )
    },
    {
      title: "Secure Payments",
      desc: "Your transactions are protected with industry-standard security.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Punctual Service",
      desc: "Punctual professionals who respect your schedule.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C5A059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="why-choose-us">
      <style>{styles}</style>
      
      <div className="container">
        <div className="top-header">
          <span className="badge">Why Choose Us</span>
          <h2 className="main-heading">Your Trust, Our Priority</h2>
          <p className="description">
            We've built GLOBAL with trust and reliability at its core. Here's why thousands of customers choose us.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper">
                {item.icon}
              </div>
              <div className="text-content">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = `
  .why-choose-us {
    background: radial-gradient(circle at top, #111827 0%, #030712 100%);
    padding: 100px 20px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .top-header {
    text-align: center;
    margin-bottom: 70px;
  }

  .badge {
    background-color: rgba(197, 160, 89, 0.15);
    color: #C5A059;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    text-transform: capitalize;
    display: inline-block;
    border: 1px solid rgba(197, 160, 89, 0.3);
  }

  .main-heading {
    font-size: 44px;
    font-weight: 700;
    margin: 24px 0 16px 0;
    letter-spacing: -0.01em;
  }

  .description {
    color: #9CA3AF;
    font-size: 18px;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .feature-card {
    background: rgba(31, 41, 55, 0.4);
    border: 1px solid rgba(75, 85, 99, 0.2);
    border-radius: 16px;
    padding: 32px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
    transition: all 0.3s ease;
  }

  .feature-card:hover {
    background: rgba(31, 41, 55, 0.6);
    border-color: rgba(197, 160, 89, 0.4);
    transform: translateY(-5px);
  }

  .icon-wrapper {
    background: rgba(197, 160, 89, 0.1);
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(197, 160, 89, 0.2);
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .feature-title {
    font-size: 19px;
    font-weight: 600;
    color: #ffffff;
  }

  .feature-desc {
    font-size: 15px;
    color: #9CA3AF;
    line-height: 1.5;
  }

  @media (max-width: 1024px) {
    .features-grid { grid-template-columns: repeat(2, 1fr); }
    .main-heading { font-size: 36px; }
  }

  @media (max-width: 640px) {
    .features-grid { grid-template-columns: 1fr; }
    .feature-card { padding: 24px; }
    .main-heading { font-size: 32px; }
  }
`;

export default WhyChooseUs;