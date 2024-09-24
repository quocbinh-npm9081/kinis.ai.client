import Title from '@/app/components/Title/Title'
import React from 'react'

const ScienceBaseSection = () => {
  return (
    <section 
      className="flex flex-col w-screen  h-[130vh] items-center justify-start relative"
    >
        <div className="container mx-auto z-50">
            <div className="flex w-full flex-col items-center justify-center h-full gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 pt-20">
                <Title title="Science-Based Biomechanics" subtitle="at Your Fingertips" className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px]" />
                <div className="text-white text-center text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Kinis Ai Delivers Personalized, Lab-Quality Gait Analysis for Precision in Every Step.</div>
            </div>
        </div>
        <video className='absolute top-0 left-0 w-full h-full object-fill' autoPlay muted loop>
          <source src="/images/system.mov" type="video/mp4" />
        </video>
    </section>
  )
}

export default ScienceBaseSection