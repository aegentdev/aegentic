
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="nav-container">
      <nav className={`navbar${isScrolled ? ' scrolled' : ''}`}>
        <div className="container navbar-container">
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <div style={{ flex: '0 0 auto' }}>
              <span className="nav-bg-logo inter">aegent/dev</span>
            </div>
            <div style={{ flex: 1, display: 'flex' ,marginLeft: 155}}>
              <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <li>
                  <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/waitlist" className={location.pathname === '/waitlist' ? 'active' : ''}>
                    Waitlist
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              <a href="https://www.mvp.aegentdev.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outline"
                  size="sm"
                  className="run-simulation-btn"
                >
                  Run Simulation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
