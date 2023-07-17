'use client';

import { motion } from 'framer-motion';
import styles from '@styles';
import { navVariants } from '@utils/motion';
import search from '@public/search.svg';
import category from '@public/menu.svg';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative ${styles.flexCenter}`}
  >
    <div className="absolute inset-0 w-[50%] gradient-01" />
    <div className={`${styles.innerWidth} flex justify-between items-center`}>
      <img src={search.src} className="w-6 h-6 object-contain" alt="Search" />
      <h1 className="font-extrabold text-white text-2xl uppercase">
        Metaversus
      </h1>
      <img src={category.src} className="w-6 h-6 object-contain" alt="Menu" />
    </div>
  </motion.nav>
);
export default Navbar;
