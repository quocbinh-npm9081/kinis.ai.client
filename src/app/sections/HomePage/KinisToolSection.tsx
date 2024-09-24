import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'


export const KinisToolSection = () => {
  return (
    <section 
      className='relative flex flex-col min-h-screen items-center justify-start w-full bg-white'
    >
        <div className="flex flex-col items-center justify-start gap-10 py-16">
            <Title title="Introducing the" subtitle='Kinis Balance Assessment Tool' content='BAT' className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px]"/>
        </div>
        <div className='relative w-full h-[808px] mt-20'>
          <Image 
              className='object-cover' 
              src="/images/kinis_tool_section.gif" 
              alt='Kinis Tool' 
              fill 
              unoptimized
              priority={true}
          />
        </div>
    </section>
  )
}
