import React, { use, useEffect, useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContextProvider';
import { toast } from 'react-toastify'

const ServiceToDo = () => {
  const { user } = use(AuthContext)
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/service-to-do?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)

      })
  }, [])
  // console.log(services)
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col text-cyan-600">
        <p>Wait a Moment</p>
        Loading...
        <span className="loading loading-spinner loading-xl bg-pink-500"></span>
      </div>
    );
  }
  const statusColors = {
    pending: 'badge-warning',
    working: 'badge-info',
    completed: 'badge-success',
  };

  return (
    <div className='w-11/12 mx-auto min-h-screen py-10'>

      <h1 className='text-center text-2xl pb-2 font-bold'>Service To Do</h1>
      <p className='text-center pb-10 text-xs'>Manage your booked services and update their status</p>
      {
        (services.length > 0) ? (
          <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4'>
            {
              services.map(service => {
                const { _id,
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
                  userImage,
                  providerArea,
                } = service;

                const handleStatusChange = (id, newStatus) => {
                  fetch(`${import.meta.env.VITE_API_URL}/update-status/${id}`, {
                    method: 'PATCH',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ status: newStatus }),
                  })
                    .then(res => res.json())
                    .then(updated => {
                      toast.success('status updated')
                      const updatedServices = services.map(service =>
                        service._id === id ? { ...service, serviceStatus: newStatus } : service
                      );
                      setServices(updatedServices);
                    });

                  const updatedServices = services.map(service =>
                    service._id === id ? { ...service, serviceStatus: newStatus } : service
                  );
                  setServices(updatedServices);
                };

                return (
                  <div className="bg-base-100 rounded-xl shadow-cyan-300 shadow-md p-6 w-full max-w-md" key={_id}>

                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-medium ">Professional {serviceName}</h3>

                      </div>
                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className={`badge cursor-pointer ${statusColors[serviceStatus]}`}>
                          {serviceStatus}
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 text-sm">
                          {['pending', 'working', 'completed'].map((option) => (
                            <li key={option}>
                              <a onClick={() => handleStatusChange(_id, option)}>{option}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <h1 className='text-pink-500'>Service provider details:</h1>
                    <div className="flex items-center gap-3 my-4">
                      <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        <img className='w-10 h-10 rounded-full object-cover' src={`${providerImage}`} alt="" />
                      </div>
                      <div>
                        <p className="font-semibold ">{providerName}</p>
                        <p className="text-sm text-gray-500">{providerEmail}</p>
                      </div>
                      <div className="ml-auto text-right font-bold text-pink-600 text-lg">৳ {price}</div>
                    </div>



                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <FaCalendarAlt className="text-gray-500" />
                      <span>{serviceTakingDate}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <FaMapMarkerAlt className="text-gray-500" />
                      <span>{providerArea}</span>
                    </div>
                    <h1 className='text-cyan-500'>Customer details:</h1>
                    <div className="flex items-center gap-3 my-4">
                      <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                        <img className='w-10 h-10 rounded-full object-cover' src={`${userImage}`} alt="" />
                      </div>
                      <div>
                        <p className="font-semibold ">{userName}</p>
                        <p className="text-sm text-gray-500">{userEmail}</p>
                      </div>
                    </div>
                    <div>
                      <p className='text-xs'><span className='font-bold text-cyan-600'>Instruction:</span> {specialInstruction}</p>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button className="btn btn-outline btn-sm text-pink-500">Contact Customer</button>
                    </div>
                  </div>
                )
              })
            }
          </div>)
          : (<>
            <h1 className='text-center text-pink-500'>No one is booked your services yet!</h1>
          </>)
      }


    </div>
  )
}

export default ServiceToDo