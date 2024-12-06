import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../axiosConfig'


const UserProfile = () => {
    const navigate= useNavigate()
    const {id} = useParams()
    const [user,setUser] = useState({})
    useEffect(()=>{
        axios.get(`/admin/user-detail/${id}`).then((res)=>{
           if(res.status===200){
            setUser(res.data)
           }
        })
    },[user])

    const handleSuspend=(id)=>{
        navigate(`/admin/suspension/${id}`)
    }
    
    return (
        <div>
            <AdminNav />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://t4.ftcdn.net/jpg/07/42/20/79/360_F_742207929_7Jd7UxcLijq5PnjQkMvdSi6VU7WSzMVM.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-55"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="pt-10 text-5xl font-bold">Account Details</h1>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4r pt-4 '>
                <h1 className='text-xl border bg-green-500 rounded-t-lg text-center font-bold'>.....</h1>
                <hr />
                <div className="max-w-screen mx-auto p-6 shadow-lg rounded-lg user-profile">
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
                            <span className="ml-2 text-sky-800">{user?.email}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Owner Name:</span>
                            <span className="ml-2 text-sky-800">{user?.ownerName}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Contact Number:</span>
                            <span className="ml-2 text-sky-800">{user?.contactNumber}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Company Reg Number:</span>
                            <span className="ml-2 text-sky-800">{user?.companyRegNumber}</span>
                        </div>
                    </div>

                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Address:</span>
                            <span className="ml-2 text-sky-800">{user?.address}</span>
                        </div>
                    </div>
                    <hr className='border-t-4 border-green-500' />

                    <div className="flex mb-6 pt-5">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Suspend this Account - </span>
                            <span className="ml-2 text-sky-800"><a onClick={()=>handleSuspend(user._id)} className='hover:link text-primary'>Click Here</a></span>
                        </div>
                    </div>
                    <div className="flex mb-6">
                        <div className="flex items-center">
                            <span className="text-lg font-semibold text-gray-700">Email to this Account - </span>
                            <span className="ml-2 text-sky-800"><a className='hover:link text-primary'>Click Here</a></span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserProfile 

