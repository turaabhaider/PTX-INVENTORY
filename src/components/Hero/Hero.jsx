// src/components/Hero/Hero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Hero.module.css';

// --- LOCAL WEBP IMAGE IMPORT ---
import mainBackground from '../../assets/main-background.webp';

export default function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.4, ease: "power4.out", delay: 0.4 }
    );
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div className={styles.mediaContainer}>
        {/* Replaced Unsplash link with your local asset */}
        <img 
          src={mainBackground} 
          alt="PTX Main Background" 
          className={styles.heroMedia}
        />
        <div className={styles.vignetteOverlay} />
      </div>

      <div className={styles.textOverlay}>
        <h1 ref={textRef} className={styles.mainDisplayTitle}>
          EXPLORE ALL COLLECTIONS
        </h1>
      </div>
    </section>
  );
}