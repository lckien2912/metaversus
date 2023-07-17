'use client';

import { motion } from 'framer-motion';
import { SOCIALS } from '@constants';
import styles from '@styles';

const containerStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, x: 50, y: -30 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.2 } },
};

const Socials = ({ direction }) => (
  <motion.ul
    variants={containerStagger}
    className={`${styles.flexCenter} gap-5 sm:gap-7 flex-${direction}`}
  >
    {SOCIALS.map(({ name, url }) => (
      <motion.li variants={itemVariant} key={name}>
        <a href="##" className="cursor-pointer">
          <img
            src={url}
            alt={name}
            className="md:w-6 md:h-6 w-5 h-5 object-contain"
          />
        </a>
      </motion.li>
    ))}
  </motion.ul>
);

export default Socials;
