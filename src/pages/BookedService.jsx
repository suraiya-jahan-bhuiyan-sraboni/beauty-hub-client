import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { SlCalender } from "react-icons/sl";
import { FaClock, FaMapPin } from "react-icons/fa";
import Helmet from "react-helmet"


const BookedService = () => {
  const { user } = use(AuthContext)
  const [bookedServices, setbookedServices] = useState([])
  const [loading, setLoading] = useState(true)
  token = user?.accessToken
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${user?.email}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setbookedServices(data)
        setLoading(false)

      })
  }, [])


 // console.log(bookedServices)
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
    <div className='w-11/12 mx-auto min-h-screen py-10'>
      <Helmet>
        <title>Booked Services</title>
      </Helmet>
      <h1 className='text-center pb-10 font-bold text-3xl'>My Booked Services</h1>
      <div className=''>
        {
          (bookedServices.length > 0) ? 
            (<div className='grid sm:grid-cols-2 gap-6'>
            {
              bookedServices.map(service => {
            const {
              _id,
              serviceId,
              serviceName,
              serviceImage,
              providerImage,
              providerName,
              providerEmail,
              price,
              serviceStatus,
              serviceTakingDate,
              specialInstruction,
              userEmail,
              userName,
              providerArea,
            } = service;
            return (
              <div className="card bg-base-100 shadow-cyan-500/50 shadow-md border border-pink-300 rounded-xl overflow-hidden" key={_id}>
                <div className="flex flex-col gap-4 p-4">
                  <div className='w-full'>
                    <img
                    src={serviceImage}
                    alt={serviceName}
                    className="w-full object-cover rounded-md"
                  />
                  </div>
                  
                  <div className=" mt-4 md:mt-0 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{serviceName}</h3>
                        
                        <div className="flex items-center mt-2 space-x-2">
                          <img
                            src={providerImage}
                            alt={providerName}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <span className="text-sm font-medium">{providerName}</span>
                            <p className="text-gray-600 text-sm mt-1">{providerEmail}</p>
                          </div>
                          
                        </div>
                        
                      </div>

                      <div className="text-right">
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${serviceStatus === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : serviceStatus === "working"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-green-100 text-green-700"
                            }`}
                        >
                          {serviceStatus.charAt(0).toUpperCase() + serviceStatus.slice(1)}
                        </span>
                        <p className="text-xl font-bold text-pink-600 mt-2">
                          ${price}
                        </p>
                        <p className="text-xs text-gray-500">per session</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-sm text-gray-600">
                      <div className="flex flex-wrap items-center gap-1 text-4xl">
                        <SlCalender className="w-4 h-4 " />
                        <p className='text-xs'>{serviceTakingDate}</p>
                        
                      </div>

                      <div className="flex items-center gap-1">
                        ⏳1hr
                      </div>
                      <div className="flex items-center gap-1">
                        <FaMapPin className="w-4 h-4" />
                        {providerArea}
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-10">
                      <button className="px-4 py-1 border border-cyan-600 text-cyan-600 rounded-md hover:bg-cyan-50">
                        { 
                          (serviceStatus === 'pending' || serviceStatus === 'working')?'Reschedule':'Book Again'
                        }
                        
                      </button>
                      <button className="px-4 py-1 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-50">
                        {
                          (serviceStatus === 'pending' || serviceStatus === 'working') ? 'Cancel Booking' : 'Leave Review'
                        } 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
          }
            </div>
            ) : (<>
            <h1 className='text-center text-xl'>No service is booked! Go to services to book service!</h1>
            </>)
          
        }
      </div>

    </div>
  )
}

export default BookedService