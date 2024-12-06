import React, { useEffect, useState } from 'react'
import axios from '../../axiosConfig'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

function BiddersTable() {
    const [bidders,setBidders] = useState([])
    const navigate = useNavigate()
    const {tenderId} = useParams()

    console.log(tenderId)

    useEffect(()=>{
        axios.get(`/authority/bidders/${tenderId}`).then((res)=>{
            setBidders(res.data)
            console.log(res.data)
        })
    },[])

    const handleRowClick = (bidId) => {
        navigate(`/authority/bidder/${bidId}`)
    }

    return (
        <div>
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://wallpapers.com/images/hd/trading-1920-x-1080-wallpaper-87ccmbpqt47xmi6o.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">All Bidders</h1>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto p-2">
                <table className="table table-xs">
                    <thead className='bg-blue-950 text-white text-lg'>
                        <tr>
                            <th></th>
                            <th>Company</th>
                            <th>email</th>
                            <th>Phone Number</th>
                            <th>Proposed Budget</th>
                            <th>Submitted Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bidders.map((bidder, index) => {
                            return (
                                <tr onClick={() => handleRowClick(bidder._id)}>
                                    <th>{index + 1}</th>
                                    <td >{bidder.user?.companyName}</td>
                                    <td>{bidder.user?.email}</td>
                                    <td>{bidder.user?.contactNumber}</td>
                                    <td>{bidder.bidProposal.proposedBudget}</td>
                                    <td>{bidder.submittedDate}</td>
                                    <td><span className='bg-slate-300 px-3 rounded-lg'>{bidder.bidStatus}</span></td>

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

export default BiddersTable
