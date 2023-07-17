'use client';

import { motion } from 'framer-motion';
import { slideIn } from '@utils/motion';
import arrow from '@public/arrow.svg';

const InsightCard = ({ img, title, subtitle }) => (
  <motion.div
    variants={slideIn('right', 'spring', 0, 0.8)}
    initial="hidden"
    whileInView="show"
    className="flex flex-row justify-between items-center w-full "
  >
    <div className="flex flex-row lg:gap-16 gap-5">
      <div className="lg:w-[250px] lg:h-[250px] md:w-[150px] md:h-[150px] w-20 h-20 ">
        <img
          src={img}
          alt={title}
          className="w-full h-full lg:rounded-[32px] md:rounded-[24px] rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <h2 className="lg:text-[42px] sm:text-[30px] text-[20px] leading-[125%] text-white line-clamp-2">
          {title}
        </h2>
        <p className="lg:text-[20px] text-sm leading-[200%] text-secondary-white line-clamp-2">
          {subtitle}
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center lg:min-w-[100px] lg:h-[100px] min-w-[40px] h-[40px] rounded-full border-white border-2 lg:ml-24 ml-3">
      <img
        src={arrow.src}
        alt="direction"
        className="lg:w-[48px] lg:h-[48px] w-5 h-5"
      />
    </div>
  </motion.div>
);

export default InsightCard;
