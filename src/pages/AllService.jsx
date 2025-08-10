import React from 'react'
import AllServiceCard from '../components/AllServiceCard'
import { useState } from 'react'
import { useEffect } from 'react'
import Helmet from "react-helmet"


const AllService = () => {
  const [services, setservices] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('');
  

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/services?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setservices(data)
        setLoading(false)
      })
  }, [search])

    const sortedServices = [...services].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    return 0;
  });
 // console.log(search)
  //console.log(services)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col text-cyan-600">
        <p>Wait a Moment</p>
        Loading...
        <span className="loading loading-spinner loading-xl bg-pink-500"></span>
      </div>
    );
  }
  return (
    <div className='w-11/12 mx-auto min-h-screen'>
      <Helmet>
        <title>All Services</title>
      </Helmet>
      <div className='py-15 '>
        <h1 className='text-center font-bold text-3xl'>All Beauty Services</h1>
        <p className='text-center text-xs py-4 mb-10'>Discover our complete range of professional beauty and wellness services from certified experts</p>
        <form action="" className='w-full flex flex-col sm:flex-row justify-center gap-3 items-center'>
          <label className="input flex justify-center w-11/12">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={e => setSearch(e.target.value)}
              type="search" required placeholder="Search" className='w-full' />
          </label>
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border border-accent px-1 py-2 rounded-md"
          >
            <option value="">Sort By (Default)</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </form>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2  gap-6'>
          {
            (sortedServices.length > 0) ? (<>
              {sortedServices.map(service => (
              <div className='py-5' key={service._id}>
                <AllServiceCard  service={service} />
              </div>
            ))}
            </>) : (<>
            <h1 className='text-center text-cyan-600'>Service Not found!</h1>
              </>)
            
          }
        </div>
        
      </div>
    </div>
  )
}

export default AllService