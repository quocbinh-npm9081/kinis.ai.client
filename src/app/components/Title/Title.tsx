'use client'
import React from 'react'
import { Cormorant_Garamond } from 'next/font/google'
import styled from 'styled-components';

const subFont = Cormorant_Garamond({
  style: "italic",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond"
})

interface TitleProps {
    content?: string;
    className?: string;
    title: string;
    subtitle: string;
    paddingTop?: string;
    paddingBottom?: string;
}

const TitleOverlay = styled.h3.attrs(
    props => ({ className : props.className}
  ))<{$content: string, $paddingTop: string, $paddingBottom: string}>`
    position: relative;
    font-size: 1.875rem /* 30px */; 48px tương đương với 3rem.
    line-height: 3.578rem /* 36px */;
    font-weight: 700;
    text-align: center;
    z-index: 20;
    padding-top: ${props => props.$paddingTop ? props.$paddingTop : '0'}rem;
    padding-bottom: ${props => props.$paddingBottom ? props.$paddingBottom : '0'}rem;
    &::before {
      content: "${props => props.$content}";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -67%);
      font-size: 11.25rem /* 36px */;
      line-height: 2.5rem /* 40px */;
      font-weight: 700;
      padding: 10px;
      color: '#F9EFEA';
      opacity: 0.05;
    }
`

const Title: React.FC<TitleProps> = ({content = '', title, subtitle , paddingTop, paddingBottom, className = 'text-dark'}) => {
  const titleParts = title.split('<br/>').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < title.split('<br/>').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <TitleOverlay $content={content} className={`${className}`} $paddingTop={paddingTop ? paddingTop : '0'} $paddingBottom={paddingBottom ? paddingBottom : '0'}>
        {titleParts} {' '}
        <span className={`text-4xl font-bold text-center z-20 ${className} ${subFont.className}`}>{subtitle}</span>
    </TitleOverlay>
  )
}

export default Title