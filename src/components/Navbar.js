import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icons

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
      display: "flex",
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
    hamburger: {
      display: "none",
      fontSize: "28px",
      cursor: "pointer",
      color: "#f5c542",
    },
  };

  return (
    <header style={styles.navbar}>
      {/* Logo */}
      <div>
        <img src="/companylogo.png" alt="GLOBAL" style={styles.logo} />
      </div>

      {/* Hamburger icon for mobile */}
      <div
        style={styles.hamburger}
        className="hamburger"
        onClick={toggleMobileMenu}
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Menu */}
      <nav
        style={{
          ...styles.menu,
          ...(mobileOpen ? styles.menuMobile : {}),
        }}
        className={mobileOpen ? "mobile-menu" : ""}
      >
        <NavLink
          to="/"
          onClick={closeMobileMenu}
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          Home
        </NavLink>

        {/* Dropdown */}
        <div
          style={styles.dropdown}
          onMouseEnter={() => !mobileOpen && setDropdownOpen(true)}
          onMouseLeave={() => !mobileOpen && setDropdownOpen(false)}
        >
          <span style={styles.menuItem}>Services ▾</span>
          {(dropdownOpen || mobileOpen) && (
            <div style={styles.dropdownMenu}>
              <NavLink to="/homehelper" style={styles.dropdownItem} onClick={closeMobileMenu}>
                HomeServices
              </NavLink>
              <NavLink to="/eventservices" style={styles.dropdownItem} onClick={closeMobileMenu}>
                EventServices
              </NavLink>
            </div>
          )}
        </div>

        <NavLink
          to="/howitworks"
          onClick={closeMobileMenu}
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          How It Works
        </NavLink>
        <NavLink
          to="/about"
          onClick={closeMobileMenu}
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          onClick={closeMobileMenu}
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          Contact
        </NavLink>

        {/* Actions (mobile) */}
        {mobileOpen && (
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "14px" }}>
            <Link to="/vendor-login" style={styles.btnOutline} onClick={closeMobileMenu}>
              Vendor Login
            </Link>
            <Link to="/book-now" style={styles.btnPrimary} onClick={closeMobileMenu}>
              Book Now
            </Link>
          </div>
        )}
      </nav>

      {/* Desktop actions */}
      <div style={styles.actions} className="desktop-actions">
        <Link to="/vendor-login" style={styles.btnOutline}>
          Vendor Login
        </Link>
        <Link to="/book-now" style={styles.btnPrimary}>
          Book Now
        </Link>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            display: ${mobileOpen ? "flex" : "none"};
          }
          .hamburger {
            display: block;
          }
          .desktop-actions {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
