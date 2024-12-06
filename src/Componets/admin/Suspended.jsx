import React, { useEffect, useState } from 'react'
import axios from '../../axiosConfig'
import AdminNav from './AdminNav'
import { useNavigate } from 'react-router-dom'

function SuspendedUsers() {
    const [users,setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('admin/suspend-acc').then((res)=>{
            setUsers(res.data)
        })
    },[users])

    const handleProfile = (id)=>{
        navigate(`/admin/suspend-users/${id}`)
    }

    return (
        <div>
            <AdminNav/>
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-red-festive-irregular-simple-red-background-material-backgroundred-festive-backgroundred-image_87410.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">Suspended Users</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto p-2">
                <table className="table table-xs">
                    <thead className=' text-lg bg-red-800 text-white'>
                        <tr >
                            <th></th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Company Reg No</th>
                            <th>Suspend Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                            return (
                                <tr onClick={()=>handleProfile(user._id)} key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.user?.companyName}</td>
                                    <td>{user.user?.email}</td>
                                    <td>{user.user?.companyRegNumber}</td>
                                    <td>{user.suspendTime}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SuspendedUsers
