'use client'
import Image from 'next/image';
import React from 'react'
import './style.scss';
import styled from 'styled-components';
interface CardColleagueComponentProps {
    img: string;
    title: string;
    className?: string;
}

const CardOverlay = styled.div.attrs(props => ({className: props.className}))`
    position: relative;
    &:hover .overlay-title {
        opacity: 1;
    }
`;

const OverlayTitle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(270deg); /* Xoay nội dung 90 độ */
    transform-origin: left top; /* Đặt điểm gốc xoay */
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 1;
    transition: opacity 0.3s ease;
    white-space: nowrap; /* Đảm bảo nội dung không bị xuống dòng */
    z-index: 1;
`;

const CardColleagueComponent = ({img, title, className}: CardColleagueComponentProps) => {
  return (
    <CardOverlay className={className}>
        <OverlayTitle className="overlay-title">{title}</OverlayTitle>
        <Image src={img} alt={title} fill={true}/>
    </CardOverlay>
  );
}

export default CardColleagueComponent