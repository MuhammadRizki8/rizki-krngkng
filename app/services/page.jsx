'use client';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'web development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat placeat reiciendis maiores ratione, ut qui nostrum.',
    href: '',
  },
  {
    num: '02',
    title: 'mobile development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat placeat reiciendis maiores ratione, ut qui nostrum.',
    href: '',
  },
  {
    num: '03',
    title: 'data analytic',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat placeat reiciendis maiores ratione, ut qui nostrum.',
    href: '',
  },
  {
    num: '04',
    title: 'aselole',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero fugiat placeat reiciendis maiores ratione, ut qui nostrum.',
    href: '',
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 sm:py-12 xl:py-6">
      <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-4 sm:gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-3xl sm:text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full bg-white group-hover:bg-blue-700 transition-all duration-300 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-slate-900 text-xl sm:text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-3xl sm:text-5xl font-bold leading-tight sm:leading-none text-white group-hover:text-blue-700 transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-sm sm:text-base text-slate-400">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;