import axios from "../../axiosConfig";
import React, { useEffect, useState } from "react";
import AuthorityNav from "./AuthorityNav";
import { useNavigate } from "react-router-dom";

const Bidders = () => {

  const [tenders, setTenders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('/authority/bidTenders').then((res) => {
      setTenders(res.data)
    })
  }, [])

  const handleClick = (tenderId) => {
    navigate(`/authority/bidders/${tenderId}`)
  }

  return (
    <div>
      <AuthorityNav />

      <div
        className="hero h-52"
        style={{
          backgroundImage: "url(https://c4.wallpaperflare.com/wallpaper/405/151/750/light-wall-background-hd-wallpaper-preview.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="pt-14 text-5xl font-bold">Bidders Hub</h1>
          </div>
        </div>
      </div>


      <section className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Tender Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenders.map((tender) => (
              <div
                onClick={() => handleClick(tender._id)}
                key={tender._id}
                className="bg-white hover:border-l-4 border-red-800 shadow-lg rounded-lg px-6 pt-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >

                {/* Tender Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 pt-9">
                  {tender.title}
                </h3>

                {/* Tender ID */}
                <p className="text-gray-600 text-sm mb-4">
                  <span className="font-semibold">Tender ID:</span> {tender.tenderId}
                </p>

                {/* Bidders Count */}
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Bidders Count:</span> {tender.bidders.length}
                </p>

                <div className="flex justify-center">
                  <img className="h-20" src="https://i.gifer.com/CVyf.gif" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bidders;
