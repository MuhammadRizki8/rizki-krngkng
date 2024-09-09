'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { BsArrowUpRight, BsGithub, BsWordpress, BsCreditCard, BsAndroid } from 'react-icons/bs';
import { SiFlutter, SiFastapi, SiFigma, SiGooglecloud, SiTensorflow, SiFlask, SiLaravel, SiReact, SiTailwindcss } from 'react-icons/si';

import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { projects } from './data';

const Work = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const renderStackIcon = (stack) => {
    let icon;
    switch (stack) {
      case 'Flutter':
        icon = <SiFlutter className="text-blue-500" size={24} />;
        break;
      case 'FastAPI':
        icon = <SiFastapi className="text-green-500" size={24} />;
        break;
      case 'Figma':
        icon = <SiFigma className="text-pink-500" size={24} />;
        break;
      case 'WordPress':
        icon = <BsWordpress className="text-blue-600" size={24} />;
        break;
      case 'TriPay':
        icon = <BsCreditCard className="text-yellow-500" size={24} />;
        break;
      case 'Android':
        icon = <BsAndroid className="text-green-500" size={24} />;
        break;
      case 'Tensorflow':
        icon = <SiTensorflow className="text-yellow-500" size={24} />;
        break;
      case 'Flask':
        icon = <SiFlask className="text-gray-200" size={24} />;
        break;
      case 'Google Cloud Platform':
        icon = <SiGooglecloud className="text-blue-700" size={24} />;
        break;
      case 'Laravel':
        icon = <SiLaravel className="text-red-600" size={24} />;
        break;
      case 'React':
        icon = <SiReact className="text-blue-400" size={24} />;
        break;
      case 'TailwindCSS':
        icon = <SiTailwindcss className="text-blue-600" size={24} />;
        break;
      default:
        icon = null;
    }
    return icon;
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left section */}
          <motion.div key={projects[projectIndex].num} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* Outline number */}
            <div className="text-[80px] md:text-[120px] leading-none font-extrabold text-transparent text-outline">{projects[projectIndex].num}</div>
            {/* Project category */}
            <h2 className="text-[32px] md:text-[42px] font-bold leading-none text-white capitalize mb-4">{projects[projectIndex].category}</h2>
            {/* Project title */}
            <h3 className="text-[24px] md:text-[32px] font-bold leading-none text-white mb-2">{projects[projectIndex].title}</h3>
            {/* Project description */}
            <p className="text-slate-400 mb-6">{projects[projectIndex].description}</p>
            {/* Tech stack */}
            <div className="flex gap-4 text-lg font-medium text-blue-700">
              <span className="text-base text-white">Stack: </span>
              {projects[projectIndex].stack.map((tech, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                        {renderStackIcon(tech)}
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>{tech}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* Role */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span>Role: </span>
              <div className="flex flex-wrap gap-2">
                {projects[projectIndex].role.map((role, index) => (
                  <motion.span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.2 }}>
                    {role}
                  </motion.span>
                ))}
              </div>
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
                    <Link href={projects[projectIndex].github} target="_blank">
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
          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation // Enable navigation buttons (Next, Prev)
              grabCursor={true} // Enable cursor drag functionality
              modules={[Navigation]} // Add Navigation module to Swiper
              onSlideChange={(swiper) => setProjectIndex(swiper.activeIndex)}
              className="relative"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[250px] md:h-[460px] lg:h-[400px] relative group flex justify-center items-center bg-slate-500">
                    {/* overlay */}
                    <div className="absolute top-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt={project.title} />
                    </div>
                    {/* Project title on slide */}
                    {/* <div className="absolute bottom-5 left-5 text-white text-2xl bg-slate-900 px-2 shadow-lg rounded-lg bg-opacity-30 font-bold z-20">{project.title}</div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
