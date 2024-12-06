import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function OverView() {
    return (
        <div>
            <main className="p-6 flex-1 bg-overview overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

                {/* Example Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Link to={'/authority/my-tenders'} ><div className="card bg-slate-100 shadow-lg hover:bg-yellow-200">
                        <div className="card-body">
                            <h3 className="card-title">My Tenders</h3>
                            <p>$12,345</p>
                        </div>
                    </div></Link>

                    <Link to={'/authority/approved-tenders'} ><div className="card bg-slate-100 shadow-lg hover:bg-slate-300">
                        <div className="card-body">
                            <h3 className="card-title">Tender Manager</h3>
                            <p>1,234</p>
                        </div>
                    </div></Link>

                    <Link to={'/authority/bidders'} ><div className="card bg-slate-100 shadow-lg hover:bg-slate-300">
                        <div className="card-body">
                            <h3 className="card-title">Bidder's Hub</h3>
                            <p>1,234</p>
                        </div>
                    </div></Link>

                    <Link to={'/authority/contractors'} > <div className="card bg-slate-100 shadow-lg hover:bg-slate-300">
                        <div className="card-body">
                            <h3 className="card-title">My Contracters</h3>
                            <p>1,234</p>
                        </div>
                    </div></Link>
                    <div className="card bg-slate-100 shadow-lg hover:bg-orange-300">
                        <div className="card-body">
                            <h3 className="card-title">Recent Projects</h3>
                            <p>$12,345</p>
                        </div>
                    </div>
                    <div className="card bg-slate-100 shadow-lg hover:bg-green-300">
                        <div className="card-body">
                            <h3 className="card-title">Completed Projects</h3>
                            <p>123</p>
                        </div>
                    </div>

                </div>

                {/* Table */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-2">Recent Tenders</h3>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>2023-08-10</td>
                                    <td><span className="badge badge-success">Approved</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jane Smith</td>
                                    <td>2023-08-09</td>
                                    <td><span className="badge badge-warning">Pending</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Outlet />
        </div>
    )
}

export default OverView
