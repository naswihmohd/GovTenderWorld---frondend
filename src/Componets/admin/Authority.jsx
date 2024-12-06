import axios from '../../axiosConfig'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AdminNav from './AdminNav'

function Authority() {
    const { id } = useParams()
    const [authority, setAuthority] = useState('')
    useEffect(() => {
        axios.get(`/admin/authority/${id}`).then((response) => {
            setAuthority(response.data)
        })
    }, [])

    return (
        <div>
            <AdminNav />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://png.pngtree.com/background/20210715/original/pngtree-digital-technology-low-poly-design-picture-image_1276779.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="pt-10 text-5xl font-bold">{authority.name}</h1>
                    </div>
                </div>
            </div>

            <div className='container mx-auto pt-4'>
                <h1 className='py-3 font-bold text-xl font-mono'>{authority.department}</h1>
                <hr />
                <div className="grid lg:grid-cols-2">
                    <div className="space-y-4 pt-4 border-t-4 border-red-600 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950'>Contact Person</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Name:</span>
                            <span className="text-gray-900 ">{authority.contactPerson?.fullName}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Position:</span>
                            <span className="text-gray-900 ">{authority.contactPerson?.position}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Date Of Birth:</span>
                            <span className="text-gray-900 ">{authority.contactPerson?.DOB}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Phone:</span>
                            <span className="text-gray-900 ">{authority.contactPerson?.phoneNumber}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4">
                            <span className="text-gray-600 font-medium">Gender:</span>
                            <span className="text-gray-900 ">{authority.contactPerson?.gender}</span>
                        </div>
                    </div>
                    <div className="space-y-4 pt-4  border-b-4 border-red-600 ps-5 pe-4">
                        <h1 className='font-serif text-yellow-950 pb-1'>Contact Details</h1>
                        <hr />
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Email:</span>
                            <span className="text-gray-900 ">{authority.contactDetails?.email}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Phone:</span>
                            <span className="text-gray-900 ">{authority.contactDetails?.phone}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Address:</span>
                            <span className="text-gray-900 ">{authority.contactDetails?.address.street}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium"></span>
                            <span className="text-gray-900 ">{authority.contactDetails?.address.city}, {authority.contactDetails?.address.state}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium"></span>
                            <span className="text-gray-900 ">{authority.contactDetails?.address.country} - {authority.contactDetails?.address.pincode}</span>
                        </div>
                    </div>
                </div>
                <hr className='my-3' />
            </div>
            <div className='container mx-auto pt-4'>
                <div className="flex justify-between items-center">
                    <span><h1 className='py-3 font-bold text-xl font-mono'>Tender History</h1></span>
                    <span className='mb-4'>
                        <button className='me-4 btn text-warning'>Pending</button>
                        <button className='btn me-4 text-success'>Approved</button>
                        <button className='btn text-error'>Rejected</button>
                    </span>
                </div>

                <hr />
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className='bg-base-300'>
                                <th></th>
                                <th>Title</th>
                                <th>Tender ID</th>
                                <th>Location</th>
                                <th>Tender Type</th>
                                <th>Budget:</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Littel, Schaden and Vandervort</td>
                                <td>Canada</td>
                                <td>12/16/2020</td>
                                <td>Blue</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Zemlak, Daniel and Leannon</td>
                                <td>United States</td>
                                <td>12/5/2020</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Carroll Group</td>
                                <td>China</td>
                                <td>8/15/2020</td>
                                <td>Red</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Marjy Ferencz</td>
                                <td>Office Assistant I</td>
                                <td>Rowe-Schoen</td>
                                <td>Russia</td>
                                <td>3/25/2021</td>
                                <td>Crimson</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Yancy Tear</td>
                                <td>Community Outreach Specialist</td>
                                <td>Wyman-Ledner</td>
                                <td>Brazil</td>
                                <td>5/22/2020</td>
                                <td>Indigo</td>
                            </tr>
                            <tr>
                                <th>6</th>
                                <td>Irma Vasilik</td>
                                <td>Editor</td>
                                <td>Wiza, Bins and Emard</td>
                                <td>Venezuela</td>
                                <td>12/8/2020</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>7</th>
                                <td>Meghann Durtnal</td>
                                <td>Staff Accountant IV</td>
                                <td>Schuster-Schimmel</td>
                                <td>Philippines</td>
                                <td>2/17/2021</td>
                                <td>Yellow</td>
                            </tr>
                            <tr>
                                <th>8</th>
                                <td>Sammy Seston</td>
                                <td>Accountant I</td>
                                <td>O'Hara, Welch and Keebler</td>
                                <td>Indonesia</td>
                                <td>5/23/2020</td>
                                <td>Crimson</td>
                            </tr>
                            <tr>
                                <th>9</th>
                                <td>Lesya Tinham</td>
                                <td>Safety Technician IV</td>
                                <td>Turner-Kuhlman</td>
                                <td>Philippines</td>
                                <td>2/21/2021</td>
                                <td>Maroon</td>
                            </tr>
                            <tr>
                                <th>10</th>
                                <td>Zaneta Tewkesbury</td>
                                <td>VP Marketing</td>
                                <td>Sauer LLC</td>
                                <td>Chad</td>
                                <td>6/23/2020</td>
                                <td>Green</td>
                            </tr>
                            <tr>
                                <th>11</th>
                                <td>Andy Tipple</td>
                                <td>Librarian</td>
                                <td>Hilpert Group</td>
                                <td>Poland</td>
                                <td>7/9/2020</td>
                                <td>Indigo</td>
                            </tr>
                            <tr>
                                <th>12</th>
                                <td>Sophi Biles</td>
                                <td>Recruiting Manager</td>
                                <td>Gutmann Inc</td>
                                <td>Indonesia</td>
                                <td>2/12/2021</td>
                                <td>Maroon</td>
                            </tr>
                            <tr>
                                <th>13</th>
                                <td>Florida Garces</td>
                                <td>Web Developer IV</td>
                                <td>Gaylord, Pacocha and Baumbach</td>
                                <td>Poland</td>
                                <td>5/31/2020</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>14</th>
                                <td>Maribeth Popping</td>
                                <td>Analyst Programmer</td>
                                <td>Deckow-Pouros</td>
                                <td>Portugal</td>
                                <td>4/27/2021</td>
                                <td>Aquamarine</td>
                            </tr>
                            <tr>
                                <th>15</th>
                                <td>Moritz Dryburgh</td>
                                <td>Dental Hygienist</td>
                                <td>Schiller, Cole and Hackett</td>
                                <td>Sri Lanka</td>
                                <td>8/8/2020</td>
                                <td>Crimson</td>
                            </tr>
                            <tr>
                                <th>16</th>
                                <td>Reid Semiras</td>
                                <td>Teacher</td>
                                <td>Sporer, Sipes and Rogahn</td>
                                <td>Poland</td>
                                <td>7/30/2020</td>
                                <td>Green</td>
                            </tr>
                            <tr>
                                <th>17</th>
                                <td>Alec Lethby</td>
                                <td>Teacher</td>
                                <td>Reichel, Glover and Hamill</td>
                                <td>China</td>
                                <td>2/28/2021</td>
                                <td>Khaki</td>
                            </tr>
                            <tr>
                                <th>18</th>
                                <td>Aland Wilber</td>
                                <td>Quality Control Specialist</td>
                                <td>Kshlerin, Rogahn and Swaniawski</td>
                                <td>Czech Republic</td>
                                <td>9/29/2020</td>
                                <td>Purple</td>
                            </tr>
                            <tr>
                                <th>19</th>
                                <td>Teddie Duerden</td>
                                <td>Staff Accountant III</td>
                                <td>Pouros, Ullrich and Windler</td>
                                <td>France</td>
                                <td>10/27/2020</td>
                                <td>Aquamarine</td>
                            </tr>
                            <tr>
                                <th>20</th>
                                <td>Lorelei Blackstone</td>
                                <td>Data Coordiator</td>
                                <td>Witting, Kutch and Greenfelder</td>
                                <td>Kazakhstan</td>
                                <td>6/3/2020</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>company</th>
                                <th>location</th>
                                <th>Last Login</th>
                                <th>Favorite Color</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Authority
