import React from 'react'
import AdminNav from './AdminNav'
import OverView from '../authority/OverView'
import { Outlet, Link } from 'react-router-dom'

function DashBoard() {
    return (
        <div>
            <AdminNav />

            <main className=" md:px-16  flex-1 overflow-y-auto pt-20 ">
                <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

                {/* Example Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="card bg-slate-100 shadow-lg hover:bg-yellow-200">
                        <Link to={'/admin/all-tenders'}><div className="card-body">
                            <h3 className="card-title">All Tenders</h3>
                            <p>$12,345</p>
                        </div></Link>

                    </div>
                    <div className="card bg-slate-100 shadow-lg hover:bg-blue-300">
                        <Link to={'/admin/all-users'}> <div className="card-body">
                            <h3 className="card-title">All Users</h3>
                            <p>1,234</p>
                        </div></Link>

                    </div>
                    <div className="card bg-slate-100 shadow-lg hover:bg-red-300 ">
                        <Link to={'/admin/authority'}><div className="card-body">
                            <h3 className="card-title">Authorities </h3>
                            <p>123</p>
                        </div></Link>

                    </div>

                    <div className="card bg-slate-100 shadow-lg hover:bg-orange-300">
                        <Link to={'/admin/all-contracts'} ><div className="card-body">
                            <h3 className="card-title">Running Contracts</h3>
                            <p>$12,345</p>
                        </div></Link>
                    </div>
                    <div className="card bg-slate-100 shadow-lg hover:bg-green-300">
                        <div className="card-body">
                            <h3 className="card-title">Completed Projects</h3>
                            <p>123</p>
                        </div>
                    </div>

                    <div className="card bg-slate-100 shadow-lg hover:bg-slate-300">
                        <div className="card-body">
                            <h3 className="card-title">Approved Projects</h3>
                            <p>1,234</p>
                        </div>
                    </div>

                </div>
            </main>

            <Outlet />
        </div>
    )
}

export default DashBoard
