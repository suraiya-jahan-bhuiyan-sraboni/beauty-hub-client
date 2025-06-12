import React from 'react'
import Banner from '../components/home components/Banner'
import ServicesAndTestimonial from '../components/home components/ServicesAndTestimonial'
import PopularServices from '../components/home components/PopularServices'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto min-h-screen'>
      <Banner />
      <div className='py-15'>
        <h1 className='text-center font-bold text-3xl'>Popular Beauty Services</h1>
        <p className='text-center text-xs py-4 mb-10'>Discover our most requested beauty and wellness services from certified professionals</p>
      <PopularServices/>
      </div>
      
      <ServicesAndTestimonial/>
    </div>
  )
}

export default Home