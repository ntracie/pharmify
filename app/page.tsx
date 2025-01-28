import CustomCarousel from '@/components/carousel'
import Categories from '@/components/Categories'
import Head from '@/components/Head'
import React from 'react'

export default function page() {
  return (
    <div className='w-full '>
      <Head/>
      <CustomCarousel/>
      <Categories/>
    </div>
  )
}
