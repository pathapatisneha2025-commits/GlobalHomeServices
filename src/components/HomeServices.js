import React from 'react';

const HomeServices = () => {
  const services = [
    { title: "Kitchen Cleaning", desc: "Deep cleaning for a spotless kitchen", icon: "🍳" },
    { title: "Floor Cleaning", desc: "Mopping, scrubbing & polishing", icon: "✨" },
    { title: "Bathroom & Cloth Washing", desc: "Complete bathroom & laundry care", icon: "🚿" },
    { title: "Electrical & Plumbing", desc: "Expert repairs & installations", icon: "🔧" },
    { title: "Maids & Daily Helpers", desc: "Trusted domestic help", icon: "👥" },
  ];

  return (
    <div style={styles.container}>
      <style>{cssContent}</style>
      
    

      {/* Hero Section */}
      <header className="hero">
        <span className="badge">Home Helpers</span>
        <h1>Professional Home Services</h1>
        <p>From deep cleaning to daily maintenance, our verified professionals take care of your home.</p>
      </header>

      {/* Services Grid */}
      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-content">
              <div className="icon-box">{service.icon}</div>
              <div className="text-box">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
            <div className="arrow">→</div>
          </div>
        ))}
      </section>
    </div>
  );
};

// CSS Styles
const cssContent = `
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background: #1a1a1a;
    color: white;
    font-family: sans-serif;
  }
  .logo { font-weight: bold; font-size: 20px; color: #d4af37; }
  .nav-links a {
    color: #ccc;
    text-decoration: none;
    margin: 0 15px;
    font-size: 14px;
  }
  .nav-links a.active { color: #d4af37; }
  .nav-buttons .btn-vendor {
    background: transparent;
    border: 1px solid #d4af37;
    color: #d4af37;
    padding: 8px 15px;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
  .nav-buttons .btn-book {
    background: #d4af37;
    border: none;
    color: #1a1a1a;
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .hero {
    text-align: center;
    padding: 60px 20px;
    background: #fff;
    font-family: sans-serif;
  }
  .badge {
    background: #fdf6e3;
    color: #b8860b;
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 12px;
  }
  .hero h1 { font-size: 36px; margin: 20px 0; color: #1a1a1a; }
  .hero p { color: #666; max-width: 500px; margin: 0 auto; line-height: 1.6; }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px 50px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: sans-serif;
  }
  .service-card {
    border: 1px solid #eee;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: box-shadow 0.3s;
    cursor: pointer;
    background: #fff;
  }
  .service-card:hover { box-shadow: 0 10px 20px rgba(0,0,0,0.05); }
  .card-content { display: flex; align-items: flex-start; }
  .icon-box {
    background: #d4af37;
    width: 45px;
    height: 45px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-right: 15px;
  }
  .text-box h3 { margin: 0 0 5px 0; font-size: 18px; color: #333; }
  .text-box p { margin: 0; color: #888; font-size: 14px; }
  .arrow { color: #ccc; font-size: 20px; }
`;

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  }
};

export default HomeServices;