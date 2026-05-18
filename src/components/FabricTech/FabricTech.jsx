// src/components/FabricTech/FabricTech.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldAlert, Wind } from 'lucide-react';
import styles from './FabricTech.module.css';

const techs = [
  {
    icon: <Cpu size={24} strokeWidth={1} />,
    title: "METALLIC MATRIX WEAVE",
    desc: "Engineered with high-tensile premium fiber threads for structured shapes that maintain pristine drapes naturally."
  },
  {
    icon: <Wind size={24} strokeWidth={1} />,
    title: "AEROLITE RESPIRATION",
    desc: "Adaptive climate membranes that automatically respond to fluctuating body temperatures in high-intensity urban environments."
  },
  {
    icon: <ShieldAlert size={24} strokeWidth={1} />,
    title: "NANO-SHIELD COATING",
    desc: "An invisible protective molecular barrier providing extreme resistance against liquid saturation, dust, and daily wear particles."
  }
];

export default function FabricTech() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.blurCore} />
      <div className={styles.contentGrid}>
        <div className={styles.infoBlock}>
          <span className={styles.tag}>INTELLIGENT APPAREL</span>
          <h2 className={styles.title}>THE ARCHITECTURE OF TEXTILES</h2>
          <p className={styles.desc}>
            Every garment from PTX is designed from the yarn layer upward. We combine classical tailoring frameworks with modern material engineering.
          </p>
        </div>

        <div className={styles.cardsColumn}>
          {techs.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={styles.glassCard}
            >
              <div className={styles.iconBox}>{t.icon}</div>
              <div className={styles.textData}>
                <h3 className={styles.cardTitle}>{t.title}</h3>
                <p className={styles.cardDesc}>{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}