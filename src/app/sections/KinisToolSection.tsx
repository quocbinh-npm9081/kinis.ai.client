import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'

export const KinisToolSection = () => {
  return (
    <section className='relative flex flex-col min-h-screen items-center justify-start'>
        <div className="flex flex-col items-center justify-start gap-10 py-16">
            <Title title="Introducing the" subtitle='Kinis Balance Assessment Tool' content='BAT' className="text-black text-3xl 2xl:text-4xl"/>
        </div>
        <Image className='object-cover mt-20 w-auto h-auto' src="/images/image (8).png" alt='Kinis Tool' width={1920} height={808}   />
    </section>
  )
}
