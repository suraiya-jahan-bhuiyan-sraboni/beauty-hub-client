import React from 'react'
import { use } from 'react'
import Helmet from 'react-helmet'
import { AuthContext } from '../context/AuthContextProvider'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'

const EditService = () => {
    const navigate = useNavigate()
    const { user } = use(AuthContext)
    const [service, setservice] = useState({})
    const { id } = useParams()
    const token = user?.accessToken
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/services/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
          })
            .then(res => res.json())
            .then(data => {
                setservice(data)

            })
    }, [])
    const {
        _id,
        serviceImage,
        serviceName,
        description,
        providerName,
        providerImage,
        price,
        area
    } = service;
    const handleEditService = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        data.providerEmail = user.email
        data.providerName = user.displayName
        data.providerImage = user.photoURL
        data.price = parseInt(data.price)

        fetch(`${import.meta.env.VITE_API_URL}/services/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                //console.log(data)
                if (data?.modifiedCount > 0) {
                    toast.success('Service updated successfully!')
                    navigate('/manage-service')
                } else {
                    toast.error('Failed to update service. Please try again.');
                }

            })
            .catch(err => toast.error('An error occurred. Please try again later.'))
    }
    return (
        <div className='w-11/12 mx-auto min-h-screen py-10'>
            <Helmet>
                <title>Edit Service</title>
            </Helmet>
            <h1 className='text-center text-2xl font-bold pb-4'>Edit Service</h1>
            <div className=" flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="bg-base-100 p-6 sm:p-8 rounded-2xl shadow-pink-500/30 shadow-lg w-full max-w-2xl">
                    <form className="space-y-6" onSubmit={handleEditService}>
                        <div className='flex flex-col gap-4'>
                            <h2 className="text-xl font-bold mb-1">Service Information</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Image URL</span>
                                </label>
                                <input
                                    required
                                    name='serviceImage'
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    className="input input-bordered w-full"
                                    value={serviceImage}
                                    onChange={(e) => setservice({ ...service, serviceImage: e.target.value })}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Name</span>
                                </label>
                                <input
                                    required
                                    name='serviceName'
                                    type="text"
                                    placeholder="Service Name"
                                    className="input input-bordered w-full"
                                    value={serviceName}
                                    onChange={(e) => setservice({ ...service, serviceName: e.target.value })}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price ($)</span>
                                </label>
                                <input
                                    required
                                    name='price'
                                    type="number"
                                    placeholder="Price"
                                    className="input input-bordered w-full"
                                    value={price}
                                    onChange={(e) => setservice({ ...service, price: e.target.value })}

                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service Area</span>
                                </label>
                                <input
                                    required
                                    name='area'
                                    type="text"
                                    placeholder="e.g., Downtown, Midtown"
                                    className="input input-bordered w-full"
                                    value={area}
                                    onChange={(e) => setservice({ ...service, area: e.target.value })}
                                />
                            </div>

                            <div className="form-control flex flex-col">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    required
                                    name='description'
                                    className="textarea textarea-bordered h-24 w-full"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => setservice({ ...service, description: e.target.value })}
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
                            <button type='submit' className="btn btn-primary bg-cyan-600">Update Service</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default EditService