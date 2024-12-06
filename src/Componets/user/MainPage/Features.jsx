import React from 'react'

function Features() {
    const features = [
        {
            img: "https://cdnl.iconscout.com/lottie/premium/thumb/team-management-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--teamwork-group-business-pack-icons-8842004.gif",
            title: "Easy Management",
            description:
                "Streamlined bidding process for effortless tender participation.",
        },
        {
            title: "Payment Integration",
            description:
                "Integrate payment gateways to collect bidding fees.",
            img: "https://cdnl.iconscout.com/lottie/premium/thumb/card-payment-animation-download-in-lottie-json-gif-static-svg-file-formats--credit-debit-cashless-through-finance-and-digital-currency-pack-business-animations-4644371.gif"
        },
        {
            title: "Secure Bidding Process",
            description:
                "Secure, transparent bidding with encryption and tracking.",
            img: "https://cdn-icons-gif.flaticon.com/16275/16275711.gif"
        },
        {
            title: "Status Tracking",
            description:
                "Mark tenders as Upcoming, Open for Bidding, or Closed.",
            img: "https://cdn.dribbble.com/users/2272987/screenshots/6299869/dribbble_3.gif"
        },
    ];
    return (
        <div>
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Our Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <img className='h-40 w-40' src={feature.img} alt="" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features
