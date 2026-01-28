import { useState, useEffect } from "react";
import "./sidebar.scss";
import logo from '../../assests/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faBriefcase, faStar, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // Close menu on desktop resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const socialLinks = (
    <ul className="social-links">
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nidhidewangan03/">
          <FontAwesomeIcon icon={faLinkedin} color="#e6e6e6" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/nidhidewangan03">
          <FontAwesomeIcon icon={faGithub} color="#e6e6e6" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="mailto:nidhidew2003@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} color="#e6e6e6" />
        </a>
      </li>
    </ul>
  );

  const navLinks = (
    <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
      <NavLink to="/" onClick={closeMenu}>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/about" onClick={closeMenu}>
        <FontAwesomeIcon icon={faUser} />
        <span>About</span>
      </NavLink>
      <NavLink to="/project" onClick={closeMenu}>
        <FontAwesomeIcon icon={faStar} />
        <span>Project</span>
      </NavLink>
      <NavLink to="/skills-and-experience" onClick={closeMenu}>
        <FontAwesomeIcon icon={faBriefcase} />
        <span>Skills and Experience</span>
      </NavLink>
      <NavLink to="/contact" onClick={closeMenu}>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Contact</span>
      </NavLink>
    </nav>
  );

  return (
    <>
      {!isMobile && (
        <div className="nav-bar desktop-sidebar">
          <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
          </Link>
          {navLinks}
          {/* {socialLinks} */}
        </div>
      )}

      {/* Mobile Header */}
      {isMobile && (
        <div className="mobile-header">
          <div className="mobile-top-bar">
            <Link className='logo' to='/'>
              <img src={logo} alt="logo" />
            </Link>
            <button className="menu-toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
          
          {/* Mobile Menu Overlay */}
          <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu}>
            <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
              {navLinks}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;