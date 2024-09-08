import CartExperienceComponent from '@/app/components/Card/CartExperienceComponent/CartExperienceComponent'
import Title from '@/app/components/Title/Title'
import React from 'react'

const ExperienceClinicSection = () => {
  return (
    <section className='relative flex flex-col h-screen items-center justify-start'>
        <div className='flex flex-col items-center justify-start gap-10 py-16'>
            <Title title='Experience clinic-quality  <br/> balance assessment' subtitle='from the comfort of your home!'/>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            Item1
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="grid grid-cols-2 gap-4">
              <CartExperienceComponent title='Free Access' description='Our premium balance tool is now available at no cost within the Kinis ecosystem' bgColor='bg-cardExperienceDark' colorTitle='text-white' colorDescription='text-white'/>     
              <CartExperienceComponent title='Clinic-Quality Results' description='Get professional-grade insights without leaving your home' bgColor='bg-cardExperienceLight' colorTitle='text-dark' colorDescription='text-dark'/> 
              <CartExperienceComponent title='Free Access' description='Our premium balance tool is now available at no cost within the Kinis ecosystem' bgColor='bg-cardExperienceLight' colorTitle='text-dark' colorDescription='text-dark'/>     
              <CartExperienceComponent title='Clinic-Quality Results' description='Get professional-grade insights without leaving your home' bgColor='bg-cardExperienceDark' colorTitle='text-white' colorDescription='text-white'/>         
            </div>
            <div className="grid grid-cols-1 gap-4 w-full">
              <CartExperienceComponent title='Clinic-Quality Results' description='Get professional-grade insights without leaving your home' bgColor='bg-cardExperienceDark' colorTitle='text-white' colorDescription='text-white'/>         
            </div>
          </div>
        </div>
    </section>
  )
}

export default ExperienceClinicSection