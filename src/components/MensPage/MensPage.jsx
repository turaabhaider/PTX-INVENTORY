// src/components/MensPage/MensPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductDetail from '../ProductDetail/ProductDetail';
import styles from './MensPage.module.css';

// Exact filename case imports match
import pt18500Img from '../../assets/PT-18500.webp';
import pt4000Img from '../../assets/PT-4000.webp';
import mineralWashImg from '../../assets/Mineral Wash.webp';

const MENS_PRODUCTS = [
  {
    id: "pt-18500",
    name: "PT-18500",
    titleLine: "Premium Blended Fleece Pullover",
    gsm: "280",
    desc: "8 Ounce Pre,ium Black Fleece Pullover",
    img: pt18500Img,
    available: true,
    colors: ["#000000"],
    sizes: { "S": 14277, "M": 22532, "L": 12679, "XL": 0, "XXL": 0 },
    totalStock: 49488
  },
  {
    id: "pt-4000",
    name: "PT-4000",
    titleLine: "Premium Black Fleece Pullover",
    gsm: "340",
    desc: "10 Ounce Premium Black Fleece Pullover",
    img: pt4000Img,
    available: true,
    colors: ["#000000"],
    sizes: { "S": 465, "M": 1749, "L": 3812, "XL": 3320, "XXL": 1245 },
    totalStock: 10591
  },
  {
    id: "mineral-wash",
    name: "Mineral Wash",
    titleLine: "Mineral Wash Tee",
    gsm: "180",
    desc: "100% Cotton Mineral Wash Tee",
    img: mineralWashImg,
    available: true,
    colors: ["#1e1e1e", "#a3a9b3"],
    sizes: { "S": 14235, "M": 21528, "L": 22396, "XL": 16533, "XXL": 4224 },
    totalStock: 78916
  }
];

export default function MensPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Switch display cleanly if a product review is opened
  if (selectedProduct) {
    return (
      <ProductDetail 
        product={selectedProduct} 
        onBack={() => setSelectedProduct(null)} 
        isDarkBg={false} /* Menswear backdrop stays light studio grey */
      />
    );
  }

  return (
    <div className={styles.mensWrapper}>
      <header className={styles.pageHeader}>
        <span className={styles.lineTag}>SYSTEMATIZED ATELIER</span>
        <h1 className={styles.mainTitle}>MENS COLLECTION</h1>
        <div className={styles.itemCounter}>[ {MENS_PRODUCTS.length} ESSENTIALS ]</div>
      </header>

      <div className={styles.productsGrid}>
        {MENS_PRODUCTS.map((product, idx) => (
          <motion.div 
            key={product.id}
            className={styles.productCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageFrame}>
              {product.available && (
                <div className={styles.statusBadge}>
                  <span className={styles.pulseDot} />
                  AVAILABLE
                </div>
              )}
              <img src={product.img} alt={product.name} className={styles.productImage} />
            </div>

            <div className={styles.specsContainer}>
              <div className={styles.titleRow}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.gsmChip}>
                  <span className={styles.gsmLabel}>GSM</span>
                  <span className={styles.gsmValue}>{product.gsm}</span>
                </div>
              </div>

              <p className={styles.fabricDetails}>{product.desc}</p>

              <button 
                onClick={() => setSelectedProduct(product)} 
                className={styles.detailsActionBtn}
              >
                <span className={styles.btnText}>VIEW DETAILS</span>
                <span className={styles.btnArrow}>→</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}