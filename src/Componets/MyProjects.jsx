import axios from '../axiosConfig';
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function MyProjects() {

    const [projects, setProjects] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/my-projects').then((res) => {
            setProjects(res.data)
        })
    }, [])

    const handleClick = (id) => {
        navigate(`/my-project/${id}`)
    }

    return (
        <div>

            <NavBar />

            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://www.pinsentmasons.com/-/media/images/seo-social-media/campaign-specific/cad/cad-out-law-series-22-23-seo-image.jpg?rev=370fa61580ca4cdb845e3da6e6896ad4)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">My Projects</h1>
                    </div>
                </div>
            </div>


            <div className="min-h-screen bg-gray-100 py-8 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div
                                onClick={() => handleClick(project.contractId)}
                                key={project._id}
                                className="bg-white rounded-lg shadow px-6 pb-6 pt-2 hover:shadow-lg transition"
                            >

                                <div className="flex justify-end">
                                    <img className='h-14' src="https://media4.giphy.com/media/3a53VvGpzUgh05qq7W/200w.gif?cid=6c09b952f75o9dbxh3g8r7s6yw23c46n93r95cmuhfmj2c3m&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
                                </div>

                                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                    {project.tenderId?.title}
                                    {project.approvalStatus === "Rejected" && <span className='px-2 ms-1  rounded-full font-medium text-xs text-red-600 bg-red-100'>{project.approvalStatus}</span>}
                                    {project.approvalStatus === "Pending" && <span className='px-2 ms-1 rounded-full font-medium text-xs text-yellow-600 bg-yellow-100'>{project.approvalStatus}</span>}
                                    {project.approvalStatus === "Approved" && <span className='px-2 ms-1 rounded-full font-medium text-xs text-green-600 bg-green-100'>{project.approvalStatus}</span>}
                                </h2>
                                <hr className='pb-2' />
                                <p className="text-sm text-gray-600 mb-1">
                                    Authority: {project.tenderId?.authority}
                                </p>
                                <p className="text-sm text-gray-600 mb-1">
                                    Total Budget: <span className='text-green-800'>{project.totalBudgetUsed}</span>
                                </p>
                                <p className="text-sm text-gray-600">
                                    Finished Date: <span className='text-red-800'> {project.completionDate}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyProjects
