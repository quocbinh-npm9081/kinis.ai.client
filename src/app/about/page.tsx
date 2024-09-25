import AboutUsSection from '@/app/sections/AboutPage/AboutUsSection'
import InterestedPartnerSection from '@/app/sections/AboutPage/InterestedPartnerSection'
// import InterestedPartnerSection from '@/app/sections/AboutPage/InterestedPartnerSection'
import InvestorSection from '@/app/sections/AboutPage/InvestorSection'
import OurTechnologySection from '@/app/sections/AboutPage/OurTechnologySection'
import FooterSection from '@/app/sections/HomePage/FooterSection'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About"
};

const About = () => {
  return (
    <main>
        <AboutUsSection />
        <OurTechnologySection />
        <InvestorSection />
        <InterestedPartnerSection />
        <FooterSection isShowCartPartnerShip={false}/>
    </main>
  )
}

export default About