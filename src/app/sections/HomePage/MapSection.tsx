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
            <Title paddingTop="12" paddingBottom="7" title="Fall Prevalence Among Older Adults and <br/> Distribution of Prevention Clinics" subtitle=" in the United States (2020)" className="text-black text-3xl 2xl:text-[40px]"/>
            <div className="flex w-full h-full items-center justify-center relative pt-8">
            <div className="relative h-[80vh] w-[80vw]">
                    <Image className="object-contain" src="/images/US Map.png" alt="Map" fill/>
                    <div className="h-full flex items-end justify-end absolute top-0 right-[1rem]">
                    <div className="flex flex-col gap-2 pb-36">
                        <div className="relative flex items-center justify-center gap-2">
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
            <div className="flex items-center justify-end w-full pb-20">
                <Image src="/images/logo-notext 2.png" alt="CDC logo" width={97} height={95} className='w-auto h-auto'/>
            </div>
        </div>
    </section>
  )
}

export default MapSection