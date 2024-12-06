import axios from '../../axiosConfig';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import AuthorityNav from './AuthorityNav';
import ConfirmPopup from '../admin/Popup';

function PublishPage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const { tenderId } = useParams()
    const [bidStatus, setBidStatus] = useState()
    const [tender, setTender] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`/authority/my-tenders/${tenderId}`).then((res) => {
            setTender(res.data)
        })
    }, [])

    const handlePublish = (status) => {
        setBidStatus(status)
        setIsPopupOpen(true)
    };

    const handleConfirm = () => {
        axios.put(`/authority/publish/${tenderId}`, bidStatus).then((res) => {
            if (res.status === 200) {
                navigate('/authority/approved-tenders')
            }
        })
    }

    const handleCancel = () => {
        setIsPopupOpen(false)
    }

    const handleBidder = (tenderId) => {
        navigate(`/authority/bidders/${tenderId}`)
    }


    return (
        <div>
            <AuthorityNav />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                        {tender.title}
                    </h1>
                    <div className="space-y-4">
                        <div className='flex flex-col sm:flex-row sm:justify-between my-6'>
                            <p className="text-gray-600 font-semibold text-sm">Tender ID :</p>
                            <p>{tender.tenderId}</p>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between my-6'>
                            <p className="text-gray-600 font-semibold text-sm">Tender Type :</p>
                            <p>{tender.tenderType}</p>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between my-6'>
                            <p className="text-gray-600 font-semibold text-sm">Budget :</p>
                            <p>{tender.tenderValue}</p>
                        </div>
                        <div className='flex flex-col sm:flex-row sm:justify-between my-6'>
                            <p className="text-gray-600 font-semibold text-sm">Submission Deadline :</p>
                            <p>{tender.submissionDeadline}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-semibold text-sm">Description :</p>
                            <p>{tender.description}</p>
                        </div>
                    </div>

                    {tender.bidStatus === 'Open' && <button
                        onClick={() => handlePublish({ bidStatus: 'Closed' })}
                        className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
                    >
                        Close Tender
                    </button>}

                    {tender.bidStatus === 'Pending' && <button
                        onClick={() => handlePublish({ bidStatus: 'Open' })}
                        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Publish Tender
                    </button>}

                    <div>

                        {tender.bidStatus === 'Closed' && <button
                            onClick={() => handleBidder(tender._id)}
                            className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
                        >
                            View Bidders
                        </button>}
                    </div>

                </div>
            </div>
            <ConfirmPopup
                isOpen={isPopupOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Are you sure to publish this tender?"
            />
        </div>
    )
}

export default PublishPage
