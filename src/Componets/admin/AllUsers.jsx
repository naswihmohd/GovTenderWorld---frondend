import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axios from '../../axiosConfig'
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addUsers} from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';

function AllUsers() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/admin/all-users').then((response) => {
            dispatch(addUsers(response.data))
        })
    },[dispatch])


    const handleSuspend=(id)=>{
        navigate(`/admin/suspension/${id}`)
    }

    const handleUser=(id)=>{
        navigate(`/admin/user-profile/${id}`)
    }

    return (
        <div>
            <AdminNav />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://png.pngtree.com/background/20210715/original/pngtree-digital-technology-low-poly-design-picture-image_1276779.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">All Users</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto p-2">
                <table className="table table-xs">
                    <thead className=' text-lg bg-emerald-900 text-white'>
                        <tr >
                            <th></th>
                            <th>Company</th>
                            <th>Owner Name</th>
                            <th>Email</th>
                            <th>Company Reg No</th>
                            <th>Contact No</th>
                            <th>Last Login</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <th onClick={()=>handleUser(user._id)}>{index + 1}</th>
                                    <td onClick={()=>handleUser(user._id)}>{user.companyName}</td>
                                    <td onClick={()=>handleUser(user._id)}>{user.ownerName}</td>
                                    <td onClick={()=>handleUser(user._id)}>{user.email}</td>
                                    <td onClick={()=>handleUser(user._id)}>{user.companyRegNumber}</td>
                                    <td onClick={()=>handleUser(user._id)}>{user.contactNumber}</td>
                                    <td onClick={()=>handleUser(user._id)}>4.00</td>
                                    <td>
                                        <button onClick={() => handleSuspend(user._id)} className="btn hover:bg-red-800 hover:text-white">
                                            <FaTrash /><span>Suspend</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUsers
