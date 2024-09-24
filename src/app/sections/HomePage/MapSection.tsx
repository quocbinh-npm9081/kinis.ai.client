import LegendComponent from '@/app/components/LegendComponent'
import Title from '@/app/components/Title/Title'
import Image from 'next/image'
import React from 'react'

const MapSection = () => {
  return (
    <section 
    className="flex flex-col w-full h-auto items-center justify-center bg-white"
    >
        <div className=" flex flex-col w-full h-auto items-center justify-center">
            <Title paddingTop="12" paddingBottom="7" title="Fall Prevalence Among Older Adults and <br/> Distribution of Prevention Clinics" subtitle=" in the United States (2020)" className="text-black text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[40px]"/>
            <div className="flex w-full h-full items-center justify-center relative pt-8">
                <div className="relative mx-auto h-[80vh] w-[80vw]">
                    <Image className="object-contain" src="/images/US Map.png" alt="Map" fill/>
                    <div className="h-full flex items-end justify-end absolute top-0  right-1 lg:right-2 xl:right-3 2xl:right-4">
                        <div className="flex flex-col gap-1 md:gap-2 pb-10 md:pb-16 lg:pb-20 xl:pb-28 2xl:pb-36">
                            <div className="relative flex items-center justify-center gap-1 md:gap-2">
                                <Image src="/images/Mappin.png" alt="Map" width={30} height={47} className='w-auto h-auto'/>
                                <span className="text-sm font-bold ">
                                    Current fall prevention <br/> clinics
                                </span>
                            </div>
                            <LegendComponent backgroundColor="#FDE8DC" title="19.9 % - < 23.5%" /> 
                            <LegendComponent backgroundColor="#F9B996" title="23.5% - <  27.1%" /> 
                            <LegendComponent backgroundColor="#F7A273" title="27.1% - <  30.8%" />  
                            <LegendComponent backgroundColor="#F3742D" title="30.8% - < 34.4%" />  
                            <LegendComponent backgroundColor="#790000" title="34.4% - < 38.0%" /> 
                        </div>
                    </div>
                </div>
          
            </div>
            <div className='w-full flex justify-end items-center'>
                <div className="relative w-[78px] h-[56px] md:w-[88px] md:h-[46px] lg:w-[98px] lg:h-[56px] xl:w-[108px] xl:h-[66px] 2xl:w-[118px] 2xl:h-[76px]">
                    <Image src="/images/logo-notext 2.png" alt="CDC logo" fill className='object-cover w-auto h-auto top-[100%] left-[100%]' style={{
                    transform : 'translate(-50%, -50%)'
                    }}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MapSection