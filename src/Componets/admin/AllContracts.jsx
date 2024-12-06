import React, { useEffect, useState } from 'react'
import axios from '../../axiosConfig'
import AdminNav from './AdminNav'

function AllContracts() {
    const [contractData, setContractData] = useState([])

    useEffect(() => {
        axios.get('/admin/all-contracts').then((res) => {
            if (res.status === 200) {
                setContractData(res.data)
            }
        })
    }, [])

    return (
        <div>
            <AdminNav />

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://vrcgroup.in/wp-content/uploads/2023/06/civil-contractor.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">Running Contracts</h1>
                    </div>
                </div>
            </div>


            <div className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full text-left text-sm text-gray-600">
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="px-6 py-3 font-medium ">Tender</th>
                                <th className="px-6 py-3 font-medium ">Tender ID</th>
                                <th className="px-6 py-3 font-medium ">Contractor</th>
                                <th className="px-6 py-3 font-medium ">Authority</th>
                                <th className="px-6 py-3 font-medium ">Account Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contractData.map((data) => {
                                return (
                                    <tr>
                                        <td className="px-6 py-4">{data.tenderId?.title}</td>
                                        <td className="px-6 py-4">{data.tenderId?.tenderId}</td>
                                        <td className="px-6 py-4">{data.userId?.companyName}</td>
                                        <td className="px-6 py-4">{data.authorityId?.name}</td>
                                        <td className="px-6 py-4"><span className={` text-sm px-4 rounded-badge ${data.contractStatus === "Active"
                                            ? "bg-blue-300"
                                            : "bg-red-300"
                                            }`} >{data.contractStatus}</span></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AllContracts
