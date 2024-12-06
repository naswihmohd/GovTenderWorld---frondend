import React, { useEffect, useState } from 'react'
import AuthorityNav from './AuthorityNav'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axiosConfig'
import { addTender, pendingTenders, approvedTenders, rejectedTenders } from '../../features/tendersSlice'
import { useNavigate } from 'react-router-dom'

function MyTenders() {
    const tenders = useSelector((state) => state.tenders)
    const [MyTender, setMyTender] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('/authority/myTenders').then((res) => {
            dispatch(addTender(res.data.tenderHistory))
            setMyTender(res.data.tenderHistory)
        }).catch((err) => {
            console.log(err)
        })
    }, [dispatch])

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

    const handleRowClick = (tenderId) => {
        navigate(`/authority/my-tenders/${tenderId}`)
    }
    console.log(tenders)
    return (
        <div>
            <AuthorityNav />
            <div
                className="hero h-52"
                style={{
                    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-14 text-5xl font-bold">My Tenders</h1>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto p-7">
                <div className='py-4 text-end'>
                    <button className='btn me-4  border-l-4 border-slate-500' onClick={handleAllTender}>All</button>
                    <button className='btn text-warning me-4 border-l-4 border-yellow-300' onClick={handlePendingTender}>Pending</button>
                    <button className='btn text-success me-4 border-l-4 border-green-600' onClick={handleApprovedTender}>Approved</button>
                    <button className='btn text-error border-l-4 border-red-600' onClick={handleRejectedTender}>Rejected</button>
                </div>
                <table className="table table-xs">
                    <thead  >
                        <tr className='bg-slate-400'>
                            <th></th>
                            <th>Title</th>
                            <th>TenderId</th>
                            <th>location</th>
                            <th>Pubished</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tenders.map((tender, index) => {
                            return (
                                <tr key={tender._id} onClick={() => handleRowClick(tender._id)} >
                                    <th>{index + 1}</th>
                                    <td>{tender.title}</td>
                                    <td>{tender.tenderId}</td>
                                    <td>{tender.location}</td>
                                    <td>{tender.bidOpeningDate}</td>
                                    {tender.status === "Pending" && <td className="badge badge-warning text-xs">{tender.status}</td>}
                                    {tender.status === "Approved" && <td className="badge badge-success text-xs">{tender.status}</td>}
                                    {tender.status === "Rejected" && <td className="badge badge-error text-xs ">{tender.status}</td>}
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyTenders
