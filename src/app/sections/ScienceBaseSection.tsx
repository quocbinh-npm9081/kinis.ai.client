import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const DarkOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
 background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8431022067029936) 50%, rgba(0,0,0,0.680637220708596) 100%);
    z-index: 1;
`


const ScienceBaseSection = () => {
  return (
    <section className="flex flex-col w-full h-[100vh] items-center justify-start relative">
        <DarkOverlay />
        <div className="container mx-auto z-10">
            <div className="flex w-full flex-col items-center justify-center h-full gap-6 pt-20">
                <Title title="Science-Based Biomechanics" subtitle="at Your Fingertips" className="text-white" />
                <div className="text-white text-center text-2xl">Kinis Ai Delivers Personalized, Lab-Quality Gait Analysis for Precision in Every Step.</div>
            </div>
        </div>
        <Image className="object-fill" src="/images/science_base.png" alt="science base" fill={true} />
    </section>
  )
}

export default ScienceBaseSection