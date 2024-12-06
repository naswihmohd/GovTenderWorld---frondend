import { useEffect, useState } from "react"
import axios from "../axiosConfig"
import { useParams } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"


function BidDetails() {

    const { id } = useParams()
    const [bid, setBid] = useState({})
    const [style, setStyle] = useState('')

    useEffect(() => {
        axios.get(`/bid-detail/${id}`).then((response) => {
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

    console.log(bid)

    return (
        <div>
            <NavBar />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-vector/dark-wavy-background_23-2148388252.jpg)",
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
                <div className="grid lg:grid-cols-2">
                    <div className="space-y-4 pt-4 border-t-4 border-violet-900 ps-5 pe-4">
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
                            <span className="text-gray-600 font-medium">Authority:</span>
                            <span className="text-gray-900 ">{bid.tender?.authority}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Tender Type:</span>
                            <span className="text-gray-900 ">{bid.tender?.tenderType}</span>
                        </div>
                        <div className="flex justify-between items-centerpb-4">
                            <span className="text-gray-600 font-medium">Location:</span>
                            <span className="text-gray-900 ">{bid.tender?.location}</span>
                        </div>
                    </div>
                    <div className="space-y-4 pt-4  border-b-4 border-violet-900 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950 pb-1'>Submitted Details</h1>
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
                <hr className='my-3' />
            </div>

            <div className="container text-center h-80 mx-auto my-2">
                {bid.bidStatus === 'On Process' && <div className="border-violet-900 update-val">
                    <h1 className=" font-mono text-yellow-600">Your bid is currently in validation process...</h1>
                </div>}

                {bid.bidStatus === "Approved" && <div className="border-violet-900 update-sucess">
                    <h1 className="pt-52 font-mono text-green-600 ">Your bid has been approved.</h1>
                    <button className="btn bg-green-600 my-3 text-white">Open Dashboard</button>
                </div>}

                {bid.bidStatus === "Rejected" && <div className="border-violet-900 update-reject">
                    <h1 className="pt-48 font-mono text-red-600 ">Bid Rejected</h1>
                </div>}

            </div>

            <Footer/>

        </div>
    )
}

export default BidDetails
