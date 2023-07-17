'use client';

import { motion } from 'framer-motion';
import styles from '@styles';
import { fadeIn, staggerContainer } from '@utils/motion';
import { TypingText } from './CustomTexts';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  const WRAPPER_STYLES = `relative ${
    active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
  } ${
    styles.flexCenter
  } min-w-[170px] h-[570px] transition-[flex] duration-700 ease-out-flex cursor-pointer`;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.4, 0.8)}
      className={WRAPPER_STYLES}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-3xl"
      />
      {active !== id ? (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="absolute z-0 lg:bottom-40 lg:w-[300px] lg:rotate-[-90deg] lg:origin-[0,0] lg:-right-4"
        >
          <TypingText
            title={title}
            textStyles="font-semibold sm:text-[26px] text-[18px] text-white"
          />
        </motion.div>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
          <div
            className={`${styles.flexCenter} h-[40px] w-[40px] lg:w-[60px] lg:h-[60px] rounded-3xl glassmorphism mb-4`}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[14px] md:text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-4 lg:mt-6 font-semibold md:text-[28px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};
export default ExploreCard;
