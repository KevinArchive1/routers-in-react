import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components-css/Navbar.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavBar(false);
      } else {
        setShowNavBar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavBar ? 'show' : 'hide'}`} >
      <div className="nav-container">
        <Link to="/" className="nav-logo"><img src="./Images/logo.png" alt="" /></Link>
        <button className="nav-toggle" onClick={toggleMenu}>
            
          ☰
        </button>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className={location.pathname === '/' ? 'active-link' : ''}>
            <img className='anime-girl' src='./Images/anime-girl.gif' draggable="false" alt='none' />
            <h1>Home</h1>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={location.pathname === '/about' ? 'active-link' : ''}>
            <h1>About</h1>
            <img className='anime-girl' src='./Images/anime-girl.gif' alt='none' />
            </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className={location.pathname === '/projects' ? 'active-link' : ''}>
            <h1>Projects</h1>
            <img className='anime-girl' src='./Images/anime-girl.gif' alt='none' />
            </Link>
          <Link to="/contacts" onClick={() => setIsOpen(false)} className={location.pathname === '/contacts' ? 'active-link' : ''}>
            <h1>Contacts</h1>
            <img className='anime-girl' src='./Images/anime-girl.gif' alt='none' />
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
