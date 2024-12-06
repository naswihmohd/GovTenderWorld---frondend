

import axios from '../axiosConfig'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addBids, onProcessBids, rejectedBids, approvedBids } from "../features/bidsSlice";

const BidsSubmitted = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [myBids, setMyBids] = useState([])
    const bids = useSelector((state) => state.bids)

    useEffect(() => {
        axios.get('/bids').then((response) => {
            if (response.status === 200) {
                setMyBids(response.data)
                dispatch(addBids(response.data))
            }
        })
    }, [dispatch])

    const handleClick = (id) => {
        navigate(`/bid-details/${id}`)
    }

    const handleAll = () => {
        dispatch(addBids(myBids))
    }

    const handleOnprocess = () => {
        dispatch(addBids(myBids))
        dispatch(onProcessBids())
    }

    const handleApproved = () => {
        dispatch(addBids(myBids))
        dispatch(approvedBids())
    }

    const handleRejected = () => {
        dispatch(addBids(myBids))
        dispatch(rejectedBids())
    }

    return (
        <div>
            <NavBar />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://www.shutterstock.com/shutterstock/videos/1041872032/thumb/5.jpg?ip=x480)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">Bids Submitted</h1>
                    </div>
                </div>

            </div>



            {/* {bids.length === 0 ? (
                <div className='text-center h-96'>
                    <div className="flex justify-center pt-24">
                        <img className='w-40 ' src="https://cdn-icons-gif.flaticon.com/17771/17771137.gif" alt="" />
                    </div>
                    <h1 className='font-thin text-xl'>You have not submitted any bids.</h1>
                </div>
            ) : ( */}
            <section className="min-h-screen bg-gray-50 py-12">
                <div className="container mx-auto px-6 lg:px-12">

                    <div className='pb-8 text-end'>
                        <button className='btn me-4  border-l-4 border-slate-500' onClick={handleAll} >All</button>
                        <button className='btn text-warning me-4 border-l-4 border-yellow-300' onClick={handleOnprocess} >On Process</button>
                        <button className='btn text-success me-4 border-l-4 border-green-600' onClick={handleApproved}>Approved</button>
                        <button className='btn text-error border-l-4 border-red-600' onClick={handleRejected}>Rejected</button>
                    </div>

                    {/* Tender Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bids.map((bid) => (
                            <div
                                onClick={() => handleClick(bid._id)}
                                key={bid._id}
                                className="bg-white hover:border-l-4 border-violet-900 shadow-lg rounded-lg px-6 pt-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                            >

                                <div className="flex justify-end">
                                    {bid.bidStatus === "On Process" && <img className="w-16" src="https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif" alt="" />}
                                    {bid.bidStatus === "Approved" && <img className="w-16" src="https://i.pinimg.com/originals/d7/f4/8e/d7f48e8c1678487053c32bd561082085.gif" alt="" />}
                                    {bid.bidStatus === "Rejected" && <img className="w-16" src="https://media.tenor.com/7TsXLjyH2woAAAAM/denied-saquinon.gif" alt="" />}
                                </div>

                                <h3 className="text-lg font-semibold text-gray-800 mb-2 pt-3">
                                    {bid.tender?.title}
                                </h3>

                                <hr className="mb-2" />

                                <div className="flex justify-between text-gray-600 text-sm mb-2">
                                    <p className=" font-semibold">Authority:</p>
                                    <p >{bid.tender?.authority}</p>

                                </div>

                                <div className="flex justify-between text-gray-600 text-sm mb-2">
                                    <p className=" font-semibold">Tender Type :</p>
                                    <p > {bid.tender?.tenderType}</p>

                                </div>

                                <div className="flex justify-between text-gray-600 text-sm mb-2">
                                    <p className=" font-semibold">Proposed Budget:</p>
                                    <p className='text-green-600'> {bid.bidProposal.proposedBudget}</p>

                                </div>

                                <div className="flex justify-between text-gray-600 text-sm mb-9">
                                    <p className=" font-semibold">Timeline:</p>
                                    <p className='text-red-800'> {bid.bidProposal.timeline}</p>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* )} */}

            <Footer />
        </div>
    )
}

export default BidsSubmitted
