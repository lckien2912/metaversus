'use client';

import { motion } from 'framer-motion';
import { Section, TitleText, TypingText, Feature } from '@components';
import { planetVariants } from '@utils/motion';
import { NEW_FEATURES } from '@constants';
import whatsNew from '@public/whats-new.png';
import styles from '@styles';

const WhatsNew = () => (
  <Section>
    <div
      className={`${styles.flexCenter} flex-col lg:flex-row gap-8 lg:gap-[60px]`}
    >
      <div>
        <TypingText
          title="| Whats New?"
          textStyles="mb-2 lg:text-left text-center"
        />
        <TitleText
          text="What's new about Metaversus?"
          textStyles="mb-6 lg:text-left text-center lg:text-[64px] md:text-[52px]"
        />
        <div className="flex flex-col lg:flex-row gap-[24px] px-6 sm:px-10 md:px-14 lg:px-0">
          {NEW_FEATURES.map(({ imgUrl, title, subtitle }, index) => (
            <Feature
              key={imgUrl}
              desc={subtitle}
              index={index}
              insideItem={<img src={imgUrl} alt={title} />}
              aniDirection="left"
              title={title}
              descSize="text-[16px]"
              isColumn
            />
          ))}
        </div>
      </div>
      <motion.div
        variants={planetVariants('right')}
        initial="hidden"
        whileInView="show"
        className="lg:max-w-[50%]"
        viewport={{ once: true }}
      >
        <img src={whatsNew.src} alt="Planet" />
      </motion.div>
    </div>
  </Section>
);

export default WhatsNew;
