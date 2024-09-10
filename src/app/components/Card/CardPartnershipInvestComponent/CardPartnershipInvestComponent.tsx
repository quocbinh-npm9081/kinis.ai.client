import Image from 'next/image';
import React from 'react'
interface CardPartnershipInvestComponentProps {
    title: string;
    listContent: string[];
    contentButton: string;
}

const CardPartnershipInvestComponent : React.FC<CardPartnershipInvestComponentProps> = ({title, listContent, contentButton}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-3 2xl:px-10 2xl:py-9 2xl:gap-6 2xl:w-[630px] 2xl:h-[479px]'>
        <h3 className='text-primary font-bold text-xl 2xl:text-3xl whitespace-nowrap border-b-2 border-primary'>{title}</h3>
        <ul className='flex flex-col items-center justify-center gap-10 list-disc list-inside'>
            {listContent.map((content, index) => (
                <li key={index} className='text-black text-lg 2xl:text-xl font-normal'>{content}</li>
            ))}
        </ul>
        <div className="flex justify-between items-center w-full">
        <button className='flex items-center text-nowrap justify-center gap-1 lg:gap-2  py-2  lg:py-4 text-black text-xl 2xl:text-2xl  italic'>Get more information</button>
        <button className='flex items-center text-nowrap justify-center gap-1 lg:gap-2 px-4 py-2 lg:px-6 lg:py-4 text-white bg-black hover:bg-black/80 transition-all duration-300 text-xl 2xl:text-2xl rounded-lg'>{contentButton} <Image src="/images/Vector.png" alt='arrow-right' width={24} height={24} /></button>
        </div>
    </div>
  )
}

export default CardPartnershipInvestComponent