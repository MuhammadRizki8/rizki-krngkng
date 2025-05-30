import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
import MobileNav from './MobileNav';
const Header = () => {
  return (
    <header className="py-4 lg:py-6 text-white ">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Muhammad<span className="text-blue-700">Rizki</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
