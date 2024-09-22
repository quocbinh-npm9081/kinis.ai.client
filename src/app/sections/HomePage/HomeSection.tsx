import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import localFont from "next/font/local";
import { useScroll, useTransform, motion, useAnimate, useVelocity} from 'framer-motion';

const PPEditorialNewSans = localFont({
  src: "../../fonts/PPEditorialNew-Italic.otf",
  variable: "--font-PPEditorialNew-sans",
  weight: "100 900",
});
const HomeSection = () => {
  return (
    <section className='relative flex h-screen w-screen overflow-hidden top-0 z-[999] bg-white'> 
      {/* TOP NAVIGATION */}
      <div className="relative top-0 left-0 w-full z-[999]">
          <div className="flex items-center justify-between container mx-auto mt-2 py-2 px-11 bg-white rounded-lg z-[999]">
            <Image src="/images/logo.svg" alt="logo" width={100} height={100} priority={true} className='w-auto h-auto'/>
            <div className="flex items-center ">
              <ul className="flex items-center gap-9 font-bold">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Kinis</Link>
                </li>
                <li>
                  <Link href="/">Our Technology</Link>
                </li>
              </ul>
            </div>
            <div className="menu">

            </div>
          </div>
      </div>
      {/* TOP NAVIGATION */}

      {/* HERO SECTION */}
      <div className="flex flex-col w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat absolute top-0 left-0" style={{backgroundImage: `url(/images/banner.png)`}}>

        
      </div>

      <div className="flex flex-col w-full h-screen items-center justify-start absolute top-1/4 left-0">
        <div className='overflow-hidden w-full top-0 flex flex-row items-start'>
          <div className='overflow-hidden h-full pt-[100px] pl-[50px] absolute left-0 flex flex-col items-center gap-4'>
              <div className='text-nowrap font-bold text-xl text-black vertical-text rotate-360 '>Follow us</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                  <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                </svg>
              </div>
          </div>
          <div className="overflow-hidden w-full top-0 flex flex-col items-start">
            <div className='container mx-auto grid grid-cols-2 grid-rows-2 w-full'>
                <div className='text-black text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal max-w-[445px] text-start font-primary'>Revolutionizing Fall Risk Prediction</div>
                <div className='text-black text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal italic max-w-[389px] text-center'></div>
                <div className='text-black text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal italic max-w-[389px] text-center'></div>
                <div className='flex justify-end w-full'>
                  <div className={`text-black text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal  max-w-[389px] text-end ${PPEditorialNewSans.className}`}>
                    by AI-Powered Smart Insoles
                  </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col w-full items-start gap-6">
              <div className="max-w-[480px] font-normal text-black text-xl 2xl:text-2xl lg:text-xl md:text-sm sm:text-xs">
                    Unveiling Our Cutting-Edge Fusion: Our Patent-Pending Bio Sensor Technology Combined with an Advanced Movement Prediction Model
              </div>
              <button className="bg-primary hover:bg-primary/95 text-white font-bold py-4 px-8 rounded-full text-nowrap gap-10">
                  Join Our Pilot Study!
              </button>
            </div>
          </div>
        </div>
      </div>

  

 
    </section>
  )
}

export default HomeSection