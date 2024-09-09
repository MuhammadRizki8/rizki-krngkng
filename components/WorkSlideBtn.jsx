'use client';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

const WorkSlideBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute inset-0 xl:bottom-0  items-center xl:right-0 xl:flex xl:justify-end xl:items-end  xl:p-0 z-20 flex justify-between">
      {/* Tombol kiri - di tengah kiri pada layar kecil, kanan bawah pada layar besar */}
      <button
        className="h-fit bg-blue-700 hover:bg-blue-700 rounded-sm p-2 text-xl text-blue-700 hover:text-slate-300 transition duration-300 xl:absolute xl:left-4 xl:top-1/2 xl:transform xl:-translate-y-1/2"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className="text-2xl text-slate-900" />
      </button>

      {/* Tombol kanan - di tengah kanan pada layar kecil, kanan bawah pada layar besar */}
      <button
        className="h-fit bg-blue-700 hover:bg-blue-700 rounded-sm p-2 text-xl text-blue-700 hover:text-slate-300 transition duration-300 xl:absolute xl:right-4 xl:top-1/2 xl:transform xl:-translate-y-1/2"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className="text-2xl text-slate-900" />
      </button>
    </div>
  );
};

export default WorkSlideBtn;
