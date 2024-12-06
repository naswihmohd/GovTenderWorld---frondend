import React, { useEffect, useState } from 'react'
import AuthorityNav from './AuthorityNav'
import { useDispatch, useSelector } from 'react-redux'
import axios from '../../axiosConfig'
import { addTender, unpublishTenders, openTenders, closedTenders } from '../../features/tendersSlice'
import { useNavigate } from 'react-router-dom'

function ApprovedTenders() {
    const tenders = useSelector((state) => state.tenders)
    const [tender, setTender] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/authority/approvedTenders').then((res) => {
            setTender(res.data)
            dispatch(addTender(res.data))
        }).catch((err) => {
            console.log(err)
        })
    }, [dispatch])

    const handleAllTender = () => {
        dispatch(addTender(tender))
    }

    const handlePendingTender = () => {
        dispatch(addTender(tender))
        dispatch(unpublishTenders())
    }

    const handleOpenTender = () => {
        dispatch(addTender(tender))
        dispatch(openTenders())
    }

    const handleClosedTender = () => {
        dispatch(addTender(tender))
        dispatch(closedTenders())
    }

    const handleRowClick = (tenderId) => {
        navigate(`/authority/publish-page/${tenderId}`)
    }
    console.log(tender)
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
                        <h1 className="pt-14 text-5xl font-bold">Tender Publishing</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='py-4 text-end'>
                    <button className='btn me-4  border-l-4 border-slate-500' onClick={handleAllTender}>All</button>
                    <button className='btn text-warning me-4 border-l-4 border-yellow-300' onClick={handlePendingTender}>Pending</button>
                    <button className='btn text-success me-4 border-l-4 border-green-600' onClick={handleOpenTender}>Open</button>
                    <button className='btn text-error border-l-4 border-red-600' onClick={handleClosedTender}>Closed</button>
                </div>
            </div>

            <section className="min-h-screen bg-gray-50 pb-12">
                <div className="container mx-auto px-6 lg:px-12">

                    {/* Tender Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tenders.map((tender) => (
                            <div
                                key={tender._id}
                                onClick={()=>handleRowClick(tender._id)}
                                className="bg-white hover:bg-slate-200 shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
                            >
                                {tender.bidStatus === "Pending" && <img className="w-24" src="https://media4.giphy.com/media/MfD9kqIek9bBq8t7nL/giphy.gif?cid=6c09b9525cuecoyh0ktv1mkcyz5n6jvi0tpw4i1ncv7ijcus&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />}
                                {tender.bidStatus === "Open" && <img className="w-24" src="https://data.textstudio.com/output/sample/animated/2/3/4/5/live-5-5432.gif" alt="" />}
                                {tender.bidStatus === "Closed" && <img className="w-24" src="https://media0.giphy.com/media/hSiu6K4QXPuNEwPc7A/200w.gif" alt="" />}


                                {/* Tender Title */}
                                <h3 className="text-lg font-bold  text-gray-800 mb-4">
                                    {tender.title}
                                </h3>

                                {/* Tender ID */}
                                <div className='flex justify-between mb-3'>
                                    <p className="font-semibold text-sm">Tender ID:</p>
                                    <p className="text-gray-600 text-sm">{tender.tenderId}</p>
                                </div>

                                <div className='flex justify-between mb-3'>
                                    <p className="font-semibold text-sm">Location:</p>
                                    <p className="text-gray-600 text-sm">{tender.location}</p>
                                </div>

                                {/* Bidders Count */}
                                <div className='flex justify-between mb-3'>
                                    <p className="font-semibold text-sm">Bidders Count:</p>
                                    <p className="text-gray-600 text-sm">{tender.bidders.length}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ApprovedTenders
