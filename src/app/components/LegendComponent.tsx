import React from 'react'

interface LegendComponentProps {
    backgroundColor: string;
    title: string;
}

const LegendComponent = ({backgroundColor, title}: LegendComponentProps) => {
  return (
    <div className="flex items-center justify-start gap-2">
        <div className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 rounded-sm`} style={{ backgroundColor: backgroundColor }}>
        </div>
        <div className="text-xs md:text-sm font-bold">{title}</div>
    </div>

  )
}

export default LegendComponent