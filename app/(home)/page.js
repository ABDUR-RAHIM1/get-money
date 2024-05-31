import React from 'react'
import Hero from '../Conponents/HomePage/Hero'
import Services from '../Conponents/HomePage/Services'
import Info from '../Conponents/HomePage/Info'
import Faq from '../Conponents/HomePage/Faq'

export default function HomePage() {
  return (
    <div className='bg-gray-50 dark:bg-slate-800'>
      <Hero />
      <Info/>
      <Services />
      <Faq/>
    </div>
  )
}
