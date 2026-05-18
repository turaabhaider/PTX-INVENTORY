// src/components/JuniorsPage/JuniorsPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductDetail from '../ProductDetail/ProductDetail';
import styles from './JuniorsPage.module.css';

// --- JUNIOR HIGH-END ASSETS IMPORTS ---
import w2017Img from '../../assets/W2017.webp';
import w2012Img from '../../assets/W2012.webp';
import w2036Img from '../../assets/W2036.webp';

const JUNIORS_PRODUCTS = [
  {
    id: "w2017",
    name: "W2017",
    titleLine: "Premium Baby Tee",
    gsm: "180",
    desc: "50% Cotton - 50% Polyester- 1*1 Rib Baby Tee",
    img: w2017Img,
    available: true,
    colors: ["#ffffff", "#eaeaea"],
    sizes: { "S": 398, "M": 798, "L": 800, "XL": 400, "XXL": 400 },
    totalStock: 2796
  },
  {
    id: "w2012",
    name: "W2012",
    titleLine: "Premium Boyfriend Tee",
    gsm: "150",
    desc: "60% Cotton - 40% Polyester Jersey Boyfriend Tee",
    img: w2012Img,
    available: true,
    colors: ["#ffffff"],
    sizes: { "S": 398, "M": 798, "L": 800, "XL": 400, "XXL": 400 },
    totalStock: 2796
  },
  {
    id: "w2036",
    name: "W2036",
    titleLine: "Jersey Boxy Crop Tee",
    gsm: "180",
    desc: "100% Cotton Boxy Crop Tee",
    img: w2036Img,
    available: true,
    colors: ["#ffffff", "#eaeaea"],
    sizes: { "S": 398, "M": 777, "L": 800, "XL": 400, "XXL": 391 },
    totalStock: 2766
  }
];

export default function JuniorsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (selectedProduct) {
    return (
      <ProductDetail 
        product={selectedProduct} 
        onBack={() => setSelectedProduct(null)} 
        isDarkBg={true} /* Juniors view details backdrop turns matte black */
      />
    );
  }

  return (
    <div className={styles.juniorsWrapper}>
      <header className={styles.pageHeader}>
        <span className={styles.lineTag}>INFANCY INFUSED MATRIX</span>
        <h1 className={styles.mainTitle}>JUNIOR COLLECTION</h1>
        <div className={styles.itemCounter}>[ {JUNIORS_PRODUCTS.length} SELECTIONS ]</div>
      </header>

      <div className={styles.productsGrid}>
        {JUNIORS_PRODUCTS.map((product, idx) => (
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