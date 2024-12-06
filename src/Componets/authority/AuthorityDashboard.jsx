import React, { useEffect, useState } from 'react';
import OverView from './OverView';
import { Outlet, Link, useNavigate } from 'react-router-dom';

function AuthorityDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const token = localStorage.getItem('AuthorityToken')
    const navigate= useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/authority/login')
        }
    },[])

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`fixed lg:static z-20 inset-y-0 left-0 transform lg:translate-x-0 transition-transform duration-200 w-64 bg-base-200 text-base-content flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 text-xl font-semibold">Dashboard</div>
                <ul className="menu p-4 overflow-y-auto flex-1">
                    <li><a href="#dashboard">Dashboard</a></li>
                    <Link to={'/authority/my-tenders'}> <li><a href="#users">My Tenders</a></li></Link>
                    <li><a href="#reports">All Bidders</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
                <div className="p-4">
                    <Link to={'/authority/add-tender'} ><button className="btn btn-primary w-full">Add New Tender</button></Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="navbar bg-base-100 shadow-md p-4 flex justify-between items-center">
                    {/* Mobile menu button */}
                    <button className="lg:hidden btn btn-ghost btn-circle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="text-xl font-semibold">Welcome, Admin!</span>
                    <div className="flex-none">
                        <button className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://i.pravatar.cc/100" alt="avatar" />
                            </div>
                        </button>
                    </div>
                </header>

                {/* Content Area */}
                
                <OverView/>
            </div>
            <Outlet/>
        </div>
    );
}

export default AuthorityDashboard;
