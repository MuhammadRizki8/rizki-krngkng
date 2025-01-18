import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaGit, FaPhp, FaLaravel, FaGithub, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiDocker, SiMongodb, SiFlask, SiGooglecloud, SiFastapi, SiGoland, SiJenkins } from 'react-icons/si';
import { DiMysql } from 'react-icons/di'; // MySQL icon
export const about = {
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

export const certification = {
  icon: '/assets/resume/cap.svg',
  title: 'My Certifications',
  description: 'These certifications demonstrate my commitment to continuous learning and staying updated with industry trends.',
  items: [
    {
      name: 'Associate Cloud Engineer',
      issuedBy: 'Google Cloud',
      dateObtain: 'March 2024',
      link: 'https://www.credly.com/badges/464e830b-18f3-41a3-a91a-e5434359f654/linked_in_profile',
    },
    {
      name: 'Junior Web Developer',
      issuedBy: 'BNSP',
      dateObtain: 'September 2024',
    },
    {
      name: 'Database Administrator',
      issuedBy: 'BNSP',
      dateObtain: 'December 2024',
    },
  ],
};
// experience data
export const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have experience in cloud computing, web development, mobile development, and teaching, specializing in creating efficient and scalable solutions.',
  items: [
    {
      company: 'PT Telkom Indonesia',
      position: 'DevOps Engineer Intern',
      duration: 'Sep 2024 - Des 2024',
    },
    {
      company: 'Universitas Pendidikan Indonesia',
      position: 'Teaching Assistant',
      duration: 'Sep 2023 - Jun 2024',
    },
    {
      company: 'PT Sineas Kreatif Indonesia',
      position: 'Back End Developer Intern',
      duration: 'Mar 2024 - May 2024',
    },
    {
      company: 'PT Sinergi Inovasi Tekno',
      position: 'Mobile Developer Intern',
      duration: 'Jan 2024 - Mar 2024',
    },
    {
      company: 'SMAN 13 Bandung',
      position: 'Web Developer',
      duration: 'Mar 2023 - Jun 2023',
    },
  ],
};

// education data
export const education = {
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
export const skills = {
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
    { icon: <SiGoland />, name: 'Golang' }, 
    { icon: <SiJenkins />, name: 'Jenkins' }, 
    { icon: <FaWordpress />, name: 'WordPress' },
  ],
};
