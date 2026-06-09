// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        <div className={styles.socialGrid}>
          {/* Facebook Link Update */}
          <a 
            href="https://www.facebook.com/PakistanTextileExchange" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialBox} 
            aria-label="Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          
          {/* Mailto Contact Link Update */}
          <a 
            href="mailto:david@paktex.com" 
            className={styles.socialBox} 
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </a>
          
          {/* Instagram Link Update */}
          <a 
            href="https://www.instagram.com/theptxofficial/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialBox} 
            aria-label="Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          
          {/* LinkedIn Link Update */}
          <a 
            href="https://www.linkedin.com/company/paktex-apparel/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialBox} 
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

        <div className={styles.copyrightRow}>
          <p className={styles.copyText}>PTX © 2026 — All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}