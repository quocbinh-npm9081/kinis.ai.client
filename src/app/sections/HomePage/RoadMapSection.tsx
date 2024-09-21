import Image from 'next/image'
import React from 'react'

const RoadMapSection = () => {
  return (
    <section className='flex flex-col items-center justify-start h-[120vh] py-28 bg-white'>
        <Image src='/images/Frame.png' alt='roadmap' width={1680} height={636} className='w-auto h-auto'/>
       
    </section>
  )
}
export default RoadMapSection