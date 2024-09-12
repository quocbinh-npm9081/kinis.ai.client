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
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";


export default function Home() {
  const containerRef = useRef(null);

  return (
    // <LocomotiveScrollProvider
    //   options={
    //     {
    //       smooth: true,
    //       smartphone: {
    //         smooth: true,
    //       },
    //       tablet: {
    //         smooth: true,
    //       },
    //     }
    //   }
    //   watch={
    //     [

    //     ]
    //   }
    //   containerRef={containerRef} 
    //   >
        <AnimatePresence > 
          <main>
            <HomeSection />
            <PartnerSection />
            <MapSection />
            <ScienceBaseSection />
            <FeatureSection />
            <KinisToolSection />
            <ExperienceClinicSection />
            <ColleagueSection/>
            <RoadMapSection/>
            <FooterSection />
          </main>
        </AnimatePresence>
      // </LocomotiveScrollProvider>
  );
}

