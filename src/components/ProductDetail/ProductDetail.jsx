// src/components/ProductDetail/ProductDetail.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductDetail.module.css';

export default function ProductDetail({ product, onBack, isDarkBg }) {
  return (
    <div className={styles.detailWrapper}>
      {/* Back Control Navigation */}
      <button onClick={onBack} className={styles.backBtn}>
        <span className={styles.backArrow}>←</span> RETURN TO CATALOG
      </button>

      <div className={styles.mainGrid}>
        {/* Left Side: Premium Media Box with Dynamic Background Color */}
        <motion.div 
          className={`${styles.imageContainer} ${isDarkBg ? styles.darkBoxBg : ''}`}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={product.img} alt={product.name} className={styles.displayImage} />
        </motion.div>

        {/* Right Side: Inventory Specifications Data */}
        <motion.div 
          className={styles.specsPanel}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className={styles.serialCode}>{product.name}</span>
          <h1 className={styles.productTitle}>{product.titleLine}</h1>
          <h2 className={styles.fabricSubheading}>{product.desc}</h2>

          {/* Technical GSM Chip */}
          <div className={styles.gsmRow}>
            <div className={styles.gsmBadge}>
              <span className={styles.gsmLabel}>GSM</span>
              <span className={styles.gsmValue}>{product.gsm}</span>
            </div>
          </div>

          {/* Color Matrix Circles */}
          <div className={styles.colorSection}>
            <span className={styles.sectionLabel}>AVAILABLE TEXTURE MATRIX</span>
            <div className={styles.colorRow}>
              {product.colors.map((color, idx) => (
                <div 
                  key={idx} 
                  className={styles.colorCircle} 
                  style={{ backgroundColor: color }} 
                />
              ))}
            </div>
          </div>

          {/* Sizing & Stock Inventory Breakdown */}
          <div className={styles.inventoryTableSection}>
            <span className={styles.sectionLabel}>STOCK MATRIX BY SIZE DIMENSION</span>
            
            <div className={styles.gridTable}>
              {Object.entries(product.sizes).map(([size, quantity]) => (
                <div key={size} className={styles.tableColumn}>
                  <div className={styles.sizeHeader}>{size}</div>
                  <div className={styles.quantityCell}>
                    {quantity > 0 ? `${quantity.toLocaleString()} Pcs` : "0 Pcs"}
                  </div>
                </div>
              ))}
            </div>

            {/* Total Aggregate Calculation Display */}
            <div className={styles.totalAggregatorRow}>
              <span className={styles.totalLabel}>TOTAL BUNDLED VOLUME</span>
              <span className={styles.totalValue}>{product.totalStock.toLocaleString()} Pcs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}