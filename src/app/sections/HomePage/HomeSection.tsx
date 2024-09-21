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
  
  const {scrollYProgress} = useScroll();
  const [scope, animate] = useAnimate();

  const y = useTransform(scrollYProgress, [0,  1], [0,-5900])

  useEffect(()=>{
    const handleScroll = () => {
      const latest = scrollYProgress.get();
      animate(scope.current, {
        height: `${(1 - latest / 0.111) * 100}vh`,
        // transition: { type: 'spring', stiffness: 100 }
      })
    }
    scrollYProgress.on("change", handleScroll);
    return ()=> scrollYProgress.clearListeners();
  }, [scrollYProgress, animate, scope])

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true); // true if the page is not scrolled or fully scrolled back
  const [isInView, setIsInView] = useState(true);
  const scrollVelocity = useVelocity(scrollYProgress);

  const slideDistance = 100; // if we are sliding out a nav bar at the top of the screen, this will be it's height
  // const threshold = 200; // only slide it back when scrolling back at velocity above this positive (or zero) value
  useEffect(
    () =>
      scrollVelocity.on("change",(latest) => {
        console.log("scrollVelocity latest : ",latest);
        
        if (latest > 0) {
          setIsScrollingBack(false);
          return;
        }
        if (latest < -0) {
          setIsScrollingBack(true);
          return;
        }
      }),
    []
  );

  useEffect(() => scrollYProgress.on("change",(latest) => {
    setIsAtTop(latest == 0)
  }), []);

  useEffect(() => setIsInView(isScrollingBack || isAtTop), [
    isScrollingBack,
    isAtTop
  ]);
 
  return (
    <section className='sticky flex h-screen w-screen overflow-hidden top-0 '> 
          {/* TOP NAVIGATION */}
    <motion.div 
      className="fixed top-0 left-0 w-full" 
      style={{zIndex: 100, height: slideDistance}}
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
    >
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
    </motion.div>
          {/* TOP NAVIGATION */}

      {/* HERO SECTION */}
      <div className="flex flex-col w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat absolute top-0 left-0" style={{backgroundImage: `url(/images/banner.png)`}}>

         
      </div>

      <div className="flex flex-col w-full h-screen items-center justify-start absolute top-1/4 left-0">
        <div className='container mx-auto  grid grid-cols-2 grid-rows-2 w-full'>
            <div className='text-yellow-600 text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal max-w-[445px] text-start font-primary'>Revolutionizing Fall Risk Prediction</div>
            <div className='text-yellow-600 text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal italic max-w-[389px] text-center'></div>
            <div className='text-yellow-600 text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal italic max-w-[389px] text-center'></div>
            <div className='flex justify-end w-full'>
              <div className={`text-yellow-600 text-2xl 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-normal  max-w-[389px] text-end ${PPEditorialNewSans.className}`}>
                by AI-Powered Smart Insoles
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col w-full items-start gap-6">
            <div className="max-w-[480px] font-normal text-yellow-600  text-xl 2xl:text-2xl lg:text-xl md:text-sm sm:text-xs">
                Unveiling Our Cutting-Edge Fusion: Our Patent-Pending Bio Sensor Technology Combined with an Advanced Movement Prediction Model
            </div>
            <button className="bg-primary hover:bg-primary/95 text-yellow-600  font-bold py-4 px-8 rounded-full text-nowrap gap-10">
              Join Our Pilot Study!
            </button>
          </div>
      </div>

      <motion.div className="flex flex-col w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat absolute top-0 left-0 z-30" style={{y, backgroundImage: `url(/images/banner.png)` }}>
       
      </motion.div>

      <motion.div   ref={scope}  className="flex flex-col w-full h-screen items-center justify-start absolute top-1/4 left-0 z-40">
        <div className="overflow-hidden w-full top-0 flex flex-col items-start">
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
      </motion.div>
    </section>
  )
}

export default HomeSection