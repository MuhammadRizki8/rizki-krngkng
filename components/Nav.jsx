'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className={`${link.path === pathname && 'text-blue-700 border-b-2 border-blue-700'} capitalize font-medium hover:text-blue-700 transition-all`}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
