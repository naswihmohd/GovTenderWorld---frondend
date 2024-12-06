import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from '../axiosConfig'
import { useDispatch, useSelector } from 'react-redux'
import { addTender } from '../features/tendersSlice'
import { Outlet, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { BsSave2Fill } from "react-icons/bs";
import AlertPop from './AlertPop'
import Footer from './Footer'

const Tenders = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const tenders = useSelector((state) => state.tenders)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get('/all-tenders').then((response) => {
            dispatch(addTender(response.data))
        })
    }, [dispatch])

    const handleClick = (tenderId) => {
        navigate(`/tender/${tenderId}`)
    }

    const handleSaveClick = (tenderId) => {
        const obj = {
            tenderId: tenderId
        }
        if (token) {
            axios.post('/savedTender', obj).then((res) => {
                if (res.status === 200) {
                    setIsPopupOpen(true)
                    setMessage(res.data.message)
                }
            }).catch((err) => {
                if (err.response) {
                    setIsPopupOpen(true)
                    setMessage(err.response.data.message)
                }
            })
        } else {
            navigate('/login')
        }
    }

    const handleClose = () => {
        setIsPopupOpen(false)
        setMessage('')
    }

    return (
        <div>
            <NavBar />
            <div
                className="hero h-44"
                style={{
                    backgroundImage: "url(https://e0.pxfuel.com/wallpapers/94/926/desktop-wallpaper-black-and-blue-background-for-your-mobile-tablet-explore-black-and-blue-dark-blue-black-and-red-black-and-white-patterns.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="pt-10 text-5xl font-bold">All Tenders</h1>
                    </div>
                </div>

            </div>
            
            <div className="flex flex-wrap justify-around gap-4 p-4 px-9">
                {tenders.map((tender, index) => (
                    <div
                        key={index}
                        className="bg-white t-card shadow-md rounded-lg p-4 w-full sm:w-[calc(100%-16px)] lg:w-[calc(50%-16px)] transition-transform transform hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold mb-2">{tender.title}</h2>
                        <p className="text-sky-700">{tender.description}</p>
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
                        <button className='float-right mt-4 btn border-l-4 text-xs text-sky-900 border-sky-900 px-6' onClick={() => handleSaveClick(tender._id)}><BsSave2Fill /> Save to List</button>
                        <button onClick={() => handleClick(tender._id)} className='btn text-blue-900 border-l-4 text-xs border-blue-900 float-right mt-4 me-3' ><FaEye /> View Details</button>
                    </div>
                ))}
            </div>
            <Footer />
            <AlertPop
                isOpen={isPopupOpen}
                close={handleClose}
                message={message}
            />
            <Outlet />
        </div>
    )
}

export default Tenders


