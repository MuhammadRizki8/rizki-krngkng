'use client';
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaGit, FaPhp, FaLaravel, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiDocker, SiMongodb, SiFlask, SiGooglecloud, SiFastapi } from 'react-icons/si';
import { DiMysql } from 'react-icons/di'; // MySQL icon
const about = {
  title: 'About me',
  description: 'Certified Google Associate Cloud Engineer with a background in cloud computing, data science, and software development. Passionate about creating efficient, scalable applications using modern technologies.',
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
      fieldValue: '2+ Years',
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
  description: 'I have experience in cloud computing, web development, mobile development, and teaching, specializing in creating efficient and scalable solutions.',
  items: [
    {
      company: 'PT Telkom Indonesia',
      position: 'DevOps Intern',
      duration: 'Sep 2024 - Present',
    },
    {
      company: 'Universitas Pendidikan Indonesia',
      position: 'Teaching Assistant',
      duration: 'Sep 2023 - Jun 2024',
    },
    {
      company: 'PT Sineas Kreatif Indonesia',
      position: 'Back End Developer',
      duration: 'Mar 2024 - May 2024',
    },
    {
      company: 'PT Sinergi Inovasi Tekno',
      position: 'Mobile Developer',
      duration: 'Jan 2024 - Mar 2024',
    },
  ],
};

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: 'With a strong academic foundation in computer science, I have complemented my formal education with specialized courses in cloud computing and web development.',
  items: [
    {
      institution: 'Universitas Pendidikan Indonesia',
      degree: 'S1 - Computer Science',
      duration: 'Sep 2021 - Present',
      score: 'GPA: 3.89/4.00',
    },
    {
      institution: 'Digital Talent',
      degree: 'Junior Web Developer',
      duration: 'Jul 2024 - Aug 2024',
      score: 'Score: 95/100',
    },
    {
      institution: 'Bangkit Academy',
      degree: 'Cloud Computing',
      duration: 'Aug 2023 - Jan 2024',
      score: 'Score: 92/100',
    },
    {
      institution: 'Rakamin Academy X IDX Partners',
      degree: 'Data Scientist',
      duration: 'Oct 2023 - Nov 2023',
      score: 'Score: 81/100',
    },
  ],
};

// skills
const skills = {
  title: 'My Skills',
  description: 'I have experience working with a wide array of technologies in software development, cloud computing, and data science.',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaPhp />, name: 'PHP' }, // Added PHP
    { icon: <FaLaravel />, name: 'Laravel' }, // Added Laravel
    { icon: <DiMysql />, name: 'SQL' }, // Added SQL
    { icon: <SiGooglecloud />, name: 'GCP' }, // Added Google Cloud Platform
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' }, // Added GitHub
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <SiFastapi />, name: 'FastAPI' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiDocker />, name: 'Docker' },
    // { icon: <SiMongodb />, name: 'MongoDB' },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container max-w-6xl mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-14">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{experience.title}</h3>
                <p className="max-w-[600px] text-slate-300 mx-auto xl:mx-0">{experience.description}</p>

                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-slate-800/55 h-40 py-6 px-8 rounded-xl shadow-lg flex flex-col justify-center items-center lg:items-start gap-3">
                        <span className="text-blue-400 font-medium">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left font-semibold text-white">{item.position}</h3>
                        <p className="font-bold text-slate-400">{item.company}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-4xl font-bold text-white">{education.title}</h3>
                <p className="max-w-[600px] text-slate-300 mx-auto xl:mx-0">{education.description}</p>

                <ScrollArea className="h-[400px] overflow-y-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-slate-800/55 h-52 py-6 px-8 rounded-xl shadow-lg flex flex-col justify-center items-center lg:items-start gap-3">
                        <span className="text-blue-400 font-medium">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left font-semibold text-white">{item.degree}</h3>
                        <p className="font-bold text-slate-400">{item.institution}</p>
                        <span className="text-slate-300">{item.score}</span> {/* Add score/GPA */}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
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

            {/* about me */}
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
      </div>
    </motion.div>
  );
};

export default Resume;
