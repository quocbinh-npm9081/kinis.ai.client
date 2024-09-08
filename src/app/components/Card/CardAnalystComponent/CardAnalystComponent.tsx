import React from 'react'
interface CardAnalystComponentProps{
  title: string;
  description: string;
}
const CardAnalystComponent = ({title, description}: CardAnalystComponentProps) => {
  return (
    <div className="flex flex-col w-full h-full items-start justify-start border-2 border-primary shadow-primary/15 rounded-lg shadow-lg p-4 bg-white gap-2">
      <div className='text-primary text-2xl font-bold'>{title}</div>
      <div className="border-l-2 border-l-primary pl-1">{description}</div>
    </div>
  )
}

export default CardAnalystComponent