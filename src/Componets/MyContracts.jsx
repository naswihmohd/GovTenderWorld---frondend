import axios from '../axiosConfig';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate, useParams } from 'react-router-dom';

function MyContracts() {

    const [contracts, setContracts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/my-contracts').then((res) => {
            setContracts(res.data)
        })
    }, [])

    const handleClick = (id) => {
        navigate(`/contract/dashboard/${id}`)
    }

    return (
        <div>

            <NavBar />

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/022/453/397/non_2x/silhouette-of-engineer-looking-at-construction-site-engineering-concept-double-exposure-generative-ai-free-photo.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">My Contracts</h1>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-gray-100 py-8 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contracts.map((contract) => (
                            <div
                                onClick={() => handleClick(contract._id)}
                                key={contract._id}
                                className="bg-white rounded-lg shadow px-6 pb-6 pt-2 hover:shadow-lg transition"
                            >

                                <div className="flex justify-end">
                                    <img className='h-14' src="https://www.bmjschool.in/assets/img/crop/Processing.gif" alt="" />
                                </div>

                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    {contract.tenderId?.title}
                                </h2>
                                <hr className='pb-2' />

                                <p className="text-sm text-gray-600 mb-1">
                                    Portal Status: <span className={` text-xs text-black px-2 rounded-badge ${contract.contractStatus === "Active"
                                        ? "bg-blue-300"
                                        : "bg-green-300"
                                        }`} >{contract.contractStatus}</span>
                                </p>

                                <p className="text-sm text-gray-600 mb-1">
                                    Authority: {contract.tenderId?.authority}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    Budget: <span className='text-green-800'>{contract.bidderId.bidProposal?.proposedBudget}</span>
                                </p>

                                <p className="text-sm text-gray-600">
                                    Timeline: <span className='text-red-800'> {contract.bidderId.bidProposal?.timeline}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyContracts
