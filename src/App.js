import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HomeServices from "./components/HomeServices";
import EventServices from "./components/EventServices";
import GlobalProcess from "./components/GlobalProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

// PAGES
import HowItWorkPage from "./pages/Howitworkspage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomeHelpers from "./pages/HomeHelpers";
import EventServicesPage from "./pages/EventHelpers";

export default function App() {
  return (
    <Router>
      {/* COMMON NAVBAR */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <HomeServices />
              <EventServices />
              <GlobalProcess />
              <WhyChooseUs />
              <CtaSection />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/howitworks" element={<HowItWorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/homehelper" element={<HomeHelpers />} />
                <Route path="/eventservices" element={<EventServicesPage />} />

        <Route path="/contact" element={<ContactPage/>} />
      </Routes>

      {/* COMMON FOOTER */}
      <Footer />
    </Router>
  );
}
