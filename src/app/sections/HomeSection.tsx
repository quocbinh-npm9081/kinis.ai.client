import Image from 'next/image'
import React from 'react'
import {  motion, useScroll, useTransform} from 'framer-motion'
import Link from 'next/link'
const HomeSection = () => {
  const { scrollYProgress } = useScroll();
  const color = useTransform(scrollYProgress, [0, 1], ['#000000', '#FFFFFF']); // Chuyển đổi từ màu đen sang trắng

  return (
    // <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
    //   <motion.div
    //     style={{
    //       position: 'absolute',
    //       top: '0',
    //       left: '0',
    //       width: '100%',
    //       height: '100%',
    //       backgroundImage:  `url(/images/Home_page.png)`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //     }}
    //   />
    //   <motion.div
    //     style={{
    //       position: 'absolute',
    //       top: '0',
    //       left: '0',
    //       width: '100%',
    //       height: '100%',
    //       backgroundImage: `url(/images/image8.png)`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //       mixBlendMode: 'multiply',
    //     }}
    //   />
    //   <motion.div style={{ color, position: 'relative', zIndex: 1 }}>
    //     <h1>Scroll to Change Color</h1>
    //   </motion.div>
    // </div>
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