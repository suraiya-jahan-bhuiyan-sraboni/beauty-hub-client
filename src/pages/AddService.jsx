import React from 'react'
import { use } from 'react'
import Helmet from 'react-helmet'
import { AuthContext } from '../context/AuthContextProvider'
const AddService = () => {
  const { user } = use(AuthContext)
  console.log(user)
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.providerEmail = user.email
    data.ProviderName = user.displayName
    data.providerImage = user.photoURL
    data.price=parseInt(data.price)
    console.log(data)
  }
  return (
    <div className='w-11/12 mx-auto min-h-screen py-10'>
      <Helmet>
        <title>Add a new Service</title>
      </Helmet>
      <h1 className='text-center text-2xl font-bold pb-4'>Add New Service</h1>
      <p className='text-center'>Create a new beauty service listing for your clients</p>
      <div className=" flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-pink-500/30 shadow-lg w-full max-w-2xl">
          <form className="space-y-6" onSubmit={handleAddService}>
            <div className='flex flex-col gap-4'>
              <h2 className="text-xl font-bold mb-1">Service Information</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Image URL</span>
                </label>
                <input
                  name='serviceImage'
                  type="text"
                  placeholder="https://example.com/image.jpg"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  name='serviceName'
                  type="text"
                  placeholder="Service Name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price ($)</span>
                </label>
                <input
                  name='price'
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full"

                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  name='area'
                  type="text"
                  placeholder="e.g., Downtown, Midtown"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control flex flex-col">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name='description'
                  className="textarea textarea-bordered h-24 w-full"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold">Service Provider Information</h2>
              <div className="bg-base-200/50 rounded-lg p-4 flex items-center space-x-4">
                <div className="avatar placeholder">
                  <div className="rounded-full w-12 border text-center">
                    <img src={`${user.photoURL}`} alt="" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{user.displayName}</div>
                  <div className="text-sm text-base-content/70">
                    {user.email}
                  </div>
                  <div className="text-sm font-semibold text-cyan-500">
                    Verified Service Provider
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button type='submit' className="btn btn-primary bg-cyan-600">Add Service</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddService