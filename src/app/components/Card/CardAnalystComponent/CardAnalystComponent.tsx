import React from 'react'
interface CardAnalystComponentProps{
  title: string;
  description: string;
  isHeight?: boolean
}
const CardAnalystComponent = ({title, description, isHeight}: CardAnalystComponentProps) => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start border-2 border-primary shadow-primary/15 rounded-lg shadow-lg px-3 py-4 md:px-4 md:py-5 lg:px-5 lg:py-7 2xl:px-6 2xl:py-7 bg-white gap-4">
      <div className='text-primary text-2xl 2xl:text-4xl font-bold text-nowrap w-full'>{title}</div>
      <div className={`border-l-4 border-l-primary p-2 font-medium text-base md:text-lg lg:text-xl 2xl:text-2xl flex items-center w-full h-[70px] ${isHeight && 'h-[90px] '} `}>{description}</div>
    </div>
  )
}

export default CardAnalystComponent