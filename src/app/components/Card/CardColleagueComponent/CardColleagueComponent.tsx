'use client'
import Image from 'next/image';
import React from 'react'
import CardColleagueStyle from './style.module.scss';
import styled from 'styled-components';

interface CardColleagueComponentProps {
    title: string;
    imgMain: string;
    imgHovering: string;
}

const CardOverlay = styled.div`
    position: relative;
    .overlay-title{
        opacity: 0; 
    }
    &:hover .overlay-title {
        transition: opacity 0.3s ease;
        opacity: 1;
    }
`;



const CardColleagueComponent = ({title, imgMain,imgHovering }: CardColleagueComponentProps) => {
  return (
    <CardOverlay className={`w-56 h-96 ${CardColleagueStyle.colleagueItem}`}>
        <Image src={imgMain} alt={title} fill={true}/>
        <Image src={imgHovering} alt={title} className="overlay-title" fill={true}/>
    </CardOverlay>
  );
}

export default CardColleagueComponent