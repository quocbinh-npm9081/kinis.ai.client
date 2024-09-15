import { Cormorant_Garamond } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

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
  className?: string;
  circlePosition: CirclePosition;
  zIndex?: boolean;
}

const subFont = Cormorant_Garamond({
    style: "italic",
    subsets: ["latin"],
    weight: ["400", "400", "500", "600", "700"],
    variable: "--font-cormorant-garamond"
  })

const TitleFeatureOverlay = styled.div<{$content: string}>`
    position: relative;
    font-size: 3rem /* 48px */;
    line-height: 3.6rem /* 57.6px */;
    font-weight: 700;
    &::before {
      content: "${props => props.$content}";
      position: absolute;
      top: -70%;
      left: 0;
      font-size: 15rem /* 240px */;
      line-height: 15rem /* 240px */;
      font-weight: 700;
      padding: 10px;
      color: '#F3742D';
      opacity: 0.05;

    }
`

const FeatureItemContainer = styled.div`
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
  width: 500px; /* Đặt chiều rộng của hình tròn */
  height: 500px; /* Đặt chiều cao của hình tròn */
  border-radius: 50%;
  opacity: 0.75;
background: rgb(243,116,45);
background: radial-gradient(circle, rgba(243,116,45,0.6951155462184874) 5%, rgba(243,116,45,0.5382528011204482) 18%, rgba(243,116,45,0.3337710084033614) 39%, rgba(255,255,255,0.7035189075630253) 72%, rgba(255,255,255,0.9612219887955182) 86%, rgba(255,255,255,1) 100%);

//   background: rgb(243,116,45);
// background: radial-gradient(circle, rgba(243,116,45,0.6951155462184874) 5%, rgba(243,116,45,0.5382528011204482) 18%, rgba(243,116,45,0.3337710084033614) 39%, rgba(255,255,255,0.7035189075630253) 75%, rgba(255,255,255,1) 100%);
`


const textParts = (text: string) => text.split('<br/>').map((part, index) => (
  <React.Fragment key={index}>
    {part}
    {index < text.split('<br/>').length - 1 && <br />}
  </React.Fragment>
));

const FeatureItemComponent = ({content,title, description, list, img, zIndex, circlePosition={top: '0', left: '0' }}: FeatureItemComponentProps) => {
  return (
    <FeatureItemContainer className="feature_item flex-col md:flex-row pl-4  md:pl-36 border-l-[16px] border-black w-full">
      <CircleBgOverlay $circlePosition={circlePosition}/>
      <div className="feature_info flex flex-col gap-1 md:gap-11 w-full md:w-1/2">
        <TitleFeatureOverlay $content={content}>
          {textParts(title)}
        </TitleFeatureOverlay>
        <p className={`feature_info-description text-3xl font-bold ${subFont.className}`}>
          {textParts(description)}
        </p>
        <ul className="feature_intro-list flex flex-col gap-4">
          {
            list.map((item, index) => (
              <li key={index} className="feature_intro-item flex items-center gap-2 justify-start text-2xl"><Image src="/images/star_icon.svg" alt="" width={20} height={20} /> {item}</li>
            ))
          }
        </ul>
      </div>
      <div className={`feature_img w-1/2 flex items-center justify-center ${zIndex ? `z-10` : ''}`}>
          {img && <Image src={img} alt="" width={500} height={500} className='w-auto h-auto'/>}
      </div>
    </FeatureItemContainer>
  )
}

export default FeatureItemComponent