'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@utils/motion';
import styles from '@styles';

const Section = ({ children, sectionStyle, id }) => (
  <section className={sectionStyle || styles.paddings} id={id}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex-col ${styles.flexCenter} relative`}
    >
      {children}
    </motion.div>
  </section>
);

export default Section;
