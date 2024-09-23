import React from 'react'

const CartExperienceComponent = ({title, description, bgColor, borderColor, colorTitle, colorDescription }: {title: string, description: string, bgColor: string, borderColor?: string, colorTitle: string, colorDescription: string}) => {
  return (
    <div className={`flex flex-col items-start justify-start px-4 py-1 md:px-4 md:py-2 2xl:px-6 2xl:py-4 h-auto  rounded-lg ${bgColor} ${borderColor ? borderColor + ' border' : ''} gap-3`}>
        <div className={`text-xl md:text-2xl 2xl:text-4xl font-bold ${colorTitle}`}>{title}</div>
        <div className={`text-base md:text-lg 2xl:text-xl opacity-[70%] font-medium ${colorDescription}`}>{description}</div>
    </div>
  )
}

export default CartExperienceComponent