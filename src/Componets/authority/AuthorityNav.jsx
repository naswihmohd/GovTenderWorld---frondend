import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function AuthorityNav() {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-md fixed z-10">
                <div className="flex-none">
                    <div className="drawer ">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                <Link to={'/authority'} ><li><a>Dashboard</a></li></Link>
                                <Link to={'/authority/add-tender'} ><li><a>Add Tender</a></li></Link>
                                <Link to={'/authority/my-tenders'} ><li><a>My Tenders</a></li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <Link to={'/authority'}><a className="btn btn-ghost text-xl">Welcome, Authoriy Admin!</a></Link>
                </div>
                <div className="navbar-center text-black lg:me-6">
                    <ul className="menu menu-horizontal bg-base-200 rounded-box">
                        <li>
                            <Link to={'/authority/login'} > <a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </a></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default AuthorityNav
