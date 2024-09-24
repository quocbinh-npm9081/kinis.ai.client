import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import localFont from "next/font/local";
import { motion } from 'framer-motion';

interface CirclePosition {
  top: string;
  left: string;
}


interface FeatureItemComponentProps {
  content: string;
  title: string;
  description: string;
  list: string[];
  img?: string;
  imgs? : string;
  mov?: string;
  className?: string;
  circlePosition: CirclePosition;
  zIndex?: boolean;
  unoptimized?: boolean 
}



const PPEditorialNewSans = localFont({
  src: "../fonts/PPEditorialNew-Italic.otf",
  variable: "--font-PPEditorialNew-sans",
  weight: "100 900",
}); 



const BeforeElement = styled.div.attrs(
  props => ({className : props.className})
)<{ $content: string }>`
  &::before {
    content: "${props => props.$content}";
    position: absolute;
    top: -80px;
    left: 0;
    font-size: 15rem; /* 240px */
    line-height: 15rem; /* 240px */
    font-weight: 700;
    padding: 10px;
    color: #F3742D;
    opacity: 0.05;
  }
`;

const FeatureItemContainer = styled(motion.div)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`

const CircleBgOverlay = styled.div<{$circlePosition: CirclePosition}>`
  position: absolute;
  top: ${props => props.$circlePosition.top};
  left: ${props => props.$circlePosition.left};
  width: 700px; /* Đặt chiều rộng của hình tròn */
  height: 700px; /* Đặt chiều cao của hình tròn */
  border-radius: 50%;
  opacity: 0.75;
background: rgb(243,116,45);
background: radial-gradient(circle, rgba(243,116,45,0.6951155462184874) 5%, rgba(243,116,45,0.5382528011204482) 18%, rgba(243,116,45,0.3337710084033614) 39%, rgba(255,255,255,0.7035189075630253) 72%, rgba(255,255,255,0.9612219887955182) 86%, rgba(255,255,255,1) 100%);

//   background: rgb(243,116,45);
// background: radial-gradient(circle, rgba(243,116,45,0.6951155462184874) 5%, rgba(243,116,45,0.5382528011204482) 18%, rgba(243,116,45,0.3337710084033614) 39%, rgba(255,255,255,0.7035189075630253) 75%, rgba(255,255,255,1) 100%);
`


const textParts = (text: string) => {
  return text.split(/(<br\/>|<brline\/>)/).map((part, index) => {
    if (part === '<br/>') {
      return <br key={index} />;
    } else if (part === '<brline/>') {
      return (
        <React.Fragment key={index}>
          <br />
          <br />
        </React.Fragment>
      );
    } else {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });
};

const FeatureItemComponent = ({
  content, 
  title, 
  description, 
  list, 
  img, 
  imgs,
  mov ,
  zIndex,
  circlePosition={top: '0', left: '0' },
  unoptimized=false}: FeatureItemComponentProps) => {
  return (
    <FeatureItemContainer 
      className="h-[100vh] feature_item flex-col md:flex-row pl-4 md:pl-36 border-l-[16px] border-black w-full gap-20 md:gap-24 lg:gap-28 xl:gap-32 2xl:gap-36" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <CircleBgOverlay $circlePosition={circlePosition}/>
      <div className="feature_info flex flex-col gap-7 md:gap-8 lg:gap-9 xl:gap-10 2xl:gap-11 w-full md:w-1/2 z-50">
        <div className='relative text-xl md:text-lg lg:text-4xl 2xl:text-5xl font-bold text-[#222222] 2xl:leading-10' >
          <BeforeElement $content={content}/>
          {textParts(title)}
        </div>
        <p className={`feature_info-description text-[#1A202C] text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light leading-5 md:leading-6 lg:xl:leading-7 xl:leading-8 2xl:leading-9 2xl:tracking-[0.01em] ${PPEditorialNewSans.className}`}>
          {textParts(description)}
        </p>
        <ul className="feature_intro-list flex flex-col gap-1 md:gap-2 lg:gap-3 xl:gap-4">
          {
            list.map((item, index) => (
              <li 
                key={index} 
                className="feature_intro-item flex items-center text-[#262626] gap-2 justify-start text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
              >
                <Image 
                  src="/images/star_icon.svg" alt=""
                  width={20} 
                  height={20} 
                /> 
                  {item}
                </li>
            ))
          }
        </ul>
      </div>
      <div className={`relative  feature_img w-1/2 h-full flex items-center justify-center ${zIndex ? 'z-50' : ''}`}>
        <div className="relative feature_img w-full h-full flex items-center justify-center">
            {img && <Image 
                        overrideSrc={imgs && imgs}
                        src={img} alt={title} 
                        width={200} height={300}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                        className="object-cover rounded-xl h-auto w-auto" 
                        unoptimized={unoptimized}
                    />}



            {mov && <video className='rounded-xl h-auto w-auto object-cover' controls>
                      <source src={mov} type="video/mp4" />
                   </video>}
        </div>
      </div>
    </FeatureItemContainer>
  )
}

export default FeatureItemComponent


