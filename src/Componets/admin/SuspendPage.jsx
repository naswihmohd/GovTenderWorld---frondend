import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../axiosConfig'
import { useForm } from "react-hook-form";
import ConfirmPopup from './Popup';


const SuspendPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [reason, setReason] = useState('')
    const [user, setUser] = useState()
    const { id } = useParams()
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`/admin/user-detail/${id}`).then((res) => {
            if (res.status === 200) {
                setUser(res.data)
            }
        })
    }, [user])

    const onSubmit = (data) => {
        setReason(data)
        setIsPopupOpen(true);
    }

    const handleConfirm = () => {
        axios.post(`/admin/suspend-user/${user._id}`, reason).then((response) => {
            if (response.status === 200) {
                setIsPopupOpen(false);
                navigate('/admin/all-users')
            }
        })
    };

    const handleCancel = () => {
        setIsPopupOpen(false);
    };

    const handleUser = (id) => {
        navigate(`/admin/user-profile/${id}`)
    }

    return (
        <div>
            <AdminNav />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://w0.peakpx.com/wallpaper/214/775/HD-wallpaper-white-and-red-waves-red-aesthetic.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="pt-10 text-5xl font-bold">Suspension Account</h1>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4r pt-4 '>
                <h1 className='text-xl border bg-red-600 rounded-t-lg text-center font-bold'>.....</h1>
                <hr />
                <div className="max-w-screen mx-auto p-6 shadow-lg rounded-lg suspension">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4"></h1>
                    <p className="text-gray-600 mb-6"></p>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Comapany Name:</span>
                            <span className="ml-2 text-sky-800"> {user?.companyName} </span>
                        </div>
                    </div>
                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Email:</span>
                            <span className="ml-2 text-sky-800">{user?.email}  </span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <a onClick={() => handleUser(user._id)} className='hover:link text-primary'>More Details...</a>

                        </div>
                    </div>

                    <hr />

                    <h3 className=' text-2xl py-2 font-bold'>Reason for Action</h3>

                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control">
                            <div className="label">
                            </div>
                            <textarea {...register('suspendReason', { required: "Suspend Reason is required" })} className="textarea textarea-error textarea-bordered h-24" placeholder="Bio"></textarea>
                            <div className="label">
                                <span className="label-text-alt"></span>
                                {errors.suspendReason && <span className="label-text-alt text-error">{errors.suspendReason.message}</span>}
                            </div>
                        </label>

                        <button className='btn bg-slate-600 w-full text-white'>Suspend Account</button>
                    </form>

                </div>
            </div>
            <ConfirmPopup
                isOpen={isPopupOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Are you sure you want to Suspend this User?"
            />


        </div>
    )
}

export default SuspendPage
