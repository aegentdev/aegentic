
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [simBtnActive, setSimBtnActive] = useState(false);
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
        <span className="nav-bg-logo inter" >aegent/dev</span>
        <div className="container navbar-container">
          <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`} style={{ margin: '0 auto' }}>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/benchmark" className={location.pathname === '/benchmark' ? 'active' : ''}>
                Benchmark
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
          <Link
            to="/benchmark"
            className={`btn navbar-sim-btn${simBtnActive ? ' active' : ''}`}
            style={{ marginLeft: 'auto', minWidth: 0 }}
            onMouseDown={() => setSimBtnActive(true)}
            onMouseUp={() => setSimBtnActive(false)}
            onMouseLeave={() => setSimBtnActive(false)}
          >
            Run a Simulation
          </Link>
          <div className="navbar-cta"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
