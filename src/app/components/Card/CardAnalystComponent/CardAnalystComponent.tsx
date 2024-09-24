import React from 'react'
interface CardAnalystComponentProps{
  title: string;
  description: string;
  isHeight?: boolean;
}
const CardAnalystComponent = ({title, description, isHeight}: CardAnalystComponentProps) => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start border-2 border-primary shadow-primary/15 rounded-lg shadow-lg px-2 py-3 md:px-3 md:py-4 lg:px-4 lg:py-6 2xl:px-6 2xl:py-7 bg-white gap-4">
      <div className='text-primary text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-bold text-nowrap w-full'>{title}</div>
      <div className={`border-l-4 border-l-primary p-2 font-medium text-base md:text-lg lg:text-xl 2xl:text-2xl flex items-center h-[70px] ${isHeight && 'h-[90px] '} `}>{description}</div>
    </div>
  )
}

export default CardAnalystComponent