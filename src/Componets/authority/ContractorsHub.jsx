import React, { useEffect, useState } from 'react'
import AuthorityNav from './AuthorityNav'
import axios from '../../axiosConfig'
import { Outlet, useNavigate } from 'react-router-dom'

function ContractorsHub() {
    const [contractors, setContractors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/authority/contractors').then((res) => {
            if (res.status === 200) {
                setContractors(res.data)
            }
        })

    }, [])

    const handleRowClick = (contractId) => {
        navigate(`/authority/contract-details/${contractId}`)
    }

    return (
        <div>
            <AuthorityNav />
            <div
                className="hero h-52"
                style={{
                    backgroundImage: "url(https://png.pngtree.com/background/20230317/original/pngtree-beautiful-background-of-high-rise-buildings-picture-image_2148726.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-14 text-5xl font-bold">Contractors Hub</h1>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto p-2">
                <table className="table table-xs">
                    <thead  >
                        <tr className='bg-slate-400'>
                            <th>NO</th>
                            <th>Company</th>
                            <th>Tender</th>
                            <th>Tender ID</th>
                            <th>location</th>
                            <th>Contract Date</th>
                            <th>Completion Status</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contractors.map((contractor, index) => {
                            return (
                                <tr onClick={() => handleRowClick(contractor._id)} >
                                    <th>{index + 1}</th>
                                    <td>{contractor.userId?.companyName}</td>
                                    <td>{contractor.tenderId?.title}</td>
                                    <td>{contractor.tenderId?.tenderId}</td>
                                    <td>{contractor.tenderId?.location}</td>
                                    <td>{contractor.contractDate}</td>
                                    <td><span className={` text-xs text-black px-3 rounded-badge ${contractor.status === "Active"
                                        ? "bg-blue-300"
                                        : "bg-green-300"
                                        }`} >{contractor.status}</span></td>
                                    <td><span className={` text-xs px-2 rounded-badge ${contractor.contractStatus === "Active"
                                        ? "bg-blue-300"
                                        : "bg-red-300"
                                        }`}>{contractor.contractStatus}</span></td>
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

export default ContractorsHub
