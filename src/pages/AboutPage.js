import React from 'react';
import { FaBullseye, FaEye, FaHandsHelping, FaAward, FaUserCheck } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Internal CSS Styles */}
      <style>{`
        .about-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #fff;
        }

        /* Hero Section */
        .hero {
          background-color: #1a1a1d;
          color: white;
          text-align: center;
          padding: 80px 20px;
        }

        .hero img { width: 80px; margin-bottom: 20px; }
        .hero h1 { font-size: 2.5rem; margin-bottom: 15px; }
        .hero h1 span { color: #d4af37; }
        .hero p { max-width: 600px; margin: 0 auto; color: #aaa; }

        /* Mission & Vision Cards */
        .mission-vision {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 60px 5%;
          flex-wrap: wrap;
        }

        .card {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          padding: 40px;
          border-radius: 15px;
          border: 1px solid #eee;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 24px;
        }

        .mission-icon { background-color: #fff9e6; color: #d4af37; }
        .vision-icon { background-color: #eef2ff; color: #4f46e5; }

        /* Stats Section */
        .stats-section {
          text-align: center;
          padding: 80px 5%;
          background-color: #fcfcfc;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-top: 50px;
        }

        .stat-item h2 { color: #d4af37; font-size: 3rem; margin: 0; }
        .stat-item p { color: #666; font-weight: 500; }

        /* Core Values */
        .values-section {
          text-align: center;
          padding: 80px 5%;
        }

        .values-grid {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 50px;
          flex-wrap: wrap;
        }

        .value-card {
          width: 250px;
          text-align: center;
        }

        .value-icon { font-size: 30px; margin-bottom: 15px; color: #d4af37; }
      `}</style>

      {/* Hero Section */}
      <header className="hero">
        <div className="logo-placeholder">
          <img 
            src="/companylogo.png"
            alt="GLOBAL Logo"
            style={{ width: '100px', height: 'auto', marginBottom: '20px' }}
          />
        </div>
        <h1>About <span>GLOBAL</span></h1>
        <p>India's first dual-purpose booking platform connecting household service providers and event professionals in one simple app.</p>
      </header>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <div className="icon-box mission-icon"><FaBullseye size={24} /></div>
          <h3>Our Mission</h3>
          <p>To provide a seamless, trustworthy platform that connects customers with verified service professionals for all their home and event needs. We strive to make quality services accessible to everyone while empowering local professionals to grow their businesses.</p>
        </div>
        <div className="card">
          <div className="icon-box vision-icon"><FaEye size={24} /></div>
          <h3>Our Vision</h3>
          <p>To become India's most trusted and comprehensive service marketplace, where every household need and celebration is just a click away. We envision a future where quality service is available to all, from home to celebration.</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <h3>Why Choose GLOBAL?</h3>
        <p>We're not just another booking platform. We're your trusted partner for all services.</p>
        <div className="stats-grid">
          <div className="stat-item">
            <h2>10K+</h2>
            <p>Verified Vendors</p>
          </div>
          <div className="stat-item">
            <h2>50K+</h2>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h2>100+</h2>
            <p>Cities Covered</p>
          </div>
          <div className="stat-item">
            <h2>4.8</h2>
            <p>Average Rating</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon"><FaHandsHelping size={30} /></div>
            <h4>Trust First</h4>
            <p>Every vendor is verified through KYC and background checks for your safety.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaAward size={30} /></div>
            <h4>Quality Service</h4>
            <p>We partner only with professionals who deliver excellence consistently.</p>
          </div>
          <div className="value-card">
            <div className="value-icon"><FaUserCheck size={30} /></div>
            <h4>Customer Focus</h4>
            <p>Your satisfaction is our priority with 24/7 support and easy refunds.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
