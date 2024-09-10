import Image from 'next/image'
import React from 'react'

const RoadMapSection = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen'>
        <Image src='/images/Frame.png' alt='roadmap' width={1680} height={636} />
    </section>
  )
}
export default RoadMapSection