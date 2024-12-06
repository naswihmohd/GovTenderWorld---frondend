import { useEffect, useState } from "react"
import axios from "../../axiosConfig"
import { Outlet, useNavigate, useParams } from "react-router-dom"



function ContractDetails() {

    const { contractId } = useParams()
    const navigate = useNavigate()

    const [contract, setContract] = useState({})
    const [progressReports, setProgressReports] = useState([])
    const [reportData, setReportData] = useState({})

    useEffect(() => {
        axios.get(`/authority/contract-details/${contractId}`).then((response) => {
            setContract(response.data.contract)
            setProgressReports(response.data.contract.progressData)
            setReportData(response.data.project)
        })
    }, [])


    const handleTerminate = () => {
        axios.put(`/authority/terminate/${contractId}`).then((response) => {
            if (response.status === 200) {
                navigate(0)
            }
        })
    }

    const handleActivate = () => {
        axios.put(`/authority/activate/${contractId}`).then((response) => {
            if (response.status === 200) {
                navigate(0)
            }
        })
    }

    const handleStatus = (status) => {
        axios.put(`/authority/updateStatus/${reportData._id}`, status).then((res) => {
            if (res.status === 200) {
                navigate(0)
            }
        })

    }

    return (
        <div>
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://i.pinimg.com/originals/e5/d7/42/e5d7426b911e35aa1e517c52d56b984b.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="pt-10 text-5xl font-bold">{contract.tenderId?.title} <span className={` text-xs text-black px-3 py-1 rounded-badge ${contract.status === "Active"
                    ? "bg-blue-300"
                    : "bg-green-300"
                    }`} >{contract.status}</span></h1>
                    </div>
                </div>
            </div>

            <div className='container mx-auto pt-4'>
                <h1 className='py-3 font-bold text-xl font-mono'>Bid Submitted Details <span className={` text-sm px-2 py-1 rounded-badge ${contract.contractStatus === "Active"
                    ? "bg-blue-300"
                    : "bg-red-300"
                    }`} >{contract.contractStatus}</span></h1>
                <hr />
                <div className="grid lg:grid-cols-2">
                    <div className="space-y-4 pt-4 border-t-4 border-violet-900 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950'>Tender Details</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Tender Title:</span>
                            <span className="text-gray-900 font-bold">{contract.tenderId?.title}</span>
                        </div>
                        <div className="flex justify-between items-center ">
                            <span className="text-gray-600 font-medium">Tender ID:</span>
                            <span className="text-gray-900 ">{contract.tenderId?.tenderId}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Authority:</span>
                            <span className="text-gray-900 ">{contract.tenderId?.authority}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Tender Type:</span>
                            <span className="text-gray-900 ">{contract.tenderId?.tenderType}</span>
                        </div>
                        <div className="flex justify-between items-centerpb-4">
                            <span className="text-gray-600 font-medium">Location:</span>
                            <span className="text-gray-900 ">{contract.tenderId?.location}</span>
                        </div>
                    </div>
                    <div className="space-y-4 pt-4  border-b-4 border-violet-900 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950 pb-1'>Contractor Details</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Company Name:</span>
                            <span className="text-gray-900 ">{contract.userId?.companyName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Owner Name:</span>
                            <span className="text-gray-900 ">{contract.userId?.ownerName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Email ID:</span>
                            <span className="text-gray-900 ">{contract.userId?.email}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Phone Number:</span>
                            <span className="text-gray-900 ">{contract.userId?.contactNumber}</span>
                        </div>
                        <div className="flex justify-between items-center pb-6">
                            <span className="text-gray-600 font-medium">Company Reg Number:</span>
                            <span className="text-gray-900 ">{contract.userId?.companyRegNumber}</span>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />


                <div className=" flex flex-col items-center pb-12 px-4">
                    <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 border-b flex justify-between">
                            <div>
                                {contract.contractStatus === "Terminated" && <img className="h-16" src="https://media.lordicon.com/icons/wired/flat/1140-error.gif" alt="" />}
                                <h2 className="text-2xl font-bold text-gray-800">Work Progress Report</h2>
                                <p className="text-gray-600 mt-2">
                                    Track the monthly progress of your ongoing project.
                                </p>
                            </div>

                            {contract.contractStatus === "Terminated" && <button className="btn hover:bg-green-950 bg-green-800 text-white mt-20 text-xs" onClick={handleActivate}>Activate Contract</button>}
                            {contract.contractStatus === "Active" && <button className="btn hover:bg-red-950 bg-red-800 text-white mt-4 text-xs" onClick={handleTerminate}>Terminate Contract</button>}

                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm text-gray-600">
                                <thead className="bg-violet-900 text-white">
                                    <tr>
                                        <th className="px-6 py-3 font-medium">Date</th>
                                        <th className="px-6 py-3 font-medium ">Phase/Stage</th>
                                        <th className="px-6 py-3 font-medium ">Progress Description</th>
                                        <th className="px-6 py-3 font-medium ">Completion (%)</th>
                                        <th className="px-6 py-3 font-medium">Report/File</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {progressReports.map((report, index) => (
                                        <tr
                                            key={index}
                                            className="even:bg-gray-50 hover:bg-gray-100 transition duration-150"
                                        >
                                            <td className="px-6 py-4">{report.date}</td>
                                            <td className="px-6 py-4">{report.stage}</td>
                                            <td className="px-6 py-4">{report.description}</td>
                                            <td className="px-6 py-4">{report.completion}%</td>
                                            <td className="px-6 py-4">
                                                <a
                                                    href={report.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    Download
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {contract.status === "Finished" && (
                    <div className=" py-8 px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                                Final Report of Contract
                            </h1>
                            <div className="space-y-4">
                                {/* Completion Date */}
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600">Completion Date:</span>
                                    <span className="text-gray-800">{reportData.completionDate}</span>
                                </div>
                                {/* Total Budget Used */}
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600">Total Budget Used:</span>
                                    <span className="text-gray-800">{reportData.totalBudgetUsed}</span>
                                </div>
                                {/* Approval Status */}
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600">Approval Status:</span>
                                    <span
                                        className={`text-sm px-3 py-1 rounded ${reportData.approvalStatus === "Approved"
                                            ? "bg-green-100 text-green-600"
                                            : reportData.approvalStatus === "Rejected"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {reportData.approvalStatus}
                                    </span>
                                </div>
                                {/* Payment Status */}
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600">Payment Status:</span>
                                    <span
                                        className={`text-sm px-3 py-1 rounded ${reportData.paymentStatus === "Completed"
                                            ? "bg-green-100 text-green-600"
                                            : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {reportData.paymentStatus}
                                    </span>
                                </div>
                                {/* Final Report */}
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-gray-600">Final Report:</span>
                                    <a
                                        href={reportData.finalReportFile}
                                        download
                                        className="text-blue-600 underline hover:text-blue-800"
                                    >
                                        Download Report
                                    </a>
                                </div>
                                <hr />
                                {/* Information Text */}
                                <p className="text-sm text-gray-500 italic mt-4">
                                    After approval, the report will be submitted to the government.
                                </p>
                                {/* Approval/Reject Buttons */}
                                <div className="mt-6 flex gap-4">
                                    <button
                                        onClick={() => handleStatus({ approvalStatus: "Approved" })}
                                        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleStatus({ approvalStatus: "Rejected" })}
                                        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            <Outlet />
        </div>
    )
}

export default ContractDetails
