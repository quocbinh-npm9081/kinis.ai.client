import Image from 'next/image'
import React from 'react'

const RoadMapSection = () => {
  return (
    <section 
      className='flex flex-col items-center justify-start h-[120vh] w-screen py-28 bg-white'
    >
      <div className='relative w-[90%] h-[636px]'>
        <Image src='/images/Frame.png' alt='roadmap' fill className='object-fill w-auto h-auto'/>
      </div>
       
    </section>
  )
}
export default RoadMapSection