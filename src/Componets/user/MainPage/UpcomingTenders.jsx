
import axios from "../../../axiosConfig";
import React, { useEffect, useRef, useState } from "react";

const UpcomingTenders = () => {
    const [tenders, setTenders] = useState([])

    useEffect(() => {
        axios.get('/upcoming').then((respoonse) => {
            setTenders(respoonse.data)
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

    return (
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-info ps-3">Upcoming Tenders</h2>
                    <button className="btn border-l-4 border-info rounded-full px-6 hover:bg-info">View All</button>
                </div>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-6 scrollbar-hide"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {tenders.map((tender, index) => (
                        <div
                            key={index}
                            className=" hover:bg-slate-300 flex-shrink-0 bg-white shadow-md rounded-lg p-6 w-96 hover:shadow-lg transition-shadow duration-300"
                        >
                            <img className="h-16" src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif" alt="" />

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {tender.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                <span className="font-semibold">Department: </span>
                                {tender.authority}
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
    );
};

export default UpcomingTenders;


