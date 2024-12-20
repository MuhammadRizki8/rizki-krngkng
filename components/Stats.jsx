'use client';
import CountUp from 'react-countup';

const stats = [
  { num: 2, text: 'Years of experience' },
  { num: 14, text: 'Projects completed' },
  { num: 4, text: 'Certifications earned' },
  { num: 1, text: 'Awards won' },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto mb-4">
        <div className="flex justify-between flex-wrap mx-auto xl:max-w-none gap-4 sm:gap-6">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex gap-2 sm:gap-4  items-center justify-start">
                <CountUp end={item.num} duration={5} delay={2} className="text-3xl sm:text-4xl xl:text-6xl font-extrabold" />
                <p className={`${item.text.length < 15 ? 'text-base sm:text-lg max-w-[80px] sm:max-w-[100px]' : 'text-sm sm:text-base max-w-[85px] sm:max-w-[105px]'}`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
