import React, { useState } from 'react';

// --- STYLES ---
const styles = `
  .app-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    min-height: 100vh;
    color: #333;
  }

  /* Navbar & Hero (Dark Theme) */
  .navbar {
    background-color: #1a1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    color: white;
  }
  .nav-links span { margin: 0 15px; cursor: pointer; font-size: 0.9rem; }
  .nav-buttons .btn-vendor { border: 1px solid #ffd700; color: #ffd700; padding: 8px 15px; border-radius: 5px; margin-right: 10px; background: none; cursor: pointer; }
  .nav-buttons .btn-book { background-color: #d4af37; border: none; padding: 8px 20px; border-radius: 5px; color: white; font-weight: bold; cursor: pointer; }

  .hero {
    background-color: #14171c;
    color: white;
    text-align: center;
    padding: 60px 20px;
  }
  .hero h1 { color: #d4af37; font-size: 2.5rem; margin-bottom: 5px; }
  .hero p { color: #888; margin-bottom: 25px; }
  .search-input {
    width: 100%;
    max-width: 600px;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid #333;
    background: #1f2229;
    color: white;
  }

  /* Filters (Blue Accent) */
  .filter-container {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding: 25px;
    background: white;
    flex-wrap: wrap;
    border-bottom: 1px solid #eee;
  }
  .filter-btn {
    padding: 8px 18px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #555;
  }
  .filter-btn.active { background-color: #2563eb; color: white; border-color: #2563eb; }

  /* Vendor Grid */
  .vendor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
    padding: 40px 10%;
  }

  /* Vendor Card */
  .vendor-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    position: relative;
  }
  .card-image { height: 220px; position: relative; }
  .card-image img { width: 100%; height: 100%; object-fit: cover; }
  
  /* "Currently Booked" Overlay */
  .booked-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .booked-badge { background: #ef4444; color: white; padding: 6px 15px; border-radius: 20px; font-weight: bold; font-size: 0.8rem; }

  .card-content { padding: 20px; position: relative; }
  .rating { position: absolute; top: 20px; right: 20px; color: #2563eb; background: #eff6ff; padding: 2px 8px; border-radius: 6px; font-weight: bold; }
  .vendor-name { font-size: 1.2rem; font-weight: bold; margin: 0; color: #1a1a1a; }
  .vendor-service { color: #666; font-size: 0.9rem; margin: 4px 0; }
  .location { color: #888; font-size: 0.85rem; margin: 10px 0; }
  
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #f0f0f0;
  }
  .price { font-weight: bold; font-size: 1.1rem; color: #1a1a1a; }
  .price span { color: #2563eb; }
  .btn-book-blue { background-color: #2563eb; color: white; border: none; padding: 10px 22px; border-radius: 6px; font-weight: bold; cursor: pointer; }
`;

// --- DATA ---
const EVENT_VENDORS = [
  { id: 1, name: "DJ Rhythm", service: "DJ & Sound System", location: "All Mumbai", reviews: 245, rating: 4.9, price: "15,000", unit: "event", category: "DJ & Music", isBooked: false, img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=400" },
  { id: 2, name: "Capture Moments Studio", service: "Wedding Photography", location: "Mumbai & Pune", reviews: 312, rating: 4.8, price: "25,000", unit: "day", category: "Photographers", isBooked: false, img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=400" },
  { id: 3, name: "Bollywood Beats Dance", service: "Dance Troupe", location: "Mumbai", reviews: 89, rating: 4.7, price: "20,000", unit: "show", category: "Dancers & Performers", isBooked: false, img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400" },
  { id: 4, name: "Royal Feast Caterers", service: "Multi-cuisine Catering", location: "Thane, Mumbai", reviews: 156, rating: 4.9, price: "800", unit: "plate", category: "Catering", isBooked: false, img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=400" },
  { id: 5, name: "Grand Celebration Hall", service: "Banquet Hall", location: "Vashi, Navi Mumbai", reviews: 120, rating: 4.6, price: "50,000", unit: "day", category: "Venues & Decorators", isBooked: true, img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=400" },
  { id: 6, name: "Elegant Decorators", service: "Event Decoration", location: "Mumbai", reviews: 92, rating: 4.8, price: "30,000", unit: "event", category: "Venues & Decorators", isBooked: false, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=400" },
];

const CATEGORIES = [
  { name: "All Services", icon: "♫" },
  { name: "DJ & Music", icon: "♪" },
  { name: "Photographers", icon: "📷" },
  { name: "Dancers & Performers", icon: "🎭" },
  { name: "Catering", icon: "🍴" },
  { name: "Venues & Decorators", icon: "🏛️" }
];

// --- COMPONENT ---
export default function EventServicesPage() {
  const [filter, setFilter] = useState("All Services");

  const filteredData = filter === "All Services" 
    ? EVENT_VENDORS 
    : EVENT_VENDORS.filter(v => v.category === filter);

  return (
    <div className="app-container">
      <style>{styles}</style>
      
      

      {/* Hero Section */}
      <section className="hero">
        <h1>Event Services</h1>
        <p>Make every celebration magical with our verified event professionals</p>
        <input type="text" className="search-input" placeholder="Search for services..." />
      </section>

      {/* Category Filters */}
      <div className="filter-container">
        {CATEGORIES.map(cat => (
          <button 
            key={cat.name} 
            className={`filter-btn ${filter === cat.name ? 'active' : ''}`}
            onClick={() => setFilter(cat.name)}
          >
            <span>{cat.icon}</span> {cat.name}
          </button>
        ))}
      </div>

      <div style={{ padding: '20px 10% 0', fontWeight: '500', color: '#666' }}>
        {filteredData.length} vendors found
      </div>

      {/* Vendor Cards Grid */}
      <div className="vendor-grid">
        {filteredData.map(vendor => (
          <div key={vendor.id} className="vendor-card">
            <div className="card-image">
              <img src={vendor.img} alt={vendor.name} />
              {vendor.isBooked && (
                <div className="booked-overlay">
                  <div className="booked-badge">Currently Booked</div>
                </div>
              )}
            </div>
            
            <div className="card-content">
              <div className="rating">★ {vendor.rating}</div>
              <h3 className="vendor-name">{vendor.name}</h3>
              <p className="vendor-service">{vendor.service}</p>
              <p className="location">📍 {vendor.location} ({vendor.reviews} reviews)</p>
              
              <div className="card-footer">
                <div className="price"><span>₹{vendor.price}</span> per {vendor.unit}</div>
                <button className="btn-book-blue">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}