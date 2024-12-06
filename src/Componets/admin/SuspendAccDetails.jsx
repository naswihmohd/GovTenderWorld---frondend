import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../axiosConfig'
import ConfirmPopup from './Popup'

const SuspendAccDetails = () => {
    const { id } = useParams()
    const [user, setUser] = useState({})
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`/admin/suspend/${id}`).then((res) => {
            setUser(res.data)
        })
    })

    const handleSuspension = () => {
        setIsPopupOpen(true)
    }

    const handleConfirm =()=>{
        axios.put(`/admin/active-account/${user.user._id}/${user._id}`).then((res)=>{
            if(res.status===200){
                navigate('/admin/suspend-users')
            }
        })
    }

    const handleCancel = () =>{
        setIsPopupOpen(false)
    }

    return (
        <div>
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://img.freepik.com/premium-photo/red-wallpapers-that-will-make-you-want-red-wallpapers_889227-20197.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="pt-10 text-5xl font-bold">Suspend Account Details</h1>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4r pt-4 '>
                <h1 className='text-xl border bg-red-500 rounded-t-lg text-center font-bold'>.....</h1>
                <hr />
                <div className="max-w-screen mx-auto p-6 shadow-lg rounded-lg suspend-user-profile">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4"></h1>
                    <p className="text-gray-600 mb-6"></p>


                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Comapany Name:</span>
                            <span className="ml-2 text-2xl font-bold text-sky-800"> {user.user?.companyName} </span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Suspend Time:</span>
                            <span className="ml-2 text-error"> {user.suspendTime} </span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Suspend Reason:</span>
                            <span className="ml-2 text-blue-900 bg-yellow-200 px-3"> {user.suspendReason} </span>
                        </div>
                    </div>

                    <hr className='border-t-4 border-red-200' />

                    <div className="flex mb-6 pt-3">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Email:</span>
                            <span className="ml-2 text-sky-800">{user.user?.email}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Owner Name:</span>
                            <span className="ml-2 text-sky-800">{user.user?.ownerName}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Contact Number:</span>
                            <span className="ml-2 text-sky-800">{user.user?.contactNumber}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Company Reg Number:</span>
                            <span className="ml-2 text-sky-800">{user.user?.companyRegNumber}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Address:</span>
                            <span className="ml-2 text-sky-800">{user.user?.address}</span>
                        </div>
                    </div>
                    <hr className='border-t-4 border-red-200' />

                    <div className="flex mb-6 pt-5">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Active this Account - </span>
                            <span className="ml-2 text-sky-800"><a onClick={() => handleSuspension(user._id)} className='btn bg-green-500 hover:bg-green-900 hover:text-white'>Active</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmPopup
                isOpen={isPopupOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Are you sure want to Activate Account of User?"
            />
        </div>
    )
}

export default SuspendAccDetails
