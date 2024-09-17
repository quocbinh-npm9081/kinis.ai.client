import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import localFont from "next/font/local";
import { useScroll, useTransform } from 'framer-motion';

const PPEditorialNewSans = localFont({
  src: "../fonts/PPEditorialNew-Italic.otf",
  variable: "--font-PPEditorialNew-sans",
  weight: "100 900",
});
const HomeSection = () => {
  const { scrollYProgress } = useScroll();
  const options = {
    // ease: [[0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0], [0.7, 0, 0.84, 0]]
  };
  const x = useTransform(scrollYProgress, [0, 0.7, 1], [800, 0, 0], options);
  const y = useTransform(scrollYProgress, [0, 0.7, 1], [-200, 0, 200], options);
  const opacity = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.9, 1],
    [0, 1, 1, 0],
    options
  );

  return (
    <section className='relative flex min-h-screen w-screen overflow-hidden'> 
       {/* TOP NAVIGATION */}
       <div className="fixed top-0 left-0 w-full" style={{zIndex: 100}}>
          <div className="flex items-center justify-between container mx-auto mt-2 py-2 px-11 bg-white rounded-lg">
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
                  <Link href="/technology">Our Technology</Link>
                </li>
                <li>
                  <Link href="/product">Our Product</Link>
                </li>
              </ul>
            </div>
            <div className="menu">

            </div>
          </div>
       </div>
      {/* TOP NAVIGATION */}

      {/* HERO SECTION */}
      <div className="flex flex-col w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(/images/banner.png)`}}>
        <div className='container mx-auto  grid grid-cols-2 grid-rows-2 w-full'>
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
    </section>
   
  )
}

export default HomeSection