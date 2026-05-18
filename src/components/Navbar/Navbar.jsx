// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar({ currentView, setView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (targetView) => {
    setView(targetView);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ""} ${isMobileMenuOpen ? styles.menuActiveBg : ""}`}
      >
        <div className={styles.navWrapper}>
          <div className={styles.logoSide}>
            <button onClick={() => handleMobileNav('home')} className={styles.brandLogoBtn}>
              PTX
            </button>
          </div>
          
          {/* Desktop Links - Auto Hides on Mobile via CSS Media Queries */}
          <div className={styles.menuLinks}>
            <button 
              onClick={() => setView('home')} 
              className={`${styles.linkItemBtn} ${currentView === 'home' ? styles.active : ''}`}
            >
              HOME
            </button>
            <button 
              onClick={() => setView('mens')} 
              className={`${styles.linkItemBtn} ${currentView === 'mens' ? styles.active : ''}`}
            >
              MENS
            </button>
            <button 
              onClick={() => setView('juniors')} 
              className={`${styles.linkItemBtn} ${currentView === 'juniors' ? styles.active : ''}`}
            >
              JUNIORS
            </button>
            <a 
              href="https://book.paktex.com/book/ptx-company-profile/PTX-C-P" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.linkItemLink}
            >
              LOOKBOOK
            </a>
          </div>

          {/* Premium Hamburger Toggle Button */}
          <button 
            className={`${styles.hamburgerBtn} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Glassmorphic Flyout Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.mobileLinksWrapper}>
              <button 
                onClick={() => handleMobileNav('home')} 
                className={`${styles.mobileNavLink} ${currentView === 'home' ? styles.mobileActive : ''}`}
              >
                HOME
              </button>
              <button 
                onClick={() => handleMobileNav('mens')} 
                className={`${styles.mobileNavLink} ${currentView === 'mens' ? styles.mobileActive : ''}`}
              >
                MENS
              </button>
              <button 
                onClick={() => handleMobileNav('juniors')} 
                className={`${styles.mobileNavLink} ${currentView === 'juniors' ? styles.mobileActive : ''}`}
              >
                JUNIORS
              </button>
              <a 
                href="https://book.paktex.com/book/ptx-company-profile/PTX-C-P" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LOOKBOOK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}