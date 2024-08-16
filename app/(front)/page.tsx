import Brands from '@/components/Frontend/Brand'
import Hero from '@/components/Frontend/hero'
import TabbedServices from '@/components/Frontend/TabbedServices'
import React from 'react'

export default function Home() {
  return (
    <section className=''>
      <Hero/>
      <Brands/>
      <TabbedServices/>
    </section>
  )
}
