import axios from "../axiosConfig";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { useForm } from "react-hook-form";

const ProjectDetail = () => {

    const [data, setData] = useState({})
    const [progressData, setProgressData] = useState([]);
    const [finalReport, setFinalReport] = useState({})


    const { id } = useParams()

    useEffect(() => {
        axios.get(`/my-contract/${id}`).then((res) => {
            setData(res.data.contract)
            setProgressData(res.data.contract.progressData)
            setFinalReport(res.data.project)
        })
    }, [])


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


    return (
        <div>

            <NavBar />

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://financialtribune.com/sites/default/files/field/image/ordi/04-SJ_Construction%20158-ab.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="pt-10 text-5xl font-bold">{data.tenderId?.title}  <span className=" text-xs text-black px-3 py-1 rounded-badge bg-green-300">{data.status}</span></h1>
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


                    <div className="bg-gray-100 pb-8">
                        <div className=" mx-auto bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Final Report
                            </h2>
                            {/* Final Report Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-600">
                                        Completion Date
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {finalReport.completionDate}
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-600">
                                        Total Budget Used
                                    </h3>
                                    <p className="text-lg font-semibold text-gray-800">
                                        {finalReport.totalBudgetUsed}
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-600">
                                        Approval Status
                                    </h3>
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${statusClass(
                                            finalReport.approvalStatus
                                        )}`}
                                    >
                                        {finalReport.approvalStatus}
                                    </span>
                                </div>
                                <div className="p-4 bg-gray-100 rounded-lg">
                                    <h3 className="text-sm font-medium text-gray-600">Payment Status</h3>
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${statusClass(
                                            finalReport.paymentStatus
                                        )}`}
                                    >
                                        {finalReport.paymentStatus}
                                    </span>
                                </div>
                            </div>

                            {/* File Section */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-600" >Final Report File <span className="ps-4 link link-primary" >Download</span></h3>
                            </div>

                            {/* Approval Section */}
                            {finalReport.approvalStatus === "Pending" && (
                                <div className="mt-6 p-4 bg-gray-100 flex justify-start rounded-lg">
                                    <img className="h-14 rounded-2xl" src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="" />
                                    <p className="pt-7 ps-3 text-blue-800">Your project is under review by the authority. Please wait...</p>
                                </div>
                            )}

                            {finalReport.approvalStatus === "Approved" && (
                                <div className="mt-6 p-4 bg-gray-100 flex justify-start rounded-lg">
                                    <img className="h-14" src="https://media.tenor.com/0cvxil96K7YAAAAj/check.gif" alt="" />
                                    <p className="pt-7 ps-3 text-success">
                                        Your project has been approved by the authority and will be submitted to the government.</p>
                                </div>
                            )}

                            {finalReport.approvalStatus === "Rejected" && (
                                <div className="mt-6 p-4 bg-gray-100 flex justify-start rounded-lg">
                                    <img className="h-14 rounded-2xl" src="https://media.tenor.com/gM0z_4sIc6MAAAAM/denied-saquinon.gif" alt="" />
                                    <p className="pt-7 ps-3 text-red-600">Your project has been rejected by the authority. Please review and reapply.</p>
                                </div>
                            )}

                        </div>
                    </div>



                    {/* Section 2: Work Progress Table */}
                    <div className="bg-white p-6 rounded-lg shadow mb-6">

                        <h2 className="text-xl font-bold text-gray-800 pt-3">Work Progress Report</h2>

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

export default ProjectDetail;
