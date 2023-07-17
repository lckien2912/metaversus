'use client';

import { InsightCard, Section, TitleText, TypingText } from '@components';
import { INSIGHTS } from '@constants';

const Insights = () => (
  <Section>
    <TypingText title="| People on the World" textStyles="text-center" />
    <TitleText
      text="Track friends around you and invite them to play together in the same world"
      textStyles="text-center md:max-w-4xl"
    />
    <div className="flex flex-col gap-[30px] mt-12">
      {INSIGHTS.map(({ imgUrl, title, subtitle }, index) => (
        <InsightCard
          key={title}
          img={imgUrl}
          title={title}
          subtitle={subtitle}
          index={index}
        />
      ))}
    </div>
  </Section>
);

export default Insights;
