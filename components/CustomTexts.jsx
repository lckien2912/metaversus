'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2, fadeIn } from '@utils/motion';

export const TypingText = ({ title, textStyles = '' }) => (
  <motion.p
    variants={textContainer(0.05)}
    className={`font-normal text-sm text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ text, textStyles = '' }) => (
  <motion.h2
    variants={fadeIn('up', 'tween', 0, 0.2)}
    className={`font-bold text-[36px] sm:text-[48px] md:text-[64px] md:leading-[120%]  text-white md:max-w-3xl ${textStyles}`}
  >
    {text}
  </motion.h2>
);
