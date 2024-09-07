'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

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

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-4xl text-blue-700" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-4 text-center text-2xl">
          <Link href="/">
            <h1 className=" text-2xl font-semibold">
              Muhammad<span className="text-blue-700">Rizki</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link key={index} href={link.path} className={`${link.path === pathname && 'text-blue-700 border-b-2 border-blue-700'} capitalize font-medium hover:text-blue-700 transition-all`}>
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;