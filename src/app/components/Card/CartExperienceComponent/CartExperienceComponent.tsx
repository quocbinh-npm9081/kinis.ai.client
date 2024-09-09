import React from 'react'

const CartExperienceComponent = ({title, description, bgColor, colorTitle, colorDescription }: {title: string, description: string, bgColor: string, colorTitle: string, colorDescription: string}) => {
  return (
    <div className={`flex flex-col items-start justify-start px-4 py-1 md:px-6 md:py-4 h-auto border border-black rounded-lg ${bgColor} gap-3`}>
        <div className={`text-3xl md:text-4xl font-bold ${colorTitle}`}>{title}</div>
        <div className={`text-base md:text-xl ${colorDescription}`}>{description}</div>
    </div>
  )
}

export default CartExperienceComponent