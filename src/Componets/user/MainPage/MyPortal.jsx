import React from "react";
import { Outlet,Link } from "react-router-dom";

const MyPortal = () => {


    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    My Portal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <Link to={'/my-projects'} ><div className="bg-white hover:border-l-4 border-info shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                        <img className="w-32 pb-3" src="https://cdn-icons-gif.flaticon.com/8948/8948331.gif" alt="" />
                        <h3 className="text-xl pb-3 font-semibold text-gray-800 mb-2">My Projects</h3>
                    </div></Link>

                    <Link to={'/my-contracts'} ><div className="bg-white hover:border-l-4 border-info shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                        <img className="w-32 pb-3" src="https://cdn-icons-gif.flaticon.com/10051/10051256.gif" alt="" />
                        <h3 className="text-xl pb-3 font-semibold text-gray-800 mb-2">My Contracts</h3>
                    </div></Link>

                    <Link to={'/my-profile'} ><div className="bg-white hover:border-l-4 border-info shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                        <img className="w-32 pb-3" src="https://cdn-icons-gif.flaticon.com/8121/8121295.gif" alt="" />
                        <h3 className="text-xl pb-3 font-semibold text-gray-800 mb-2">My Profile</h3>
                    </div></Link>

                    <Link to={'/bids-submitted'} ><div className="bg-white hover:border-l-4 border-info shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
                        <img className="w-32 pb-3" src="https://cdn-icons-gif.flaticon.com/9696/9696855.gif" alt="" />
                        <h3 className="text-xl pb-3 font-semibold text-gray-800 mb-2">Submitted Tenders</h3>
                    </div></Link>

                </div>
            </div>
            <Outlet/>
        </section>
    );
};

export default MyPortal;
