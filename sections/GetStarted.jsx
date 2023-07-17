'use client';

import { motion } from 'framer-motion';
import { Section, TitleText, TypingText, Feature } from '@components';
import { planetVariants } from '@utils/motion';
import { STARTING_FEATURES } from '@constants';
import getStarted from '@public/get-started.png';
import styles from '@styles';

const GetStarted = () => (
  <Section>
    <div className={`${styles.flexCenter} flex-col lg:flex-row lg:gap-[60px]`}>
      <motion.div
        variants={planetVariants('left')}
        initial="hidden"
        whileInView="show"
        className="lg:max-w-[50%]"
      >
        <img src={getStarted.src} alt="Planet" />
      </motion.div>
      <div className="-mt-5 lg:mt-0">
        <TypingText
          title="| How Metaversus Works"
          textStyles="mb-2 lg:text-left text-center"
        />
        <TitleText
          text="Get started with just a few clicks"
          textStyles="mb-6 lg:text-left text-center lg:text-[64px] md:text-[52px]"
        />
        <div className="flex flex-col gap-[24px] px-6 sm:px-10 md:px-14 lg:px-0">
          {STARTING_FEATURES.map(({ id, description }, index) => (
            <Feature
              key={id}
              desc={description}
              index={index}
              insideItem={index + 1}
              aniDirection="right"
            />
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default GetStarted;
