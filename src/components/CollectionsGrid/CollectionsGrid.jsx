// src/components/CollectionsGrid/CollectionsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './CollectionsGrid.module.css';

const items = [
  {
    id: 1,
    title: "MENSWEAR SYSTEM",
    tag: "01 / ATELIER",
    img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    size: "large"
  },
  {
    id: 2,
    title: "JUNIOR COUTURE",
    tag: "02 / INFANCY",
    img: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=800&q=80",
    size: "small"
  },
  {
    id: 3,
    title: "ESSENTIAL MATRIX",
    tag: "03 / MINIMALIST",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    size: "tall"
  }
];

export default function CollectionsGrid() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.header}>
        <span className={styles.supTitle}>CURATED EDITIONS</span>
        <h2 className={styles.mainTitle}>EXPLORE ARCHIVAL LINES</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className={`${styles.card} ${styles[item.size]}`}
          >
            <div className={styles.imageWrapper}>
              <img src={item.img} alt={item.title} className={styles.image} />
              <div className={styles.overlay} />
            </div>
            <div className={styles.meta}>
              <span className={styles.tag}>{item.tag}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <div className={styles.actionLine}>DISCOVER FRAME</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}