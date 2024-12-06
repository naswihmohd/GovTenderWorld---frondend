import { useEffect, useState } from "react"
import axios from "../../axiosConfig"
import { useParams } from "react-router-dom"



function BidderDetail() {

    const { bidId } = useParams()
    const [bid, setBid] = useState({})
    const [style, setStyle] = useState('')

    useEffect(() => {
        axios.get(`/authority/bidder/${bidId}`).then((response) => {
            setBid(response.data)
        })
    }, [])


    useEffect(() => {
        if (bid.bidStatus === "On Process") {
            setStyle('badge badge-warning')
        } else if (bid.bidStatus === "Approved") {
            setStyle("badge badge-success")
        } else {
            setStyle('badge badge-error')
        }
    }, [bid.bidStatus])

    const handleApproval = (bidId, tenderId) => {

        axios.put(`/authority/bid-approval/${bidId}/${tenderId}`)

    }

    const handleReject = (bidId) => {
        if (bid.bidStatus === "Rejected") {
            console.log('already rejected')
        } else {
            axios.put(`/authority/bid-rejection/${bidId}`).then((res) => {
                if (res.status === 200) {
                    console.log('rejected')
                }
            })
        }
    }

    return (
        <div>

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/abstract-paper-style-background_23-2150743725.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="pt-10 text-5xl font-bold">{bid.tender?.title}</h1>
                    </div>
                </div>
            </div>

            <div className='container mx-auto pt-4'>
                <h1 className='py-3 font-bold text-xl font-mono'>Bid Submitted Details <span className={style} >{bid.bidStatus}</span></h1>
                <hr />
                <div className="grid lg:grid-cols-1">
                    <div className="space-y-4 pt-4 border-t-4 border-b-4 mb-6 border-orange-500 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950 pb-1'>Bid Details</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Proposed Budget:</span>
                            <span className="text-gray-900 ">{bid.bidProposal?.proposedBudget}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Timeline:</span>
                            <span className="text-gray-900 ">{bid.bidProposal?.timeline}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Experience:</span>
                            <span className="text-gray-900 ">{bid.experienceAndQualifications?.experience}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Bank Account No:</span>
                            <span className="text-gray-900 ">{bid.financialDocuments?.bankAccountNumber}</span>
                        </div>
                        <div className="flex justify-between items-center pb-6">
                            <span className="text-gray-600 font-medium">IFCE CODE:</span>
                            <span className="text-gray-900 ">{bid.financialDocuments?.IFCE}</span>
                        </div>
                    </div>
                </div>



                <div className="grid lg:grid-cols-1">
                    <div className="space-y-4 pt-4 border-t-4 border-b-4 border-orange-500 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950'>Tender Details</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Tender Title:</span>
                            <span className="text-gray-900 font-bold">{bid.tender?.title}</span>
                        </div>
                        <div className="flex justify-between items-center ">
                            <span className="text-gray-600 font-medium">Tender ID:</span>
                            <span className="text-gray-900 ">{bid.tender?.tenderId}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Tender Type:</span>
                            <span className="text-gray-900 ">{bid.tender?.tenderType}</span>
                        </div>
                        <div className="flex justify-between items-center pb-6">
                            <span className="text-gray-600 font-medium">Location:</span>
                            <span className="text-gray-900 ">{bid.tender?.location}</span>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-1 mt-6">
                    <div className="space-y-4 pt-4  border-b-4 border-t-4 border-orange-500 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950 pb-1'>Bidder Details</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Owner Name:</span>
                            <span className="text-gray-900 ">{bid.user?.ownerName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Company Name:</span>
                            <span className="text-gray-900 ">{bid.user?.companyName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Company Reg No:</span>
                            <span className="text-gray-900 ">{bid.user?.companyRegNumber}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">email ID:</span>
                            <span className="text-gray-900 ">{bid.user?.email}</span>
                        </div>
                        <div className="flex justify-between items-center pb-6">
                            <span className="text-gray-600 font-medium">Phone Number:</span>
                            <span className="text-gray-900 ">{bid.user?.contactNumber}</span>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
            </div>


            <div className="container mx-auto my-2 mb-9">
                <h1 className="text-2xl font-semibold p-3 border-l-4 border-info">Decision Panel</h1>
                <h1 className="p-3">Ensure all criteria are thoroughly reviewed before approving or rejecting the tender to maintain fairness and transparency in the process.</h1>
                {bid.bidStatus === "On Process" && <div className="flex items-center justify-end mt-5">
                    <button onClick={() => handleApproval(bid._id, bid.tender._id)} className='btn mx-3 bg-success'>Approved</button>
                    <button onClick={() => handleReject(bid._id)} className='btn bg-error'>Rejected</button>
                </div>}
            </div>
        </div>
    )
}

export default BidderDetail
