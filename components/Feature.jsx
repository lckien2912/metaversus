'use client';

import { motion } from 'framer-motion';
import { slideIn } from '@utils/motion';

const Feature = ({
  index,
  title = '',
  desc,
  insideItem,
  descSize = 'text-[18px]',
  aniDirection,
  isColumn = false,
}) => (
  <motion.div
    variants={slideIn(aniDirection, 'spring', index * 0.1, 0.2)}
    className={`flex ${
      isColumn ? 'lg:flex-col gap-[30px] lg:gap-[20px]' : 'flex-row gap-[30px]'
    } justify-start items-start`}
  >
    <span className="flex items-center justify-center min-w-[40px] min-h-[40px] md:min-w-[60px] md:min-h-[60px] rounded-3xl bg-slate-600 text-white text-[20px] font-bold">
      {insideItem}
    </span>
    <div className="flex flex-col w-full gap-[10px]">
      {title && (
        <h3 className="font-bold text-[20px] md:text-[24px] text-white">
          {title}
        </h3>
      )}
      <p
        className={`${descSize} text-secondary-white font-normal leading-[180%]`}
      >
        {desc}
      </p>
    </div>
  </motion.div>
);

export default Feature;
