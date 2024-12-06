
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "../../../axiosConfig";
import React, { useEffect, useRef, useState } from "react";



const LatestTenders = () => {

    const [tenders, setTenders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/latest-tenders').then((response) => {
            setTenders(response.data)
        })
    }, [])

    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;

        const scroll = () => {
            if (scrollContainer) {
                scrollContainer.scrollBy({
                    top: 0,
                    left: 1,
                    behavior: "smooth",
                });

                if (
                    scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
                    scrollContainer.scrollWidth
                ) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        };

        const interval = setInterval(scroll, 20);
        return () => clearInterval(interval);
    }, []);

    const handleClick = (id) => {
        navigate(`/tender/${id}`)
    }

    return (
        <div>

            <section className="py-8 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-info ps-3">Latest Tenders</h2>
                        <button className="btn border-l-4 border-info rounded-full px-6 hover:bg-info">View All</button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto space-x-6 scrollbar-hide"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {tenders.map((tender, index) => (
                            <div
                                onClick={() => handleClick(tender._id)}
                                key={index}
                                className=" hover:bg-slate-300 flex-shrink-0 bg-white shadow-md rounded-lg p-6 w-96 hover:shadow-lg transition-shadow duration-300"
                            >
                                <img className="h-16 pb-3" src="https://www.enna.dz/wp-content/uploads/2024/06/unnamed.gif" alt="" />

                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {tender.title}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Department: </span>
                                    {tender.department}
                                </p>
                                <p className="text-gray-600 text-sm pb-3">
                                    <span className="font-semibold">Deadline: </span>
                                    <span className="text-red-400" >{tender.deadline}</span>
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ads of tender aria */}


            <section className="bg-blue-50">
                <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/014/968/821/non_2x/3d-laptop-with-digital-marketing-3d-illustration-free-png.png"
                            alt="Sign Portal"
                            className="rounded-lg w-full h-auto"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Empowering Opportunities, Bridging Connections.
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Streamlined platform for tender management, secure bidding, and transparency.
                        </p>
                        <Link to={'/all-tenders'} ><button className="bg-blue-600 font-serif text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
                            View Tenders
                        </button></Link>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>
    );
};

export default LatestTenders;


