// src/components/Marquee/Marquee.jsx
import React from 'react';
import styles from './Marquee.module.css';

export default function Marquee() {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.track}>
        {Array(4).fill("").map((_, i) => (
          <span key={i} className={styles.text}>
            PTX LABORATORY • SYSTEMIC WEAVE • ATELIER ESSENTIALS • FUTURE FORM 
          </span>
        ))}
      </div>
    </div>
  );
}