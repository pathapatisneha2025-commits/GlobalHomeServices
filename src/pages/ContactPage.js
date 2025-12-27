import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <>
      <style>{`
        body { margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', sans-serif; }

        .contact-wrapper { color: #333; }

        /* Navbar Header */
        .navbar {
          background-color: #1a1a1a;
          padding: 15px 50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }
        .logo { font-weight: bold; font-size: 1.4rem; }
        .logo span { color: #d4af37; }

        .nav-links { display: flex; gap: 25px; align-items: center; }
        .nav-links a { 
          color: #aaa; text-decoration: none; font-size: 0.95rem; transition: 0.3s;
        }
        .nav-links a.active { color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 5px; }
        .nav-links a:hover { color: #fff; }

        .nav-buttons { display: flex; gap: 10px; }
        .btn-vendor { 
          border: 1px solid #d4af37; color: #d4af37; background: transparent;
          padding: 8px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;
          transition: 0.2s;
        }
        .btn-vendor:hover { background: #d4af37; color: #1a1a1a; }

        .btn-book { 
          background: #d4af37; color: white; border: none;
          padding: 8px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;
          transition: 0.2s;
        }
        .btn-book:hover { background: #c5a059; }

        /* Main Layout */
        .main-container {
          max-width: 1200px;
          margin: 60px auto;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 60px;
          padding: 0 40px;
        }

        /* Left Side Info */
        .info-column > p { color: #666; margin-bottom: 40px; line-height: 1.8; font-size: 1.1rem; }

        .contact-item { display: flex; gap: 20px; margin-bottom: 35px; align-items: flex-start; }
        .icon-square {
          width: 50px; height: 50px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .bg-phone { background: #fff8e1; color: #d4af37; }
        .bg-email { background: #eef2ff; color: #4f46e5; }
        .bg-whatsapp { background: #e6fffa; color: #059669; }
        .bg-address { background: #f5f3ff; color: #7c3aed; }

        .item-text h4 { margin: 0 0 4px 0; font-size: 1.15rem; color: #111; font-weight: 600; }
        .item-text p { margin: 0; color: #1a1a1a; font-weight: 500; font-size: 1.05rem; }
        .item-text span { font-size: 0.85rem; color: #888; }

        /* Right Side Form */
        .form-container {
          background: #fdfaf5;
          padding: 30px 25px;
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .form-container h2 { margin: 0 0 30px 0; font-size: 2rem; font-weight: 700; color: #1a1a1a; }

        .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; font-weight: 600; margin-bottom: 8px; font-size: 0.9rem; }

        .form-group input, .form-group textarea {
          width: 100%; padding: 14px 18px; border: 1px solid #e2e8f0;
          border-radius: 10px; font-size: 1rem; color: #333;
          box-sizing: border-box; background-color: #fff;
          transition: 0.3s;
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none; border-color: #d4af37; box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.15);
        }

        .submit-btn {
          width: 100%;
          background: #d4af37;
          color: white; border: none; padding: 16px;
          border-radius: 10px; font-weight: 700; font-size: 1.05rem;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          gap: 10px; margin-top: 10px; transition: 0.25s;
        }

        .submit-btn:hover { background: #c5a059; }

        @media (max-width: 900px) {
          .main-container { grid-template-columns: 1fr; gap: 40px; padding: 0 20px; }
          .input-row { grid-template-columns: 1fr; }
          .form-container { padding: 25px 20px; }
        }
      `}</style>

      <div className="contact-wrapper">
        <main className="main-container">
          {/* Left Side Info */}
          <section className="info-column">
            <p>Reach out to us through any of the following channels. We're here to help!</p>

            <div className="contact-item">
              <div className="icon-square bg-phone">📞</div>
              <div className="item-text">
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
                <span>Mon-Sat, 9am-8pm IST</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-square bg-email">✉️</div>
              <div className="item-text">
                <h4>Email</h4>
                <p>support@global.in</p>
                <span>We reply within 24 hours</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-square bg-whatsapp">💬</div>
              <div className="item-text">
                <h4>WhatsApp</h4>
                <p>+91 98765 43210</p>
                <span>Quick responses</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-square bg-address">📍</div>
              <div className="item-text">
                <h4>Office Address</h4>
                <p>123 Business Park, Sector 5,</p>
                <p>Mumbai, Maharashtra 400001</p>
              </div>
            </div>
          </section>

          {/* Right Side Form */}
          <section className="form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" placeholder="John Doe" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="phone" placeholder="+91 98765 43210" onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" placeholder="you@example.com" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="How can we help?" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea name="message" rows="5" placeholder="Tell us more about your inquiry..." required onChange={handleChange} />
              </div>

              <button type="submit" className="submit-btn">
                Send Message <span>✈</span>
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
