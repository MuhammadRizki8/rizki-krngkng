import React from 'react';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import Link from 'next/link'; // Import Link dari Next.js

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rizki-muhammad-32b4b4203/',
    icon: <FiLinkedin size={24} />,
    hoverColor: 'hover:bg-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/MuhammadRizki8',
    icon: <FiGithub size={24} />,
    hoverColor: 'hover:bg-gray-600',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/krng_kng/',
    icon: <FiInstagram size={24} />,
    hoverColor: 'hover:bg-pink-500',
  },
];

const Social = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <Link href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
          <span className={`flex items-center justify-center w-12 h-12 text-blue-600 border border-blue-600 rounded-full transition duration-300 ${social.hoverColor} hover:text-white hover:shadow-lg`} aria-label={social.name}>
            {social.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Social;
