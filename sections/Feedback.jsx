'use client';

import { motion } from 'framer-motion';
import { Section } from '@components';
import { slideIn, fadeIn } from '@utils/motion';
import planet9 from '@public/planet-09.png';
import stamp from '@public/stamp.png';

const Feedback = () => (
  <Section>
    <div className="flex lg:flex-row flex-col gap-8 relative">
      <div className="feedback-gradient" />
      <motion.div
        variants={slideIn('left', 'spring', 0.2, 1)}
        className="flex flex-col items-start justify-end p-[30px] lg:w-1/3 text-white border-[1px] border-[#6A6A6A] rounded-[32px]"
      >
        <h2 className="lg:text-[32px] text-xl font-bold">Samantha</h2>
        <h3 className="lg:text-lg text-normal">Founder Metaversus</h3>
        <p className="lg:text-2xl text-sm leading-[190%] mt-5">
          “With the development of today's technology, metaverse is very useful
          for today's work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative lg:h-[610px] lg:w-2/3"
      >
        <img
          src={planet9.src}
          alt="Planet"
          className="w-full h-full object-cover rounded-[40px] relative z-10"
        />
        <a
          href="#explore"
          className="absolute z-[11] w-full flex justify-start lg:top-20 lg:-left-20 -top-14 left-14"
        >
          <img
            src={stamp.src}
            alt="Stamp"
            className="absolute lg:w-[155px] lg:h-[155px] w-[100px] h-[100px] object-contain"
          />
        </a>
      </motion.div>
    </div>
  </Section>
);

export default Feedback;
