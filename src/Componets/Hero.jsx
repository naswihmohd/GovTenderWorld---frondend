import React, { useEffect } from 'react'
import './style.css'
import NavBar from './NavBar'
import Features from './user/MainPage/Features'
import UpcomingTenders from './user/MainPage/UpcomingTenders'
import LatestTenders from './user/MainPage/LatestTenders'
import Footer from './Footer'
import MyPortal from './user/MainPage/MyPortal'
import { useNavigate } from 'react-router-dom'

function Hero() {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token){
            navigate('/')
        }else{
            navigate('/')
        }
    },[])

    return (
        <div>
            <NavBar />
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://e0.pxfuel.com/wallpapers/1020/851/desktop-wallpaper-men-miscellanea-miscellaneous-hands-meeting-squeeze-handshake-contract.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to TenderWorld</h1>
                        <p className="mb-5 text-slate-300 text-xs">
                            Your gateway to transparent, efficient tendering. Unlock opportunities and bid smarter for a brighter future.
                        </p>
                        <div className="search">
                            <input type="text" placeholder='Tender Search Here...' />
                            <button >Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {token && <MyPortal />}

            <UpcomingTenders />
            <LatestTenders />
            <Features />


            <Footer />
        </div>
    )
}

export default Hero
