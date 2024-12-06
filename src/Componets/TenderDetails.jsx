import React, { useEffect } from 'react'
import NavBar from './NavBar'
import axios from '../axiosConfig'
import { Outlet, useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { insertTender } from '../features/tenderSlice'
import Footer from './Footer'

function TenderDetails() {
    const dispatch = useDispatch()
    const tender = useSelector((state) => state.tender)
    const { tenderId } = useParams()

    useEffect(() => {

        axios.get(`/tender/${tenderId}`).then((response) => {
            dispatch(insertTender(response.data))
            console.log(response.data)
        })
    }, [dispatch])
    return (
        <div>
            <div>
                <NavBar />
                <div
                    className="hero h-44"
                    style={{
                        backgroundImage: "url(https://png.pngtree.com/background/20210715/original/pngtree-digital-technology-low-poly-design-picture-image_1276779.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="pt-10 text-5xl font-bold">Tender Details</h1>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto px-4r pt-4'>
                    <h1 className='text-xl border bg-green-200 rounded-t-lg text-center font-bold'>.....</h1>
                    <hr />
                    <div className="max-w-screen mx-auto p-6 bg-white shadow-lg rounded-lg">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{tender.title}</h1>
                        <p className="text-gray-600 mb-6">{tender.description}</p>

                        <div className="flex mb-6">
                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-700">Authority:</span>
                                <span className="ml-2 text-sky-800">{tender.authority}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:justify-between mb-6">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <span className="text-lg font-semibold text-gray-700">Deadline:</span>
                                <span className="ml-2 text-error">{tender.bidSubmitionEndDate}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg font-semibold text-gray-700">Budget:</span>
                                <span className="ml-2 text-green-500">budget</span>
                            </div>
                        </div>

                        <hr />
                        <h1 className='pt-3 font-bold'>Basic Details</h1>
                        <hr />
                        <div className="space-y-4 pt-4 border-l-4 border-red-600 ps-5">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">Tender ID:</span>
                                <span className="text-gray-900 ">{tender.tenderId}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">Tender Type:</span>
                                <span className="text-gray-900 ">{tender.tenderType}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">Tender Category:</span>
                                <span className="text-gray-900 ">{tender.tenderCategory}</span>
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span className="text-gray-600 font-medium">Payment Mode:</span>
                                <span className="text-gray-900 ">{tender.paymentMethod}</span>
                            </div>
                        </div>

                        <h1 className='pt-3 font-bold'>Tender & EMD Fee Details</h1>
                        <hr />
                        <div className="grid lg:grid-cols-2">
                            <div className="space-y-4 pt-4 md:pe-5 border-l-4 border-indigo-500 ps-5">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Tender Fee in ₹:</span>
                                    <span className="text-gray-900">{tender.tenderFee}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Tender Fee Exemption Allowed:</span>
                                    <span className="text-gray-900">{tender.tenderFeeExemptionAllowed}</span>
                                </div>

                            </div>
                            <div className="space-y-4 pt-4 ps-5 border-l-4 border-indigo-500">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">EMD Amount in ₹:</span>
                                    <span className="text-gray-900">{tender.emdFee}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">EMD Fee Type:</span>
                                    <span className="text-gray-900">{tender.emdFeeType}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">EMD Exemption Allowed:</span>
                                    <span className="text-gray-900">{tender.emdExmptionAllowed}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4">
                                    <span className="text-gray-600 font-medium">EMD Percentage:</span>
                                    <span className="text-gray-900">{tender.emdPercentage}</span>
                                </div>
                            </div>
                        </div>


                        <h1 className='pt-3 font-bold'>Work Item Details</h1>
                        <hr />
                        <div className="grid lg:grid-cols-2">
                            <div className="space-y-4 pt-4 md:pe-5 border-l-4 border-green-500 ps-5">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Title:</span>
                                    <span className="text-gray-900">{tender.title}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Work Description:</span>
                                    <span className="text-gray-900">{tender.description}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Location:</span>
                                    <span className="text-gray-900">{tender.location}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4">
                                    <span className="text-gray-600 font-medium">Pincode:</span>
                                    <span className="text-gray-900">{tender.pincode}</span>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4 ps-5 border-l-4 border-green-500">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Contract Type:</span>
                                    <span className="text-gray-900">{tender.contractType}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Product Category:</span>
                                    <span className="text-gray-900">{tender.productCategory}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Bid Validity(Days):</span>
                                    <span className="text-gray-900">{tender.bidValidityDays}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4">
                                    <span className="text-gray-600 font-medium">Period Of Work(Days):</span>
                                    <span className="text-gray-900">{tender.periodOfWork}</span>
                                </div>
                            </div>
                        </div>


                        <h1 className='pt-3 font-bold'>Critical Dates</h1>
                        <hr />
                        <div className="grid lg:grid-cols-2">
                            <div className="space-y-4 pt-4 md:pe-5 border-l-4 border-warning ps-5">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Published Date:</span>
                                    <span className="text-gray-900">{tender.publishingDate}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Document Download / Sale Start Date:</span>
                                    <span className="text-gray-900">{tender.docuDowStartDate}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Clarification Start Date:</span>
                                    <span className="text-gray-900">{tender.clarificationStartDate}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4">
                                    <span className="text-gray-600 font-medium">Bid Submission Start Date:</span>
                                    <span className="text-gray-900">{tender.bidSubmitionStartDate}</span>
                                </div>
                            </div>
                            <div className="space-y-4 pt-4 ps-5 border-l-4 border-warning">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Bid Opening Date:</span>
                                    <span className="text-gray-900">{tender.bidOpeningDate}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Document Download / Sale End Date:</span>
                                    <span className="text-gray-900">{tender.docuDowEndDate}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 font-medium">Clarification End Date:</span>
                                    <span className="text-gray-900">{tender.clarificationEndDate}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4">
                                    <span className="text-gray-600 font-medium">Bid Submission End Date:</span>
                                    <span className="text-gray-900">{tender.bidSubmitionEndDate}</span>
                                </div>
                            </div>
                        </div>


                        <h1 className='pt-3 font-bold'>Tenders Documents</h1>
                        <hr />
                        <div className="space-y-4 pt-4 md:pe-5 border-l-4 border-info ps-5">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">NIT Notice:</span>
                                <span className="text-gray-900">tenderId</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">BID Notice:</span>
                                <span className="text-gray-900">tenderType</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600 font-medium">DRAFT NIT:</span>
                                <span className="text-gray-900">tenderCategory</span>
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <span className="text-gray-600 font-medium">Other file:</span>
                                <span className="text-gray-900">paymentMode</span>
                            </div>
                        </div>
                        <hr className='border-b-2 mt-5 border-black ' />
                        <div className='text-center mt-3'>
                            <Link to={`/tender/bidding/${tenderId}`} > <button className='btn btn-primary'>Apply Tender</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Outlet />
        </div>
    )
}

export default TenderDetails
