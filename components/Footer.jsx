'use client';

import { motion } from 'framer-motion';
import styles from '@styles';
import { footerVariants } from '@utils/motion';
import headset from '@public/headset.svg';
import { Section, Socials } from '@components';

const Footer = () => (
  <footer>
    <Section sectionStyle={`${styles.xPaddings} sm:pt-16 xs:pt-8 pt-12`}>
      <motion.div
        variants={footerVariants}
        className="relative flex flex-col text-white w-full gap-[80px]"
      >
        {/* <div className="footer-gradient z-0" /> */}
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center">
          <p className="lg:text-[64px] md:text-[36px] text-[28px] font-bold ">
            Enter the Metaverse
          </p>
          <button
            type="button"
            className="flex justify-center items-center py-5 px-8 rounded-full bg-[#25618B] gap-3"
          >
            <img src={headset.src} alt="Headset" className="w-6 h-6" />
            <span className="uppercase whitespace-nowrap">Enter Metaverse</span>
          </button>
        </div>
        <div className="py-12 flex flex-col gap-5 lg:flex-row justify-between items-center border-t-[1px] border-gray-600">
          <p className="uppercase text-[24px] font-bold">Metaversus</p>
          <p className="text-sm text-secondary-white select-none text-center">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <Socials direction="row" />
        </div>
      </motion.div>
    </Section>
  </footer>
);

export default Footer;