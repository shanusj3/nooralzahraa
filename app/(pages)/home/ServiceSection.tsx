import ServicesBar from '@/app/components/Servicebar'
import React from 'react'
import AboutServices from './AboutSection'

function ServiceSection() {
  return (
    <div className='w-full h-auto bg-[#F5ECE1]'>
        <ServicesBar />
        <AboutServices />
    </div>
  )
}

export default ServiceSection