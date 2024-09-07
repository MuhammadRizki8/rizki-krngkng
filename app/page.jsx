import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/ui/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
const Home = () => {
  return (
    <section className="h-full max-w-6xl mx-auto">
      <div className="pb-4 container mx-auto h-full">
        <div className=" flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0">
          {/* Text */}
          <div className="text-center xl:text-left space-y-4 xl:space-y-6 order-2 xl:order-none">
            <span className="block text-base sm:text-lg text-gray-500">Computer Science Student</span>
            <h1 className="text-3xl sm:text-5xl xl:text-7xl font-semibold leading-tight">
              Hello, I&apos;m <br />
              <span className="text-blue-700">Muhammad Rizki</span>
            </h1>
            <p className="mb-6 max-w-md xl:max-w-lg text-white/80 mx-auto xl:mx-0">I don&apos;t know why I&apos;m doing this, but I hope you have a good day!</p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-6">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span> <FiDownload className="text-xl" />
              </Button>
              <Social />
            </div>
          </div>

          {/* Photo */}
          <div className=" order-1 xl:order-none pb-4 xl:pb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
