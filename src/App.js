import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import ServicesPage from "./pages/ServicesPage";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showBackOnline, setShowBackOnline] = useState(false);

  useEffect(() => {
    // Instantaneous, smooth mount without artificial blocking delay
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 100);

    let onlineTimer = null;

    const handleOffline = () => {
      setIsOffline(true);
      setShowBackOnline(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowBackOnline(true);
      if (onlineTimer) clearTimeout(onlineTimer);
      onlineTimer = setTimeout(() => {
        setShowBackOnline(false);
      }, 3500);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      clearTimeout(timer);
      if (onlineTimer) clearTimeout(onlineTimer);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
      <FloatingButtons />

      {/* Offline / Cached mode status toast */}
      {isOffline && (
        <div className="network-status-toast offline" role="status" aria-live="polite">
          <span className="status-dot offline"></span>
          <span>Offline Mode — Running from Local Cache</span>
        </div>
      )}

      {/* Back Online notification */}
      {showBackOnline && (
        <div className="network-status-toast online" role="status" aria-live="polite">
          <span className="status-dot online"></span>
          <span>Connection Restored</span>
        </div>
      )}
    </Router>
  );
}

export default App;
