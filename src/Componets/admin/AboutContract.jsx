import axios from "../../axiosConfig";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const AboutContract = () => {

    const [data, setData] = useState({})
    const [progressData, setProgressData] = useState([]);
    const navigate = useNavigate()


    const { id } = useParams()

    useEffect(() => {
        axios.get(`/admin/contract/${id}`).then((res) => {
            setData(res.data)
            setProgressData(res.data.progressData)
        })
    }, [])


    return (
        <div>

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://wallpapers.com/images/hd/studying-contract-documents-zrvtdzurr5h2u6cl.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="pt-10 text-5xl font-bold">Tracking Contractor</h1>
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

                    {/* About Contractor */}

                    <div className=" bg-white p-6 rounded-lg shadow mb-6">
                        <img className="h-24" src="https://cdn-icons-gif.flaticon.com/10051/10051256.gif" alt="" />
                        <h2 className="text-xl font-bold text-gray-800 pb-2">About Contractor</h2>
                        <hr />
                        <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-4 mt-4">
                            <p><strong>Company Name: </strong> {data.userId?.companyName} </p>
                            <p><strong>Owner Name:</strong> {data.userId?.contactPerson}</p>
                            <p><strong>Email ID:</strong> {data.userId?.email}</p>
                            <p><strong>Phone Number:</strong> {data.userId?.contactDetails?.phoneNumber}</p>
                            <p><strong>Company Reg Number:</strong> {data.bidderId?.bidProposal.timeline}</p>
                        </div>
                    </div>


                    {/* about authority */}

                    <div className=" bg-white p-6 rounded-lg shadow mb-6">
                        <img className="h-24" src="https://media.lordicon.com/icons/wired/outline/403-museum-authority.gif" alt="" />
                        <h2 className="text-xl font-bold text-gray-800 pb-2">About Authority</h2>
                        <hr />
                        <div className="grid grid-cols-1 text-sm md:grid-cols-3 gap-4 mt-4">
                            <p><strong>Authoriry: </strong> {data.tenderId?.title} </p>
                            <p><strong>Name:</strong> {data.tenderId?.tenderId}</p>
                            <p><strong>Position:</strong> {data.tenderId?.authorityName}</p>
                            <p><strong>Gender:</strong> {data.tenderId?.location}</p>
                            <p><strong>Phone No:</strong> {data.tenderId?.tenderType}</p>
                            <p><strong>Email:</strong> {data.bidderId?.bidProposal.timeline}</p>
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


                </div>
            </div>

        </div>
    );
};

export default AboutContract;
