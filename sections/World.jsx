'use client';

import { motion } from 'framer-motion';
import { Section, TitleText, TypingText } from '@components';
import { zoomIn } from '@utils/motion';
import map from '@public/map.png';
// import people1 from '@public/people-01.png';
// import people2 from '@public/people-02.png';
// import people3 from '@public/people-03.png';

const World = () => (
  <Section>
    <TypingText title="| People on the World" textStyles="text-center" />
    <TitleText
      text="Track friends around you and invite them to play together in the same world"
      textStyles="text-center md:max-w-4xl"
    />
    <motion.div
      variants={zoomIn(0, 1)}
      initial="hidden"
      whileInView="show"
      className="lg:mt-16 md:mt-14 mt-10"
    >
      <img src={map.src} alt="Map" className="" />
    </motion.div>
  </Section>
);

export default World;
