// src/components/CategoryGrid/CategoryGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './CategoryGrid.module.css';

// Local assets fixed extensions
import mensImage from '../../assets/mens.webp';
import juniorsImage from '../../assets/juniors.webp';

export default function CategoryGrid({ setView }) {
  return (
    <section className={styles.gridSection}>
      <div className={styles.splitWrapper}>
        
        {/* Men Collection Card */}
        <motion.div 
          className={styles.editorialCard}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setView('mens')}
        >
          <div className={styles.imageFrame}>
            <img 
              src={mensImage} 
              alt="PTX Men Collection" 
              className={styles.cardImage}
            />
            <div className={styles.cardCover} />
          </div>
          <div className={styles.interactiveArea}>
            <button className={styles.pillActionBtn}>
              MEN COLLECTION
            </button>
          </div>
        </motion.div>

        {/* Junior Collection Card */}
        <motion.div 
          className={styles.editorialCard}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => setView('juniors')}
        >
          <div className={styles.imageFrame}>
            <img 
              src={juniorsImage} 
              alt="PTX Junior Collection" 
              className={styles.cardImage}
            />
            <div className={styles.cardCover} />
          </div>
          <div className={styles.interactiveArea}>
            <button className={styles.pillActionBtn}>
              JUNIOR COLLECTION
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}