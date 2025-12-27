import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
    menu: { display: "flex", gap: "28px", alignItems: "center" },
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

      {/* Menu */}
      <nav style={styles.menu}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          Home
        </NavLink>

        {/* Dropdown */}
        <div
          style={styles.dropdown}
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span style={styles.menuItem}>Services ▾</span>
          {dropdownOpen && (
            <div style={styles.dropdownMenu}>
              <NavLink to="/homehelper" style={styles.dropdownItem}>
               HomeServices
              </NavLink>
              <NavLink to="/eventservices" style={styles.dropdownItem}>
                EventServiices
              </NavLink>
           
            </div>
          )}
        </div>

        <NavLink
          to="/howitworks"
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          How It Works
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...styles.menuItem, ...styles.menuItemActive } : styles.menuItem
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Actions */}
      <div style={styles.actions}>
        <Link to="/vendor-login" style={styles.btnOutline}>
          Vendor Login
        </Link>
        <Link to="/book-now" style={styles.btnPrimary}>
          Book Now
        </Link>
      </div>
    </header>
  );
}
