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
import { AnimatePresence, useScroll, useTransform, motion} from "framer-motion";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
console.log(y);

  }, [y]);

  return (
      <AnimatePresence>
        <main className="relative" ref={containerRef} >
          <motion.div >
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
          </motion.div>
        </main>
      </AnimatePresence>
  );
}

