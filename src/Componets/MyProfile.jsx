import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "../axiosConfig";

const MyProfile = () => {
    const token = localStorage.getItem('token')
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('/my-profile').then((response) => {
            setUser(response.data)
        })
    }, [])

    return (
        <div>
            <NavBar />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://img.pikbest.com/wp/202345/modern-web-banner-profile-background-in-3d-render_9615902.jpg!w700wp)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">My Profile</h1>
                    </div>
                </div>
            </div>
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
                        {/* Profile Details */}
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <h3 className="text-xl font-bold text-gray-800 flex-grow">
                                    {user.ownerName}
                                </h3>
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-lg">
                                    Owner
                                </span>
                            </div>

                            <hr className="border-gray-200" />

                            {/* Company Information */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 mb-2">
                                    Company Information
                                </h4>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-slate-600 text-sm">Company Name:</p>
                                    <p className="text-gray-600">{user.companyName}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-slate-600 text-sm">Company Registration Number:</p>
                                    <p className="text-gray-600">{user.companyRegNumber}</p>
                                </div>

                            </div>

                            <hr className="border-gray-200" />

                            {/* Contact Information */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 mb-2">
                                    Contact Information
                                </h4>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-slate-600 text-sm">Contact Number:</p>
                                    <p className="text-gray-600">{user.contactNumber}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-slate-600 text-sm">Email:</p>
                                    <p className="text-gray-600 ">{user.email}</p>
                                </div>

                            </div>

                            <hr className="border-gray-200" />

                            {/* Address */}
                            <div>
                                <h4 className="text-lg font-medium text-gray-800 mb-2">Address</h4>
                                <p className="text-gray-600">{user.address}</p>
                            </div>

                            <hr className="border-gray-200" />

                            <div className="flex justify-between">
                                <div></div>
                                <div>
                                    <button className="btn border-l-4 border-primary bg-blue-100 text-primary mx-4">Edit Profile</button>
                                    <button className="btn  border-l-4 border-red-800 bg-red-100 text-red-800" >Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default MyProfile;
