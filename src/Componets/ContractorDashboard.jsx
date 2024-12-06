import axios from "../axiosConfig";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";

const ContractorDashboard = () => {

    const [data, setData] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFinalModalOpen, setIsFinalModalOpen] = useState(false)
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [progressData, setProgressData] = useState([]);
    const navigate = useNavigate()


    const { id } = useParams()

    useEffect(() => {
        axios.get(`/my-contract/${id}`).then((res) => {
            setData(res.data.contract)
            setProgressData(res.data.contract.progressData)
        })
    }, [])


    const onSubmit = (progressDatails) => {
        progressDatails.contractId = data._id
        axios.post('/contract/progress', progressDatails).then((response) => {
            console.log(response)
            if (response.status === 200) {
                progressData.push(progressDatails)
                setIsModalOpen(false)
            }
        })
    }


    const statusClass = (status) => {
        switch (status) {
            case "Approved":
                return "text-green-600 bg-green-100";
            case "Pending":
                return "text-yellow-600 bg-yellow-100";
            case "Rejected":
                return "text-red-600 bg-red-100";
            case "Paid":
                return "text-green-600 bg-green-100";
            case "Unpaid":
                return "text-red-600 bg-red-100";
            case "Partially Paid":
                return "text-yellow-600 bg-yellow-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    const onFinalSubmit = (report) => {
        axios.post(`/authority/final-report/${data._id}`, report).then((response) => {
            if (response.status === 200) {
                setIsFinalModalOpen(false)
                navigate(`/my-projects`)
            }
            console.log(response)
        })
    }





    return (
        <div>

            <NavBar />

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://wallpapers.com/images/hd/studying-contract-documents-zrvtdzurr5h2u6cl.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="pt-10 text-5xl font-bold">Contract Dashboard</h1>
                    </div>
                </div>

            </div>


            <div className="min-h-screen bg-gray-100 p-6">
                <div className="container mx-auto">
                    {/* Section 1: Tender Details */}
                    <div className=" bg-white p-6 rounded-lg shadow mb-6">
                        <img className="h-24" src="https://cdn-icons-gif.flaticon.com/7211/7211788.gif" alt="" />
                        <h2 className="text-xl font-bold text-gray-800 pb-2">About Tender</h2>
                        <hr />
                        <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-4 mt-4">
                            <p><strong>Tender Title: </strong> {data.tenderId?.title} </p>
                            <p><strong>Tender ID:</strong> {data.tenderId?.tenderId}</p>
                            <p><strong>Authority Name:</strong> {data.tenderId?.authorityName}</p>
                            <p><strong>Tender Type:</strong> {data.tenderId?.tenderType}</p>
                            <p><strong>Timeline:</strong> {data.bidderId?.bidProposal.timeline}</p>
                            <p><strong>Location:</strong> {data.tenderId?.location}</p>
                        </div>
                    </div>



                    {/* Section 2: Work Progress Table */}
                    <div className="bg-white p-6 rounded-lg shadow mb-6">

                        {data.contractStatus === "Terminated" && (<div >
                            <img className="h-20 pb-2" src="https://media0.giphy.com/media/U4SJeeuoK8twn5wmOf/giphy.gif?cid=6c09b952muwgzbmmu6rujsnzdhae3fmcr0lyukbm5f5om08s&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" />
                            <h1 className="text-sm text-red-900">This Contract has been Terminated. Please Contact Department</h1>
                        </div>)}

                        <div className="flex justify-between pt-4">

                            <h2 className="text-xl font-bold text-gray-800 pt-3">Work Progress</h2>

                            {data.contractStatus === "Active" && (<button
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 py-3 font-serif text-sm bg-blue-800 text-white rounded-md shadow hover:bg-blue-700 transition"
                            >
                                Add New Progress
                            </button>)}
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 font-medium text-gray-700">Date</th>
                                        <th className="px-6 py-3 font-medium text-gray-700">Phase/Stage</th>
                                        <th className="px-6 py-3 font-medium text-gray-700">
                                            Progress Description
                                        </th>
                                        <th className="px-6 py-3 font-medium text-gray-700">Completion (%)</th>
                                        <th className="px-6 py-3 font-medium text-gray-700">Report/File</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {progressData.map((progress, index) => (
                                        <tr
                                            key={index}
                                            className="even:bg-gray-50 hover:bg-gray-100 transition duration-150"
                                        >
                                            <td className="px-6 py-4">{progress?.date}</td>
                                            <td className="px-6 py-4">{progress?.stage}</td>
                                            <td className="px-6 py-4">{progress?.description}</td>
                                            <td className="px-6 py-4">{progress?.completion}%</td>
                                            <td className="px-6 py-4">
                                                <a
                                                    href={progress?.file}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    View
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex bg-gray-100 py-8 justify-center">
                        <button onClick={() => setIsFinalModalOpen(true)} className="btn bg-green-900 rounded-md text-white">Submit Final Report</button>
                    </div>


                    {/* Modal for Adding New Progress */}
                    {isModalOpen && (
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                                <h2 className="text-lg font-bold text-gray-800 mb-4">Add New Progress</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="grid grid-cols-1 gap-4">
                                        <input
                                            {...register("date")}
                                            type="date"
                                            placeholder="Date"
                                            className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                            required
                                        />
                                        <input
                                            {...register("stage")}
                                            placeholder="Phase/Stage"
                                            className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                            required
                                        />
                                        <textarea
                                            {...register("description")}
                                            placeholder="Progress Description"
                                            className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                            required
                                        />
                                        <input
                                            {...register("completion")}
                                            placeholder="Completion (%)"
                                            className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                            required
                                        />
                                        <input
                                            type="file"
                                            className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setIsModalOpen(false)}
                                            className="px-6 border-primary py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition mr-2"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}


                    {isFinalModalOpen && (
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                                <h2 className="text-lg font-bold text-gray-800 mb-4">Final Report Form</h2>
                                <form onSubmit={handleSubmit(onFinalSubmit)}>
                                    <div className="grid grid-cols-1 gap-4">

                                        <input
                                            {...register("completionDate")}
                                            type="date"
                                            placeholder="Completion Date"
                                            className="w-full px-4 py-2 border border-success rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                            required
                                        />

                                        <input
                                            {...register("totalBudgetUsed")}
                                            type="Number"
                                            placeholder="Total Budget Used"
                                            className="w-full px-4 py-2 border border-success rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                            required
                                        />

                                        <input
                                            type="file"
                                            className="w-full px-4 py-2 border border-success rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                        />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setIsFinalModalOpen(false)}
                                            className="px-6 border-primary py-2 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition mr-2"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default ContractorDashboard;
