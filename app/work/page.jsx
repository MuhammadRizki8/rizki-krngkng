'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import WorkSlideBtn from '@/components/WorkSlideBtn';

const projects = [
  {
    num: '03',
    category: 'Frontend Project',
    title: 'Photographer & Film Maker',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupditate magnam modi.',
    stack: ['Next.js', 'Tailwind.css'],
    image: '/assets/work/thumb1.png',
    live: '#',
    github: '#',
  },
  {
    num: '04',
    category: 'Backend Project',
    title: 'API Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupditate magnam modi.',
    stack: ['Node.js', 'Express'],
    image: '/assets/work/thumb2.png',
    live: '#',
    github: '#',
  },
];

const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleNext = () => {
    setProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left section */}
          <motion.div key={projects[projectIndex].num} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* Outline number */}
            <div className="text-[120px] leading-none font-extrabold text-transparent text-outline">{projects[projectIndex].num}</div>
            {/* Project category */}
            <h2 className="text-[42px] font-bold leading-none text-white capitalize mb-4">{projects[projectIndex].category}</h2>
            {/* Project description */}
            <p className="text-slate-400 mb-6">{projects[projectIndex].description}</p>
            {/* Tech stack */}
            <div className="text-blue-700 flex gap-2 text-lg font-medium">
              {projects[projectIndex].stack.map((tech, index) => (
                <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                  {tech}
                </motion.span>
              ))}
            </div>
            {/* Icons */}
            <div className="border-t pt-4 flex items-center mt-8 gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={projects[projectIndex].live}>
                      <motion.div whileHover={{ scale: 1.1 }} className="bg-slate-800 hover:bg-blue-700 rounded-full p-4 text-xl text-blue-700 hover:text-slate-300 transition duration-300">
                        <BsArrowUpRight />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Live Preview</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={projects[projectIndex].github}>
                      <motion.div whileHover={{ scale: 1.1 }} className="bg-slate-800 hover:bg-blue-700 rounded-full p-4 text-xl text-blue-700 hover:text-slate-300 transition duration-300">
                        <BsGithub />
                      </motion.div>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>GitHub Repository</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </motion.div>

          {/* Right section - Swiper for images */}
          <div className="w-full xl:w-[50%] ">
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleNext}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] md:h-[460px] relative group flex justify-center items-center bg-slate-500">
                    {/* overlay */}
                    <div className="absolute top-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt={project.title} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSlideBtn />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
