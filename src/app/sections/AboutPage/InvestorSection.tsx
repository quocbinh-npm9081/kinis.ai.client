// 'use client'
import CardTextBasicComponent from '@/app/components/Card/CardTextBasicComponent/CardTextBasicComponent';
import CardTextBasicFullComponent from '@/app/components/Card/CardTextBasicFullComponent/CardTextBasicFullComponent';
import localFont from 'next/font/local';
import Image from 'next/image';
import React from 'react'
// import styled from 'styled-components'

// const BgOverlayStyleComponent = styled.div.attrs(
//     props => ({className : props.className})
// )`background: rgb(0,0,0);
// background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3477766106442577) 72%);

// `
const PPEditorialNewSans = localFont({
    src: "../../fonts/PPEditorialNew-Italic.otf",
    variable: "--font-PPEditorialNew-sans",
    weight: "100 900",
  });

const InvestorSection = () => {
  return (
    <section className=' relative h-auto w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-2 md:pb-4 lg:pb-6 xl:pb-8 2xl:pb-10 bg-[#f9f9f9]'>
        <div 
            className='relative mx-auto px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[10rem] py-[2rem] md:py-[4rem] xl:py-[6rem] 2xl:py-[8rem] gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 flex flex-col h-full w-full rounded-t-[3rem] overflow-hidden' 
            style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.8491771708683473) 14%, rgba(0,0,0,0.5830707282913166) 39%, rgba(212,165,165,0.3477766106442577) 70%, rgba(212,165,165,0) 98%)'}}
        >
            <Image src="/images/investor_vector.png" alt="investor_vector" width={378.26} height={676.59} className='absolute top-0  right-0'/>
                <div className='flex flex-row w-full items-center justify-start text-white gap-4'>
                    <h2 className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-6 md:leading-10 2xl:leading-[57.6px]'>
                        Why Partner
                    </h2>
                    <span className={`font-normal text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-6 md:leading-10 2xl:leading-[60px] ${PPEditorialNewSans.className}`}>
                    with Kinis AI?
                    </span>
                </div>

                <div className="grid grid-rows-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <CardTextBasicComponent 
                            title="Enhance Patient Outcomes" 
                            description="Leverage our advanced technology to prevent falls and improve mobility."
                        />                    
                        <CardTextBasicComponent 
                            title="Stay Ahead in Healthcare Innovation" 
                            description="Work with a team at the forefront of AI and biosensor technology." 
                        />
                        <CardTextBasicComponent 
                            title="Align with Industry Standards" 
                            description="Our solutions are designed according to the APTA guidelines, ensuring clinical relevance and applicability" 
                        />
                    </div>
                    <div>
                        <CardTextBasicFullComponent 
                            title="Align with Industry Standards" 
                            description={`"What truly captivates me is Kinis' ingenious melding of artificial intelligence, pressure mapping sensors, and user-centric design. This holistic, multidisciplinary strategy, which synergizes clinical science, machine learning, and engineering expertise, sets a new bar for care for older adults."`}
                            img='/images/investor_doctor.png'
                            infoImg={{
                                height: 330,
                                width: 284,
                                name : "Dr. Tracey Gendron, PhD",
                                institution : "Virginia Commonwealth University",
                                position : "Associate Professor and Chair, Department of Gerontology  Executive Director, Virginia Center on Aging"
                            }}
                        />
                    </div>
                </div>

        </div>
    </section>
  )
}

export default InvestorSection