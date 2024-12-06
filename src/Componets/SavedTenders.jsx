import axios from '../axiosConfig'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { FaEye } from "react-icons/fa";
import { addTender, removeTender } from '../features/tendersSlice'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
import ConfirmPopup from './admin/Popup';
import Footer from './Footer';

const SavedTenders = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [id, setId] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tenders = useSelector((state) => state.tenders)
    useEffect(() => {
        axios.get('/saved-tenders').then((response) => {
            dispatch(addTender(response.data.savedTenders))
            console.log(response.data.savedTenders)
        })
    }, [dispatch])

    const handleClick = (tenderId) => {
        navigate(`/tender/${tenderId}`)
    }

    const handleDelete = (tenderId) => {
        setIsPopupOpen(true)
        setId(tenderId)
    }

    const handleConfirm = () => {
        axios.delete(`/delete-saved-tender/${id}`).then((response) => {
            if (response.status === 200) {
                dispatch(removeTender(id))
                setIsPopupOpen(false)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const handleCancel = () => {
        setId('')
        setIsPopupOpen(false)
    }

    return (
        <div>
            <NavBar />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://wallpaper.dog/large/11028889.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">Saved Tenders</h1>
                    </div>
                </div>

            </div>
            <div className="flex flex-wrap justify-around mx-20 gap-4 p-4">
                {tenders.map((tender, index) => (
                    <div
                        key={index}
                        className="w-full  bg-white shadow-md rounded-lg p-4 border-t-4   border-green-500 hover:shadow-2xl duration-200"
                    >
                        <h2 className="text-xl font-semibold mb-2">{tender.title}</h2>
                        <p className="text-gray-700 text-sm font-medium pt-2">Tender Type : {tender.tenderType}</p>
                        <p className="text-gray-700 text-sm font-medium">Authority : {tender.authority}</p>
                        <div className="flex justify-between pt-4">
                            <div className="flex items-center mb-4 sm:mb-0">
                                <span className="text-sm font-semibold text-gray-700">Deadline:</span>
                                <span className="ml-2 text-error">{tender.bidSubmitionEndDate}</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-sm font-semibold text-gray-700">Budget:</span>
                                <span className="ml-2 text-green-500">{tender.tenderValue}</span>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(tender._id)} className='btn border-l-4 border-red-600 text-red-800 float-right mt-4 ' ><MdDelete /> Remove</button>
                        <button onClick={() => handleClick(tender._id)} className='btn border-l-4 text-green-900 border-green-500 float-right mt-4 me-3' ><FaEye /> View Details</button>
                    </div>
                ))}
            </div>
            <Footer/>
            <ConfirmPopup
                isOpen={isPopupOpen}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                message="Are you sure you want to delete this Tender?"
            />
            <Outlet />
        </div>
    )
}

export default SavedTenders
