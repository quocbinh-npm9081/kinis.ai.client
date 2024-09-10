import CardPartnershipInvestComponent from '@/app/components/Card/CardPartnershipInvestComponent/CardPartnershipInvestComponent'
import React from 'react'

const PartnershipInvestSection = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen'>
       <CardPartnershipInvestComponent 
            title='PARTNERSHIP & COLLABORATION' 
            listContent={["Are you a healthcare professional, researcher, or industry expert interested in revolutionizing mobility health? We're looking for partners like you!","If you are passionate about improving people's lives through innovative technology, we want to hear from you."]} 
            contentButton='Partnership' 
       />
    </section>
  )
}

export default PartnershipInvestSection