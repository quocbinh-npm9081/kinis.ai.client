"use client";
import Image from 'next/image';
import React, { useState } from 'react'
interface ImageBaseComponentProps {
  src: string;
  alt: string;
}

const ImageBaseComponent = ({ src, alt, ...rest }: ImageBaseComponentProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  // <Image
  //     src={imgSrc}
  //     width={width}
  //     height={height}
  //     placeholder="blur"
  //     blurDataURL={!!blurData ? blurData : defaultBlur}
  //     onError={() => {
  //       setImgSrc(placeholderImage);
  //     }}
  //     {...rest}
  //   />

  return (
    <Image
    src={imgSrc}
    placeholder="blur"
    alt={alt}
    {...rest}
  />
  )
}

export default ImageBaseComponent