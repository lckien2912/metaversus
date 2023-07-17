'use client';

import { motion } from 'framer-motion';
import { Section, TypingText } from '@components';
import { fadeIn } from '@utils/motion';
import arrowDown from '@public/arrow-down.svg';

const About = () => (
  <Section>
    <div className="gradient-02 z-0" />
    <div className="gradient-02 z-0" />
    <div className="gradient-03 z-0" />
    <TypingText title="| About Metaversus" textStyles="text-center" />
    <motion.p
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
    >
      <strong className="text-white">Metaverse</strong> is a new thing in the
      future, where you can enjoy the virtual world by feeling like it's really
      real, you can feel what you feel in this metaverse world, because this is
      really the{' '}
      <strong className="text-white">madness of the metaverse</strong> of today,
      using only <strong className="text-white">VR</strong> devices you can
      easily explore the metaverse world you want, turn your dreams into
      reality. Let's <strong className="text-white">explore</strong> the madness
      of the metaverse by scrolling down
    </motion.p>
    <motion.img
      src={arrowDown.src}
      alt="Arrow down"
      variants={fadeIn('up', 'spring', 0.3, 1)}
      className="w-8 h-8 mt-6 object-contain"
    />
  </Section>
);

export default About;
