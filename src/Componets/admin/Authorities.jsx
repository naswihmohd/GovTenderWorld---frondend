import React, { useEffect } from 'react'
import AdminNav from './AdminNav'
import { FaAddressCard } from "react-icons/fa";
import { Link, Outlet, useNavigate} from 'react-router-dom';
import axios from '../../axiosConfig';
import { useDispatch, useSelector } from 'react-redux';
import { insertAuthority } from '../../features/authoritySlice';

const Authorities = () => {
    const authorities = useSelector((state) => state.authorities)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('/admin/authority').then((res) => {
            if (res.status === 200) {
                dispatch(insertAuthority(res.data))
            }
        })
    }, [dispatch])

    const handleClick =(id)=>{
       navigate(`/admin/authority/${id}`)
    }
    return (
        <div >
            <AdminNav />
            <div
                className="hero h-52"
                style={{
                    backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20240707/pngtree-blue-red-shapes-on-black-background-image_15990904.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-12 text-5xl font-bold">Authorities</h1>
                        <Link to={'/admin/add-authority'}><button className='btn btn-primary mt-4'><FaAddressCard /> Add New Authority</button></Link>
                    </div>
                </div>
            </div>

            <div className="container pt-4 mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {authorities.map((authority) => {
                    return (
                        <div onClick={()=>handleClick(authority._id)} className="w-fullbg-white transition-transform transform hover:scale-105 authority-card shadow-md rounded-lg p-4 border-t-4  border-primary hover:shadow-lg duration-200">
                            <h2 className="text-xl font-semibold mb-2">{authority.name}</h2>
                            <p className="text-gray-700 text-sm font-medium pt-2">Department: {authority.department}</p>
                            <p className="text-sky-700">Contact Person: {authority.contactPerson.fullName}</p>
                            <p className="text-sky-700 text-xs">Mob Number: {authority.contactPerson.phoneNumber}</p>
                        </div>
                    )
                })}

            </div>
            <Outlet />
        </div>
    )
}

export default Authorities
