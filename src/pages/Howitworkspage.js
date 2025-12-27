import React from 'react';

const HowItWorks = () => {
  return (
    <div style={styles.container}>
      {/* --- INLINE STYLES --- */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
          
          body { margin: 0; font-family: 'Inter', sans-serif; background-color: #ffffff; color: #333; }
          .navbar { background: #111; padding: 1rem 5%; display: flex; justify-content: space-between; align-items: center; }
          .nav-links { display: flex; gap: 20px; align-items: center; }
          .nav-links a { color: #fff; text-decoration: none; font-size: 14px; }
          .nav-links a.active { color: #d4a017; font-weight: bold; }
          .btn-gold { background: #d4a017; color: white; padding: 10px 20px; border-radius: 8px; border: none; font-weight: 600; cursor: pointer; }
          .btn-outline { border: 1px solid #d4a017; color: #d4a017; background: transparent; padding: 8px 16px; border-radius: 8px; cursor: pointer; }

          .hero { background: #1a1a1d; color: white; text-align: center; padding: 80px 20px; }
          .hero h1 { font-size: 42px; margin: 0; color: #d4a017; text-transform: uppercase; letter-spacing: 2px; }
          .hero p { opacity: 0.8; max-width: 600px; margin: 20px auto; line-height: 1.6; }

          .steps-section { padding: 60px 10%; position: relative; }
          .step-item { display: flex; gap: 40px; margin-bottom: 50px; position: relative; }
          .step-number { 
            background: #d4a017; color: white; min-width: 60px; height: 60px; 
            border-radius: 12px; display: flex; align-items: center; justify-content: center; 
            font-weight: bold; font-size: 20px; z-index: 2;
          }
          .step-line { 
            position: absolute; left: 30px; top: 60px; bottom: -60px; 
            width: 2px; background: #eee; z-index: 1;
          }
          .step-content h3 { margin-top: 0; display: flex; align-items: center; gap: 10px; font-size: 22px; }
          .step-content p { color: #666; line-height: 1.6; max-width: 600px; }

          .trust-section { background: #f9f9f9; padding: 80px 10%; text-align: center; }
          .trust-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 40px; }
          .trust-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
          .trust-card i { font-size: 30px; color: #d4a017; margin-bottom: 15px; display: block; }

          .cta-section { padding: 80px 10%; text-align: center; }
          .cta-buttons { display: flex; justify-content: center; gap: 20px; margin-top: 30px; }
          .btn-large { padding: 15px 30px; border-radius: 12px; font-size: 16px; display: flex; align-items: center; gap: 10px; border: none; cursor: pointer; color: white; }
          .btn-home { background: #d4a017; }
          .btn-event { background: #2563eb; }
        `}
      </style>

     

      {/* --- HERO SECTION --- */}
      <section className="hero">
        <h1>GLOBAL</h1>
        <p>Booking trusted services has never been easier. Here's how you can get started in just a few simple steps.</p>
      </section>

      {/* --- STEPS SECTION --- */}
      <section className="steps-section">
        {[
          { id: '01', title: 'Browse & Choose', desc: 'Explore our wide range of services. Filter by category, ratings, and availability to find the perfect professional for your needs.', icon: '🔍' },
          { id: '02', title: 'Book Your Slot', desc: 'Select a convenient date and time that works for you. Our vendors receive instant notifications and confirm within minutes.', icon: '📅' },
          { id: '03', title: 'Get Service', desc: 'Our verified professional arrives at your location on time and completes the work with excellence and care.', icon: '✅' },
          { id: '04', title: 'Pay & Rate', desc: 'Pay securely through the platform after service completion. Rate your experience to help others.', icon: '💳' },
        ].map((step, index, array) => (
          <div className="step-item" key={step.id}>
            <div className="step-number">{step.id}</div>
            {index !== array.length - 1 && <div className="step-line" />}
            <div className="step-content">
              <h3><span>{step.icon}</span> {step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* --- WHY CUSTOMERS LOVE US --- */}
      <section className="trust-section">
        <h2>Why Customers Love Us</h2>
        <p>Built with your convenience and safety in mind</p>
        <div className="trust-grid">
          <div className="trust-card">
            <i>📱</i>
            <h4>Easy Booking</h4>
            <p>Book services in just a few taps from our website or app.</p>
          </div>
          <div className="trust-card">
            <i>🛡️</i>
            <h4>Verified Professionals</h4>
            <p>All vendors undergo KYC verification and background checks.</p>
          </div>
          <div className="trust-card">
            <i>⏰</i>
            <h4>On-Time Guarantee</h4>
            <p>Professionals arrive on time or get a discount on your service.</p>
          </div>
          <div className="trust-card">
            <i>⭐</i>
            <h4>Quality Assured</h4>
            <p>Rated professionals with transparent reviews from real customers.</p>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of happy customers who trust GLOBAL for all their service needs.</p>
        <div className="cta-buttons">
          <button className="btn-large btn-home">Explore Home Services <span>→</span></button>
          <button className="btn-large btn-event">Explore Event Services <span>→</span></button>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
  }
};

export default HowItWorks;