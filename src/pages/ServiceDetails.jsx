import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Helmet from "react-helmet"

const ServiceDetails = () => {
  const [service, setservice] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  //console.log(id)

  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.VITE_API_URL}/services/${id}`)
      .then(res => res.json())
      .then(data => {
        setservice(data)
        setLoading(false)
      })
  }, [id])

 // console.log(service)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col text-cyan-600">
        <p>Wait a Moment</p>
        Loading...
        <span className="loading loading-spinner loading-xl bg-pink-500"></span>
      </div>
    );
  }
  const {
    serviceImage,
    serviceName,
    description,
    price,
    providerName,
    providerImage,
   area
  } = service;

  return (
    <div className='w-11/12 mx-auto min-h-screen py-5'>
      <Helmet>
        <title>{serviceName}</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto p-6"
      >
        <div className="bg-white shadow-lg rounded-xl p-6 space-y-6">
          {/* Header: Provider and Rating */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full  text-white flex items-center justify-center font-bold text-lg">
                <img className='rounded-full' src={`${providerImage}`} alt="" />
              </div>
              <div>
                <h3 className="font-bold">{providerName}</h3>
                <p className="text-sm text-gray-500">{area}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-yellow-500 text-sm">
              <div className='flex'> <FaStar /><FaStar /><FaStar /><FaStar /></div>
              <span className="font-semibold">(4.4)</span>
              <span className="text-gray-500">10 reviews </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <img
                src={serviceImage}
                alt={serviceName}
                className="rounded-lg w-full h-64 object-cover"
              />
              <h2 className="text-2xl font-bold">{serviceName}</h2>
              <p className="text-gray-700">{description}</p>

              <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 mt-4">
                  <p className="text-sm text-gray-500">Beauty Expert</p>

              </div>

            </div>
            <div className="bg-gray-50 border rounded-xl p-5 space-y-4 h-fit">
              <div>
                <h4 className="text-sm text-gray-500">Service Price</h4>
                <p className="text-3xl font-bold text-purple-700">${price}</p>
                <p className="text-xs text-gray-500 mt-1">per session</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Duration</h4>
                <p className="text-gray-700">1hr</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">Availability</h4>
                <p className="text-green-600 font-semibold">mon-fri</p>
              </div>
              <button  className="btn btn-primary w-full mt-2">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceDetails