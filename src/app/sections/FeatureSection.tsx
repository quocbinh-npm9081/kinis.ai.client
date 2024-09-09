'use client'
import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'

import { Cormorant_Garamond } from 'next/font/google'
import styled from 'styled-components'
import FeatureItem from '@/app/components/FeatureItem'
import ButtonPrimary from '@/app/components/Button/ButtonPrimary'

const subFont = Cormorant_Garamond({
  style: "italic",
  subsets: ["latin"],
  weight: ["400", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond"
})

const BorderLeft = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 4px;  
  border-left: 1px solid black;
  z-index: -1;
`

const TitleFeatureOverlay = styled.div<{$content: string}>`
    position: relative;
    font-size: 2.25rem /* 36px */;
    line-height: 2.5rem /* 40px */;
    font-weight: 700;
    &::before {
      content: "${props => props.$content}";
      position: absolute;
      top: 0;
      left: 0;
      font-size: 11.25rem /* 36px */;
      line-height: 2.5rem /* 40px */;
      font-weight: 700;
      padding: 10px;
      color: '#F3742D';
      opacity: 0.05;

    }
`


const FeatureSection = () => {
  return (
    <section>
        <div className="container mx-auto py-20">
          <Title title="Smart Insoles, AI, and Expert Care:" subtitle="The Kinis Mobility Ecosystem" className='text-dark text-4xl md:text-5xl' />
          <div className="relative flex flex-col items-start mt-20 py-10 gap-10 w-full">
              <BorderLeft />
              <FeatureItem 
                content="01" 
                title=" Wear your <br/> K1 Smart Insoles " 
                description="Our smart insoles, equipped with Innovative Quad Bio Sensors, capture 360-degree movement data as you go about your day." 
                list={["Seamless integration with any footwear", "All-day comfort for continuous use", "Water-resistant and shock-absorbing design"]} 
              />

              <FeatureItem 
                content="02" 
                title="Move <br/> your Body" 
                description="Slip Kinis smart insoles into your everyday shoes.<br/> Comfortable, durable, and packed with sensors." 
                list={["High-precision sensors record gait, balance, and pressure points", "Continuous data collection during various activities (walking, running, workouts)", "Water-resistant and shock-absorbing design"]} 
              />

              <FeatureItem 
                content="03" 
                title="Now, <br/> Check your phone!" 
                description="Kinis detects subtle risk factors in your gait, balance, and posture, providing actionable biomechanical analytics &  personalized insights to keep you safe and mobile." 
                list={["Advanced AI algorithms process raw data", "Comprehensive gait and balance metrics", "Easy-to-understand visualizations and reports", "Real-time risk assessments"]} 
                img="/images/iPhone-13-Pro-Front.png"
              />
             
              <FeatureItem 
                content="04" 
                title="Personalized Insights <br/> and Expert Feedback" 
                description="Receive tailored advice and connect with professionals to optimize your mobility health." 
                list={["AI-generated personalized recommendations", "Direct connection to qualified physical therapists/coaches", "Tele-health consultations based on your data", "Customized exercise plans and progress tracking"]} 
                img="/images/iPhone-13-Pro-Front.png"
              />
            <div className="mx-auto flex flex-row rounded-lg items-center justify-center gap-6 w-auto p-8 shadow-shadow-footer bg-[#f0f0f0]">
              <p className="text-2xl font-bold ">Want to learn more about our Technology?</p>
              <ButtonPrimary text="Learn more" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default FeatureSection