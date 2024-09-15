import Image from 'next/image'
import React from 'react'
import {  motion, useScroll, useTransform} from 'framer-motion'
import Link from 'next/link'
const HomeSection = () => {

  return (
    <section className='relative flex min-h-screen w-screen overflow-hidden'> 
       {/* TOP NAVIGATION */}
       <div className="fixed top-0 left-0 w-full z-50">
          <div className="flex items-center justify-between mx-auto ">
            <Image src="/images/logo.svg" alt="logo" width={100} height={100} priority={true} className='w-auto h-auto'/>
            <div className="flex items-center ">
              <ul className="flex items-center gap-9 font-bold">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Kinis</Link>
                </li>
                <li>
                  <Link href="/technology">Our Technology</Link>
                </li>
                <li>
                  <Link href="/product">Our Product</Link>
                </li>
              </ul>
            </div>
            <div className="menu">

            </div>
          </div>
       </div>
      {/* TOP NAVIGATION */}

      {/* HERO SECTION */}
      <div className="flex w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(/images/Home_page.png)`}}>
       
      </div>
    </section>
  )
}

export default HomeSection