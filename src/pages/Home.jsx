import React from 'react'
import Banner from '../components/home components/Banner'
import ServicesAndTestimonial from '../components/home components/ServicesAndTestimonial'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto min-h-screen'>
      <Banner />
      <ServicesAndTestimonial/>
    </div>
  )
}

export default Home