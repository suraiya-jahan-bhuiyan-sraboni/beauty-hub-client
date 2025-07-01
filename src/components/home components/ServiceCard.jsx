import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router'

const ServiceCard = ({service}) => {
  const {
    _id,
    serviceImage,
    serviceName,
    description,
    providerName,
    providerImage,
    price
  } = service;
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card bg-base-100 shadow-xl overflow-hidden border border-gray-200"
    >

      <div className=" bg-purple-700 text-white text-center text-2xl font-bold relative">
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'>
        </div>
        <img className='w-full h-[250px] object-cover' src={`${serviceImage}`} alt="" />
        <span className='absolute left-1/2 top-1/2
                    transform -translate-x-1/2 -translate-y-1/2 text-shadow-lg/50 text-shadow-pink-500'>{serviceName}</span>
      </div>

      <div className="card-body space-y-2">
        <h3 className="text-lg font-semibold">Professional {serviceName}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
              <img className='w-10 h-10 object-cover rounded-full' src={`${providerImage}`} alt={`${providerName} image`} />
              
            </div>
            <div className="text-sm">
              <p className="font-medium text-cyan-500">
                {providerName}
              </p>
              <p className="text-gray-500">Beauty Expert</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-pink-700"> ৳
              {price}
            </p>
            <p className="text-xs text-gray-500">per session</p>
          </div>
        </div>


        <div className="mt-4">
          <Link
            to={`/service-details/${_id}`}
          // onClick={onViewDetails}
            className="btn text-white bg-pink-600 btn-block"
          >
            View Details</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard