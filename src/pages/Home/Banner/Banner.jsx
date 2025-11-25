import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import bannerImg1 from '../../../assets/banner/b-1.png';
import bannerImg2 from '../../../assets/banner/b-2.png';
import bannerImg3 from '../../../assets/banner/b-3.png';
import bannerImg11 from '../../../assets/banner/b-11.png';

const slides = [
  {
    id: 0,
    title: (
      <>
        We Make Sure Your <br />
        <span className="text-[#acc857]">Parcel Arrives</span> On Time <br />–
        No Fuss.
      </>
    ),
    description:
      'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
    image: bannerImg1,
  },
  {
    id: 1,
    title: (
      <>
        Fastest <br />
        <span className="text-[#acc857]">Delivery</span> & Easy <br />
        <span className="text-[#acc857]">Pickup</span>
      </>
    ),
    description:
      'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
    image: bannerImg2,
  },
  {
    id: 2,
    title: (
      <>
        Delivery in{' '}
        <span className="text-[#acc857]">
          30 <br /> Minutes
        </span>{' '}
        at your <br /> doorstep
      </>
    ),
    description:
      'Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.',
    image: bannerImg3,
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const interval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      // স্লাইড পরিবর্তন
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <div className="bg-white mt-8 mb-[100px] rounded-4xl lg:p-20 p-10">
      <div className="w-full rounded-4xl">
        {activeSlide && (
          <div className="transition-opacity duration-700 opacity-100">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 justify-between items-center px-5 sm:px-10">
              <div className="flex flex-col justify-center">
                {/*  */}
                <div className="relative">
                  <div className="w-40 h-20 md:w-[220px] md:h-[100px] mb-4">
                    <img
                      src={bannerImg11}
                      alt="Company Logo"
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <h1 className="text-secondary text-2xl sm:text-3xl md:text-[56px] font-extrabold leading-snug md:leading-[67px] mb-4">
                    {activeSlide.title}
                  </h1>
                  {/*  */}
                  <p className="mb-6 md:mb-8 text-sm sm:text-base">
                    {activeSlide.description}
                  </p>
                  {/* btns */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button className="bg-[#acc857] text-[#0a2e36] font-bold text-sm md:text-xl px-4 md:px-6 py-2 md:py-3 rounded-xl border-0 shadow-lg hover:bg-opacity-90 transition duration-300">
                        Track Your Parcel
                      </button>
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0a2e36] text-[#acc857] rounded-full flex items-center justify-center shadow-lg">
                        <FaArrowUp className="w-4 h-4 md:w-5 md:h-5 rotate-45" />
                      </div>
                    </div>
                    <button className="text-[#606060] bg-transparent rounded-xl text-sm md:text-xl px-4 md:px-6 py-2 md:py-3 border border-[#dadada] font-bold hover:bg-gray-50 transition duration-300">
                      Be A Rider
                    </button>
                  </div>

                  {/* indicator */}
                  <div className="absolute -bottom-6 left-0 flex z-20">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[3px] rounded-full mx-1 transition-all duration-300 ${
                          index === currentSlide
                            ? 'w-12 bg-[#0a2e36]'
                            : 'w-7 bg-[#cbdfe5]'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full h-[350px] md:h-[500px] lg:h-[500px] flex items-center justify-center rounded-2xl">
                <img
                  src={activeSlide.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
