import { Cormorant_Garamond } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


interface FeatureItemProps {
  content: string;
  title: string;
  description: string;
  list: string[];
  img?: string;
}

const subFont = Cormorant_Garamond({
    style: "italic",
    subsets: ["latin"],
    weight: ["400", "400", "500", "600", "700"],
    variable: "--font-cormorant-garamond"
  })

const TitleFeatureOverlay = styled.div<{$content: string}>`
    position: relative;
    font-size: 2.25rem /* 36px */;
    line-height: 2.5rem /* 40px */;
    font-weight: 700;
    &::before {
      content: "${props => props.$content}";
      position: absolute;
      top: 0;
      left: 0;
      font-size: 11.25rem /* 36px */;
      line-height: 2.5rem /* 40px */;
      font-weight: 700;
      padding: 10px;
      color: '#F3742D';
      opacity: 0.05;

    }
`

const textParts = (text: string) => text.split('<br/>').map((part, index) => (
  <React.Fragment key={index}>
    {part}
    {index < text.split('<br/>').length - 1 && <br />}
  </React.Fragment>
));

const FeatureItem = ({content,title, description, list, img}: FeatureItemProps) => {
  return (
    <div className="feature_item flex flex-col md:flex-row p-2 md:p-10 justify-center items-center border-l-8 border-black flex-nowrap w-full">
      <div className="feature_info flex flex-col gap-1 md:gap-10 w-full md:w-1/2">
        <TitleFeatureOverlay $content={content} >
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
      <div className="feature_img w-1/2 flex items-center justify-center">
          {img && <Image src={img} alt="" width={500} height={500} />}
      </div>
    </div>
  )
}

export default FeatureItem