'use client';

import { useState } from 'react';
import { Section, ExploreCard, TypingText, TitleText } from '@components';
import { EXPLORE_WORLD } from '@constants';

const Explore = () => {
  const [active, setActive] = useState('world-1');

  return (
    <Section id="explore">
      <TypingText title="| The World" />
      <TitleText
        text="Choose the world you want to explore"
        textStyles="text-center"
      />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5 w-full">
        {EXPLORE_WORLD.map((world, index) => (
          <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </Section>
  );
};

export default Explore;
