import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axiosConfig'
import { addTender, pendingTenders, approvedTenders, rejectedTenders } from '../../features/tendersSlice'
import { Outlet, useNavigate } from 'react-router-dom'

function AllTenders() {
    const tenders = useSelector((state) => state.tenders)
    const [MyTender, setMyTender] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get('/admin/all-tenders').then((response) => {
            dispatch(addTender(response.data))
            setMyTender(response.data)
        })
    }, [dispatch])

    const handleRowClick = (tenderId) => {
        navigate(`/admin/tender/${tenderId}`)
    }

    const handleAllTender = () => {
        dispatch(addTender(MyTender))
    }

    const handlePendingTender = () => {
        dispatch(addTender(MyTender))
        dispatch(pendingTenders())
    }

    const handleApprovedTender = () => {
        dispatch(addTender(MyTender))
        dispatch(approvedTenders())
    }

    const handleRejectedTender = () => {
        dispatch(addTender(MyTender))
        dispatch(rejectedTenders())
    }

    return (
        <div>
            <AdminNav />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://wallpapers.com/images/hd/trading-1920-x-1080-wallpaper-87ccmbpqt47xmi6o.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">All Tenders</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto p-2">
                <div className='p-4 text-end'>
                    <button className='btn me-4  border-l-4 border-slate-500' onClick={handleAllTender}>All</button>
                    <button className='btn text-warning me-4 border-l-4 border-yellow-300' onClick={handlePendingTender}>Pending</button>
                    <button className='btn text-success me-4 border-l-4 border-green-600' onClick={handleApprovedTender}>Approved</button>
                    <button className='btn text-error border-l-4 border-red-600' onClick={handleRejectedTender}>Rejected</button>
                </div>
                <table className="table table-xs">
                    <thead className='bg-blue-950 text-white text-xl'>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>TenderId</th>
                            <th>location</th>
                            <th>Authority</th>
                            <th>Pubished</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenders.map((tender, index) => {
                            return (
                                <tr onClick={() => handleRowClick(tender._id)}>
                                    <th>{index + 1}</th>
                                    <td >{tender.title}</td>
                                    <td>{tender.tenderId}</td>
                                    <td>{tender.location}</td>
                                    <td>{tender.authority}</td>
                                    <td>{tender.bidOpeningDate}</td>
                                    {tender.status==="Pending"&& <td><span className='bg-warning px-4 rounded-2xl'>{tender.status}</span></td> }
                                    {tender.status==="Approved"&& <td><span className='bg-success px-4 rounded-2xl'>{tender.status}</span></td> }
                                    {tender.status==="Rejected"&& <td><span className='bg-error px-4 rounded-2xl'>{tender.status}</span></td> }
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Outlet />
        </div>
    )
}

export default AllTenders
