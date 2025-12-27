import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const closeMobileMenu = () => setMobileOpen(false);

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "linear-gradient(180deg, #0b0f14, #05070a)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 40px",
      borderBottom: "1px solid rgba(255, 215, 0, 0.15)",
    },
    logo: { height: 80 },
    menu: {
      display: "flex",
      gap: "28px",
      alignItems: "center",
    },
    menuMobile: {
      flexDirection: "column",
      gap: "14px",
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      background: "linear-gradient(180deg, #0b0f14, #05070a)",
      padding: "20px",
      borderBottom: "1px solid rgba(255, 215, 0, 0.15)",
      zIndex: 1000,
    },
    menuItem: {
      color: "#cfd3dc",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: 500,
      cursor: "pointer",
      position: "relative",
    },
    menuItemActive: { color: "#f5c542" },
    dropdown: { position: "relative" },
    dropdownMenu: {
      position: "absolute",
      top: "34px",
      left: 0,
      background: "#0d1117",
      border: "1px solid rgba(255, 215, 0, 0.15)",
      borderRadius: "8px",
      display: "flex",
      flexDirection: "column",
      minWidth: "160px",
      zIndex: 1001,
    },
    dropdownItem: {
      padding: "10px 14px",
      fontSize: "14px",
      color: "#cfd3dc",
      textDecoration: "none",
    },
    actions: { display: "flex", gap: "14px" },
    btnOutline: {
      padding: "8px 16px",
      border: "1px solid #f5c542",
      color: "#f5c542",
      borderRadius: "999px",
      textDecoration: "none",
      fontSize: "14px",
    },
    btnPrimary: {
      padding: "8px 18px",
      background: "linear-gradient(135deg, #f5c542, #d4a017)",
      color: "#000",
      borderRadius: "999px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
    },
  };

  return (
    <header style={styles.navbar}>
      {/* Logo */}
      <div>
        <img src="/companylogo.png" alt="GLOBAL" style={styles.logo} />
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        {mobileOpen ? <FiX size={28} color="#f5c542" /> : <FiMenu size={28} color="#f5c542" />}
      </div>

      {/* Menu */}
      <nav className={`menu ${mobileOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          className={({ isActive }) => (isActive ? "menu-item active" : "menu-item")}
        >
          Home
        </NavLink>

        <div
          className="dropdown"
          onMouseEnter={() => !mobileOpen && setDropdownOpen(true)}
          onMouseLeave={() => !mobileOpen && setDropdownOpen(false)}
        >
          <span className="menu-item">Services ▾</span>
          {(dropdownOpen || mobileOpen) && (
            <div className="dropdown-menu">
              <NavLink to="/homehelper" onClick={closeMobileMenu} className="dropdown-item">
                HomeServices
              </NavLink>
              <NavLink to="/eventservices" onClick={closeMobileMenu} className="dropdown-item">
                EventServices
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/howitworks" onClick={closeMobileMenu} className="menu-item">
          How It Works
        </NavLink>
        <NavLink to="/about" onClick={closeMobileMenu} className="menu-item">
          About Us
        </NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu} className="menu-item">
          Contact
        </NavLink>

        {mobileOpen && (
          <div className="mobile-actions">
            <Link to="/vendor-login" className="btn-outline" onClick={closeMobileMenu}>
              Vendor Login
            </Link>
            <Link to="/book-now" className="btn-primary" onClick={closeMobileMenu}>
              Book Now
            </Link>
          </div>
        )}
      </nav>

      {/* Desktop actions */}
      <div className="desktop-actions">
        <Link to="/vendor-login" className="btn-outline">
          Vendor Login
        </Link>
        <Link to="/book-now" className="btn-primary">
          Book Now
        </Link>
      </div>

      {/* CSS */}
      <style>{`
        .hamburger {
          display: none;
          cursor: pointer;
        }
        .menu {
          display: flex;
          gap: 28px;
          align-items: center;
        }
        .menu-item {
          color: #cfd3dc;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          position: relative;
        }
        .menu-item.active {
          color: #f5c542;
        }
        .dropdown-menu {
          position: absolute;
          top: 34px;
          left: 0;
          background: #0d1117;
          border: 1px solid rgba(255, 215, 0, 0.15);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          min-width: 160px;
          z-index: 1001;
        }
        .dropdown-item {
          padding: 10px 14px;
          font-size: 14px;
          color: #cfd3dc;
          text-decoration: none;
        }
        .desktop-actions {
          display: flex;
          gap: 14px;
        }
        .btn-outline {
          padding: 8px 16px;
          border: 1px solid #f5c542;
          color: #f5c542;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
        }
        .btn-primary {
          padding: 8px 18px;
          background: linear-gradient(135deg, #f5c542, #d4a017);
          color: #000;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
          }
          .menu {
            display: none;
            flex-direction: column;
            gap: 14px;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(180deg, #0b0f14, #05070a);
            padding: 20px;
            border-bottom: 1px solid rgba(255, 215, 0, 0.15);
            z-index: 1000;
          }
          .menu.open {
            display: flex;
          }
          .desktop-actions {
            display: none;
          }
          .mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 14px;
            margin-top: 14px;
          }
        }
      `}</style>
    </header>
  );
}
