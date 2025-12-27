import React from "react";

export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        {/* Logo */}
        <img src="/companylogo.png" alt="GLOBAL" style={styles.logo} />

        {/* Tagline */}
        <p style={styles.tagline}>
          Help at Home, Magic at Events – Only on GLOBAL
        </p>

        {/* Heading */}
        <h1 style={styles.heading}>
          One Platform for <span style={styles.highlight}>Every Need</span>
        </h1>

        {/* Subtext */}
        <p style={styles.subtext}>
          Book trusted home helpers or professional event services instantly.
          <br />
          India’s first dual-purpose booking platform.
        </p>

        {/* Buttons */}
        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>🏠 Home Helpers →</button>
          <button style={styles.outlineBtn}>🎉 Event Services →</button>
        </div>
      </div>

      {/* Stats */}
      <div style={styles.statsWrapper}>
        <Stat value="10K+" label="Verified Vendors" />
        <Stat value="50K+" label="Happy Customers" />
        <Stat value="100+" label="Cities Covered" />
        <Stat value="4.8" label="Average Rating" />
      </div>

      {/* Curve */}
      <div style={styles.curve} />
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div style={styles.stat}>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #1a1f26 0%, #07090c 70%)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
    paddingTop: 120,
  },

  container: {
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
    padding: "0 20px",
  },

  logo: {
    width: 130,
    marginBottom: 20,
  },

  tagline: {
    color: "#f4b41a",
    fontSize: 15,
    marginBottom: 16,
    letterSpacing: 0.6,
  },

  heading: {
    fontSize: "clamp(36px, 5vw, 58px)",
    fontWeight: 700,
    lineHeight: 1.15,
    marginBottom: 18,
  },

  highlight: {
    color: "#f4b41a",
  },

  subtext: {
    color: "#b0b0b0",
    fontSize: 16,
    maxWidth: 700,
    margin: "0 auto 40px",
    lineHeight: 1.7,
  },

  buttons: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 80,
  },

  primaryBtn: {
    background: "#f4b41a",
    color: "#000",
    border: "none",
    padding: "16px 34px",
    borderRadius: 40,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },

  outlineBtn: {
    background: "transparent",
    color: "#f4b41a",
    border: "2px solid #f4b41a",
    padding: "16px 34px",
    borderRadius: 40,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },

  /* Stats */
  statsWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    maxWidth: 900,
    margin: "0 auto 120px",
    gap: 30,
    textAlign: "center",
    padding: "0 20px",
  },

  stat: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },

  statValue: {
    fontSize: 34,
    fontWeight: 700,
    color: "#f4b41a",
  },

  statLabel: {
    fontSize: 14,
    color: "#9aa0a6",
  },

  /* Curve */
  curve: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 120,
    background: "#fff",
    borderTopLeftRadius: "100% 90px",
    borderTopRightRadius: "100% 90px",
  },
};
