import React, { use } from 'react'
import ManageServiceCard from '../components/ManageServiceCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { AuthContext } from '../context/AuthContextProvider'
import { Helmet } from 'react-helmet'

const ManageService = () => {

  const { user } = use(AuthContext)
  const [services, setservices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/my-services?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setservices(data)
        setLoading(false)
      })
  }, [services])

  const handleDelete = (id) => {
    setservices(prev => prev.filter(service => service._id !== id));
  };


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
        <title>Manage Services</title>
      </Helmet>
      <h1 className='text-center p-7 text-2xl font-bold text-pink-500'>Manage services</h1>
      {
        (services.length > 0) ? (<div className='grid sm:grid-cols-2 gap-6'>
          {
            services.map(service => (

              <ManageServiceCard key={service._id} service={service} onDelete={handleDelete} />

            ))
          }
        </div>) : (<>
        <h1 className='text-center text-cyan-600'>You haven't added any services yet!</h1>
          </>)
      }
      <div className='grid sm:grid-cols-2 gap-6'>
        {
          services.map(service => (
            
            <ManageServiceCard key={service._id} service={service} onDelete={handleDelete} />
            
          ))
        }
      </div>

    </div>
  )
}

export default ManageService