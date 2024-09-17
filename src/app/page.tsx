'use client'
import ColleagueSection from "@/app/sections/ColleagueSection";
import ExperienceClinicSection from "@/app/sections/ExperienceClinicSection";
import FeatureSection from "@/app/sections/FeatureSection";
import HomeSection from "@/app/sections/HomeSection";
import { KinisToolSection } from "@/app/sections/KinisToolSection";
import MapSection from "@/app/sections/MapSection";
import PartnerSection from "@/app/sections/PartnerSection";
import FooterSection from "@/app/sections/FooterSection";
import RoadMapSection from "@/app/sections/RoadMapSection";
import ScienceBaseSection from "@/app/sections/ScienceBaseSection";
import { useEffect, useState } from "react";


export default function Home() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   useEffect(() => {
// console.log(y);

//   }, [y]);

const [allowScroll, setAllowScroll] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setAllowScroll(true);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
      // <AnimatePresence>
        <main className={allowScroll ? 'overflow-y-auto' : 'overflow-y-hidden'}>
          <HomeSection />
          <PartnerSection />
          <MapSection />
          <ScienceBaseSection />
          <FeatureSection />
          <KinisToolSection />
          <ExperienceClinicSection />
          <ColleagueSection />
          <RoadMapSection />
          <FooterSection />
        </main>
      // </AnimatePresence>
  );
}

