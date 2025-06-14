import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Helmet from "react-helmet"
import { AuthContext } from '../context/AuthContextProvider';

const ServiceDetails = () => {
  const {user}=use(AuthContext)
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
    _id,
    serviceImage,
    serviceName,
    description,
    price,
    providerName,
    providerImage,
    providerEmail,
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
        <div className="bg-base-300 shadow-pink-500/50 shadow-lg rounded-xl p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full  text-white flex items-center justify-center font-bold text-lg">
                <img className='w-12 h-12 object-cover rounded-full' src={`${providerImage}`} alt="" />
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
              <p className="text-gray-500">{description}</p>

              <div className="bg-base-100 p-4 rounded-lg flex items-center gap-3 mt-4">
                  <p className="text-sm text-gray-500">Beauty Expert</p>

              </div>

            </div>
            <div className="bg-base-100 border rounded-xl p-5 space-y-4 h-fit">
              <div>
                <h4 className="text-sm text-gray-500">Service Price</h4>
                <p className="text-3xl font-bold text-pink-500">${price}</p>
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
              <button onClick={() => document.getElementById('my_modal_4').showModal()}  className="btn btn-primary bg-cyan-600 w-full mt-2">
                Book Now
              </button>
              <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12">
                  <h3 className="font-bold text-lg">Bookings</h3>
                  <div className="modal-action">
                    
                    <form  >
                      <div className="grid grid-cols-2 gap-4">
                        <div><label>Service ID</label>
                          <input value={_id} readOnly className="input input-bordered" placeholder="Service ID" />
                        </div>
                        <div>
                          <label htmlFor="">Service Name</label>
                          <input value={serviceName} readOnly className="input input-bordered" placeholder="Service Name" />
                        </div>
                        
                        <div>
                          <label htmlFor="">Provider Name</label>
                          <input value={providerName} readOnly className="input input-bordered" placeholder="Provider Name" />
                        </div>
                        <div>
                          <label htmlFor="">Provider Email</label>
                          <input value={providerEmail} readOnly className="input input-bordered" placeholder="Provider Email" />
                        </div>
                        <div>
                          <label htmlFor="">Customer Name</label>
                          <input value={user.displayName} readOnly className="input input-bordered" placeholder="User Name" />
                        </div>
                        
                        <div>
                          <label htmlFor="">Customer Email</label>
                          <input value={user.email} readOnly className="input input-bordered" placeholder="User Email" />
                        </div>
                        <div>
                          <label htmlFor="">price</label>
                          <input value={price} readOnly className="input input-bordered" placeholder="Price (BDT)" />
                        </div>


                      </div>

                      {/* Editable Fields */}
                      <div className="space-y-3 flex flex-col gap-4 py-5">
                        <label className="form-control w-full">
                          <span className="label-text font-medium">Service Taking Date</span>
                          <input
                            type="date"
                            name="serviceTakingDate"
                            className="input input-bordered w-full"
                            required
                          />
                        </label>

                        <label className="form-control w-full flex flex-col">
                          <span className="label-text font-medium">Special Instructions</span>
                          <textarea
                            name="specialInstruction"
                            className="textarea textarea-bordered w-full"
                            placeholder="Address, area, custom plan..."
                            rows={3}
                            required
                          ></textarea>
                        </label>
                      </div>
                      {/* if there is a button, it will close the modal */}
                      <div className='flex gap-3 justify-end items-center'><form method="dialog">
                        <button className="btn">Close</button>
                      </form>
                      <button type='submit' className="btn">Purchase</button></div>
                      
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ServiceDetails