import axios from '../axiosConfig'
import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function NavBar() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get('/logout').then((response) => {
            if (response.status === 200) {
                localStorage.clear('token')
                navigate('/')
            }
        })
    }

    return (
        <div>
            <div className="navbar Nav fixed text-slate-100 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Tenders</a>
                                <ul className="p-2 drop">
                                    <li><a>Open Tenders</a></li>
                                    <li><a>Closed Tenders</a></li>
                                    <li><a>Upcoming Tenders</a></li>

                                </ul>
                            </li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">GovTenderWorld</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/'}><li><a>Home</a></li></Link>
                        <li>
                            <details>
                                <summary>Tenders</summary>
                                <ul className="p-2 w-48 bg-slate-800">
                                    <Link to={'/all-tenders'}> <li><a>All Tenders</a></li></Link>
                                    {token&&<Link to={'/saved-tenders'}> <li><a>Saved Tenders</a></li></Link>}
                                    {token&&<Link to={'/bids-submitted'}> <li><a>Bids Submitted</a></li></Link>}
                                   <li><a>Open Tenders</a></li>
                                    <li><a>Closed Tenders</a></li>
                                    <li><a>Upcoming Tenders</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
                <div className="navbar-end pr-5">
                    {!token ? <Link to={'/login'}><button className="btn btn-ghost rounded-full w-24 border-white">Login</button></Link> : <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default NavBar
