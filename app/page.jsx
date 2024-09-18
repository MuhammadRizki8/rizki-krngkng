'use client';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Social from '@/components/ui/Social';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  // Data description di sini
  // Data description di sini
  const description = ['Computer Science Student', 'Associate Cloud Engineer', 'Junior Web Developer', 'AI Enthusiast'];

  return (
    <section className="h-full max-w-6xl mx-auto">
      <div className="pb-4 container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between space-y-4 xl:space-y-0">
          {/* Text */}
          <div className="text-center xl:text-left space-y-4 xl:space-y-6 order-2 xl:order-none">
            <span className="block text-base sm:text-lg text-blue-600">
              {/* <span className="text-white">A </span> */}
              {/* Typewriter Effect */}
              <Typewriter words={description} loop={true} cursor cursorStyle="_" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </span>
            <h1 className="text-3xl sm:text-5xl xl:text-7xl font-semibold leading-tight">
              Hello, I&apos;m <br />
              <span className="text-blue-700">Muhammad Rizki</span>
            </h1>
            <p className="mb-6 max-w-md xl:max-w-xl text-white/80 mx-auto xl:mx-0">I am a final-year Computer Science student at Universitas Pendidikan Indonesia with interests in software development, data science, and cloud computing.</p>
            {/* buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4 sm:gap-6">
              <Button variant="outline" size="lg" className="uppercase ">
                <a className="flex gap-2 items-center" href="/assets/CV_Muhammad_Rizki.pdf" download>
                  <span>Download CV</span> <FiDownload className="text-xl" />
                </a>
              </Button>
              <Social />
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none pb-4 xl:pb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
