'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@styles';
import { slideIn, textVariant } from '@utils/motion';
import cover from '@public/cover.png';
import stamp from '@public/stamp.png';
import { Socials, Section } from '@components';

const Hero = () => (
  <Section sectionStyle={`${styles.yPaddings} sm:pl-16 pl-6 pr-0`}>
    <div className={`${styles.flexCenter} flex-col relative z-10 w-full`}>
      <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
        Metaverse
      </motion.h1>
      <motion.div
        variants={textVariant(1)}
        className="flex flex-grow justify-center items-center"
      >
        <h1 className={styles.heroHeading}>Ma</h1>
        <div className={`${styles.heroDText} ${styles.flexCenter}`} />
        <h1 className={styles.heroHeading}>ness</h1>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.5)}
        className="relative w-full -mt-[30px] md:-mt-[60px] z-[-1]"
      >
        <Image
          src={cover}
          alt="Cover"
          className="w-full rounded-tl-[140px] z-10 sm:h-[400px] h-[250px] object-cover"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <Image
              src={stamp}
              alt="Stamp"
              className="sm:w-[155px] sm:h-[155px] w-[100px] h-[100px] object-contain"
            />
          </div>
        </a>
        <div className="absolute sm:right-10 right-5 -top-28 md:-top-40 lg:-top-52">
          <Socials direction="col" />
        </div>
      </motion.div>
    </div>
  </Section>
);

export default Hero;
