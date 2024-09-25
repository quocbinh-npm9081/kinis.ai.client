import React from 'react'
interface ICardTextBasicProps {
    title : string,
    description : string
}

const CardTextBasicComponent : React.FC<ICardTextBasicProps>= ({title, description }) => {
  return (
    <div className='flex flex-col px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-10 py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12 max-w-[440px]  text-[#23242A] bg-white gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6 rounded-xl'>
        <div className='font-medium text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[44px] leading-7 md:leading-[38.4px] 2xl:leading-[48.4px]'>
            {title}
        </div>
        <p className="font-normal text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-[31.2px]">
            {description}
        </p>
    </div>
  )
}

export default CardTextBasicComponent