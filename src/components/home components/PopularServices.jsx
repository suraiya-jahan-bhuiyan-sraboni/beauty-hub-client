import React from 'react'
import ServiceCard from './ServiceCard'
import { useState } from 'react'
import { useEffect } from 'react'

const PopularServices = () => {
  const [services, setservices] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/services`)
      .then(res => res.json())
      .then(data => {
        setservices(data.slice(0, 6))
        setLoading(false)

      })
  }, [])
  console.log(services)
  if (loading) {
    return (
      <div className=" flex justify-center items-center flex-col">
        Loading...
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div className=''>
      <div className='grid grid-cols-2 auto-rows-fr gap-4'>
        {
          services.map(service => {
            return (
              <div key={service._id}>
                <ServiceCard service={service}/>
              </div>
            )
          })

        }
      </div>

    </div>
  )
}

export default PopularServices