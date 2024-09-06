import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/ui/Social';

const Home = () => {
  return (
    <section className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 space-y-8 xl:space-y-0">
          {/* Text */}
          <div className="text-center xl:text-left space-y-4 xl:space-y-6">
            <span className="block text-lg text-gray-500">Computer Science Student</span>
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold leading-tight">
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
          <div className="mt-8 xl:mt-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gray-200 rounded-full flex items-center justify-center">
              <span>Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
