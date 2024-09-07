'use client';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiDocker, SiMongodb } from 'react-icons/si';

const about = {
  title: 'About me',
  description: 'I am a passionate web developer with a focus on creating responsive, user-friendly applications using the latest web technologies.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Muhammad Rizki',
    },
    {
      fieldName: 'Phone',
      fieldValue: '+6283164919535',
    },
    {
      fieldName: 'Experience',
      fieldValue: '2 Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indonesia',
    },
    {
      fieldName: 'Email',
      fieldValue: 'mrizki135790@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'Indonesia, English',
    },
  ],
};

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have experience working in both front-end and back-end development, specializing in building dynamic, responsive web applications.',
  items: [
    {
      company: 'icikiwir.inc',
      posisiton: 'Group Burden',
      duration: '2022 - present',
    },
    {
      company: 'icikiwir.inc',
      posisiton: 'Group Burden',
      duration: '2022 - present',
    },
    {
      company: 'icikiwir.inc',
      posisiton: 'Group Burden',
      duration: '2022 - present',
    },
    {
      company: 'icikiwir.inc',
      posisiton: 'Group Burden',
      duration: '2022 - present',
    },
    {
      company: 'icikiwir.inc',
      posisiton: 'Group Burden',
      duration: '2022 - present',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'I have a strong academic background in computer science and web development.',
  items: [
    {
      institution: 'icikiwir University',
      degree: 'Bachelor of Computer Science',
      duration: '2022 - present',
    },
    {
      institution: 'Online Courses',
      degree: 'Web Development Certification',
      duration: '2021 - 2022',
    },
    {
      institution: 'Online Courses',
      degree: 'Web Development Certification',
      duration: '2021 - 2022',
    },
    {
      institution: 'Online Courses',
      degree: 'Web Development Certification',
      duration: '2021 - 2022',
    },
    {
      institution: 'Online Courses',
      degree: 'Web Development Certification',
      duration: '2021 - 2022',
    },
  ],
};

// skills
const skills = {
  title: 'My Skills',
  description: 'I have experience working with a variety of web development technologies and tools.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <SiDocker />, name: 'Docker' },
    { icon: <SiMongodb />, name: 'MongoDB' },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <dev className="container max-w-6xl mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-14">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/*  experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{experience.title}</h3>
                <p className="max-w-[600px] text-slate-300 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-slate-800/55 h-36 py-6 px-8 rounded-xl shadow-lg flex flex-col justify-center items-center lg:items-start gap-3">
                        <span className="text-blue-400 font-medium">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left font-semibold text-white">{item.posisiton}</h3>
                        <p className="font-bold text-slate-400">{item.company}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*  education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{education.title}</h3>
                <p className="max-w-[600px] text-slate-300 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-slate-800/55 h-36 py-6 px-8 rounded-xl shadow-lg flex flex-col justify-center items-center lg:items-start gap-3">
                        <span className="text-blue-400 font-medium">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left font-semibold text-white">{item.degree}</h3>
                        <p className="font-bold text-slate-400">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*  skills*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{skills.title}</h3>
                <p className="max-w-[600px] text-slate-300 mx-auto xl:mx-0">{skills.description}</p>

                <ScrollArea className="h-[400px] overflow-y-auto">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.skillList.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center justify-center bg-slate-800/55 p-6 rounded-xl shadow-lg">
                        <div className="text-4xl text-blue-400">{skill.icon}</div>
                        <h4 className="text-xl text-center font-semibold text-white mt-3">{skill.name}</h4>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*  about me*/}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{about.title}</h3>
                <p className="max-w-[600px] text-slate-300 mx-auto xl:mx-0">{about.description}</p>

                <ScrollArea className="h-[400px] overflow-y-auto">
                  <div className="flex flex-col gap-4 text-slate-300 mx-auto xl:mx-0">
                    {about.info.map((info, index) => (
                      <div key={index} className="flex justify-start space-x-2 items-center text-lg">
                        <span className="text-slate-400">{info.fieldName}:</span>
                        <span className="text-white font-semibold">{info.fieldValue}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </dev>
    </motion.div>
  );
};

export default Resume;
