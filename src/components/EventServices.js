import React from 'react';

const EventServices = () => {
  const eventServices = [
    { title: "DJ & Music", desc: "Set the perfect party mood mood", icon: "🎵" },
    { title: "Photographers", desc: "Capture every moment", icon: "📷" },
    { title: "Dancers & Performers", desc: "Entertainment that wows", icon: "🎭" },
    { title: "Catering Services", desc: "Delicious cuisine for all", icon: "🍽️" },
    { title: "Function Halls & Decorators", desc: "Perfect venues & décor", icon: "🏛️" },
  ];

  return (
    <div className="page-wrapper">
      <style>{eventCss}</style>
      
      {/* Hero Section */}
      <header className="hero-section">
        <span className="event-badge">Event Services</span>
        <h1 className="main-title">Make Every Event Magical</h1>
        <p className="sub-header">
          From intimate gatherings to grand celebrations, find the perfect professionals for your events.
        </p>
      </header>

      {/* Cards Grid */}
      <div className="events-container">
        {eventServices.map((service, index) => (
          <div key={index} className="event-card">
            <div className="card-left">
              <div className="event-icon-box">
                <span className="emoji-icon">{service.icon}</span>
              </div>
              <div className="event-info">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
            <div className="event-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const eventCss = `
  .page-wrapper {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #ffffff;
    min-height: 100vh;
    padding: 40px 20px;
    color: #333;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 50px;
  }

  .event-badge {
    background-color: #e8effd;
    color: #5c85d6;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 500;
  }

  .main-title {
    font-size: 42px;
    font-weight: 800;
    margin: 20px 0 10px 0;
    color: #111;
  }

  .sub-header {
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
    font-size: 18px;
  }

  .events-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .event-card {
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  }

  .event-card:hover {
    box-shadow: 0 12px 24px rgba(0,0,0,0.06);
    transform: translateY(-2px);
  }

  .card-left {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .event-icon-box {
    background-color: #d4af37; /* Match your gold brand color */
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .emoji-icon {
    font-size: 22px;
    color: white;
  }

  .event-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
  }

  .event-info p {
    margin: 4px 0 0 0;
    font-size: 14px;
    color: #777;
  }

  .event-arrow {
    color: #bbb;
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .main-title { font-size: 32px; }
    .events-container { grid-template-columns: 1fr; }
  }
`;

export default EventServices;