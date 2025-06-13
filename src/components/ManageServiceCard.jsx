import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router'
import { IoLocation } from "react-icons/io5";
import Swal from 'sweetalert2'

const ManageServiceCard = ({ service, onDelete }) => {
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
    const handleDeleteService = (id) => {
        Swal.fire({
            title: "Do you want to Delete the service?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't Delete`
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/services/${_id}`, {
                    method: "DELETE",
                }).then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "", "success");
                            if (onDelete) onDelete(_id);
                        }
                    });

            } else if (result.isDenied) {
                Swal.fire("Service is not Deleted", "", "info");
            }
        });

    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="card bg-base-100 shadow-xl overflow-hidden border border-gray-200"
        >

            <div className=" bg-purple-700 text-white text-center text-2xl font-bold relative">
                <img className='w-full h-[250px] object-cover' src={`${serviceImage}`} alt="" />
                <span className='absolute right-1/2 bottom-1/4 
                        transform translate-x-1/2 text-shadow-lg/50 text-shadow-pink-500'>{serviceName}</span>
            </div>

            <div className="card-body space-y-2">
                <h3 className="text-lg font-semibold">Professional {serviceName}
                </h3>
                <p className="text-gray-600 text-sm">
                    {description}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10  rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">
                            <img className='w-10 h-10 object-cover rounded-full' src={`${providerImage}`} alt={`${providerName} image`} />

                        </div>
                        <div className="text-sm">
                            <p className="font-medium text-cyan-500">
                                {providerName}
                            </p>
                            <p className="text-gray-500">Beauty Expert</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center justify-center flex-wrap text-center '>
                        <p className='flex items-center gap-2 text-gray-400'><IoLocation className='text-xl' />Location:</p>
                        <p className=' text-cyan-600'>{area}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-pink-700"> ৳
                            {price}
                        </p>
                        <p className="text-xs text-gray-500">per session</p>
                    </div>
                </div>


                <div className="mt-4 w-full flex gap-4 items-center justify-between ">
                    <Link to={`/edit-service/${_id}`} className='btn w-[48%] text-white bg-cyan-600 '>Edit</Link>
                    <button onClick={() => handleDeleteService(_id)} className='btn w-[48%] text-white bg-pink-600 '>Delete</button>
                </div>
            </div>
        </motion.div>
    )
}

export default ManageServiceCard