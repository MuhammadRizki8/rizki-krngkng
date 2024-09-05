import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
const Header = () => {
  return (
    <header className="py-8 lg:py-12 text-white ">
      <div className="container lg:px-10 mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className=" text-4xl font-semibold">
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
        <div className="lg:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
