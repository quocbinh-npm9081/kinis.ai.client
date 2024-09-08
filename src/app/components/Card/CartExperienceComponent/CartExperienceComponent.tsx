import React from 'react'

const CartExperienceComponent = ({title, description, bgColor, colorTitle, colorDescription }: {title: string, description: string, bgColor: string, colorTitle: string, colorDescription: string}) => {
  return (
    <div className={`flex flex-col items-start justify-start p-5 h-auto border-2 border-black rounded-lg ${bgColor}`}>
        <div className={`text-2xl font-bold ${colorTitle}`}>{title}</div>
        <div className={`${colorDescription}`}>{description}</div>
    </div>
  )
}

export default CartExperienceComponent