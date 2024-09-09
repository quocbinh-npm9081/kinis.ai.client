import React from 'react'
import Title from '@/app/components/Title/Title'
import CardColleagueComponent from '@/app/components/Card/CardColleagueComponent/CardColleagueComponent'

const ColleagueSection = () => {
  return (
    <section className='relative flex flex-col min-h-screen items-center justify-start bg-black'>
        <div className="flex flex-col items-center justify-start gap-10 py-16">
            <Title title="Our Science team:" subtitle='Backed by 100+ years of combined experience' content='' className="text-white text-3xl 2xl:text-4xl"/>
        </div>
        <div className='flex flex-row items-center justify-center gap-10 h-full w-full'>
            <CardColleagueComponent title='Dr. John Doe' img='/images/our-team 1.png' className='w-56 h-96'/>
            <CardColleagueComponent title='Dr. John Doe' img='/images/our-team 1.png' className='w-56 h-80'/>
            <CardColleagueComponent title='Dr. John Doe' img='/images/our-team 1.png' className='w-56 h-80'/>
            <CardColleagueComponent title='Dr. John Doe' img='/images/our-team 1.png' className='w-56 h-80'/>
            <CardColleagueComponent title='Dr. John Doe' img='/images/our-team 1.png' className='w-56 h-80'/>
        </div>

    </section>
  )
}

export default ColleagueSection