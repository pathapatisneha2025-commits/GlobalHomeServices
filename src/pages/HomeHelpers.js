import React, { useState } from 'react';

// --- STYLES (Inline CSS for single-file demonstration) ---
const styles = `
  .app-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    min-height: 100vh;
    color: #333;
  }

  /* Header */
  .navbar {
    background-color: #1a1a1a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    color: white;
  }
  .nav-links span { margin: 0 15px; cursor: pointer; font-weight: 500; }
  .nav-buttons .btn-vendor { border: 1px solid #ffd700; color: #ffd700; padding: 8px 15px; border-radius: 5px; margin-right: 10px; background: none; }
  .nav-buttons .btn-book { background-color: #d4af37; border: none; padding: 8px 20px; border-radius: 5px; color: white; font-weight: bold; }

  /* Hero Section */
  .hero {
    background-color: #14171c;
    color: white;
    text-align: center;
    padding: 60px 20px;
  }
  .hero h1 { color: #d4af37; font-size: 2.5rem; margin-bottom: 10px; }
  .search-container {
    max-width: 600px;
    margin: 30px auto 0;
    position: relative;
  }
  .search-input {
    width: 100%;
    padding: 15px 45px;
    border-radius: 8px;
    border: 1px solid #333;
    background: #1f2229;
    color: white;
  }

  /* Filters */
  .filter-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 30px;
    background: white;
    flex-wrap: wrap;
  }
  .filter-btn {
    padding: 10px 20px;
    border: 1px solid #e0e0e0;
    border-radius: 20px;
    background: white;
    cursor: pointer;
    transition: 0.3s;
  }
  .filter-btn.active { background-color: #d4af37; color: white; border-color: #d4af37; }

  /* Grid Layout */
  .vendor-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 25px;
    padding: 40px 10%;
  }

  /* Vendor Card */
  .vendor-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: transform 0.2s;
  }
  .card-image { height: 200px; background-color: #ddd; overflow: hidden; }
  .card-image img { width: 100%; height: 100%; object-fit: cover; }
  .card-content { padding: 20px; position: relative; }
  .rating { position: absolute; top: 20px; right: 20px; background: #fff8e1; color: #b8860b; padding: 2px 8px; border-radius: 5px; font-weight: bold; }
  .vendor-name { font-size: 1.2rem; font-weight: bold; margin: 0; }
  .vendor-service { color: #666; margin: 5px 0; }
  .location { color: #888; font-size: 0.9rem; display: flex; align-items: center; gap: 5px; margin: 10px 0; }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    border-top: 1px solid #eee;
    padding-top: 15px;
  }
  .price { font-weight: bold; font-size: 1.1rem; }
  .price span { color: #d4af37; }
  .book-now-btn { background-color: #d4af37; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer; }
`;

// --- DATA ---
const VENDORS = [
  { id: 1, name: "Priya Sharma", service: "Kitchen Cleaning", location: "Andheri, Mumbai", reviews: 128, rating: 4.9, price: 500, category: "Kitchen Cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6954?auto=format&fit=crop&w=400" },
  { id: 2, name: "Rajesh Kumar", service: "Floor Cleaning & Mopping", location: "Bandra, Mumbai", reviews: 95, rating: 4.8, price: 400, category: "Floor Cleaning", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400" },
  { id: 3, name: "Sunita Devi", service: "Bathroom & Cloth Washing", location: "Powai, Mumbai", reviews: 73, rating: 4.7, price: 450, category: "Bathroom & Washing", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400" },
  { id: 4, name: "Amit Electricals", service: "Electrical Repairs", location: "Thane, Mumbai", reviews: 210, rating: 4.9, price: 600, category: "Electrical & Plumbing", img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=400" },
];

const CATEGORIES = ["All Services", "Kitchen Cleaning", "Floor Cleaning", "Bathroom & Washing", "Electrical & Plumbing", "Maids & Helpers"];

// --- COMPONENT ---
export default function HomeHelpers() {
  const [filter, setFilter] = useState("All Services");

  const filteredVendors = filter === "All Services" 
    ? VENDORS 
    : VENDORS.filter(v => v.category === filter);

  return (
    <div className="app-container">
      <style>{styles}</style>
      
    

      {/* Hero Section */}
      <section className="hero">
        <h1>Home Helpers</h1>
        <p>Book trusted professionals for all your home service needs</p>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search for services..." />
        </div>
      </section>

      {/* Category Filters */}
      <div className="filter-container">
        {CATEGORIES.map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div style={{ padding: '0 10%', fontWeight: 'bold' }}>
        {filteredVendors.length} vendors found
      </div>

      {/* Vendor Grid */}
      <div className="vendor-grid">
        {filteredVendors.map(vendor => (
          <div key={vendor.id} className="vendor-card">
            <div className="card-image">
              <img src={vendor.img} alt={vendor.name} />
            </div>
            <div className="card-content">
              <div className="rating">⭐ {vendor.rating}</div>
              <h3 className="vendor-name">{vendor.name}</h3>
              <p className="vendor-service">{vendor.service}</p>
              <div className="location">📍 {vendor.location} ({vendor.reviews} reviews)</div>
              
              <div className="card-footer">
                <div className="price"><span>₹{vendor.price}</span> per session</div>
                <button className="book-now-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}