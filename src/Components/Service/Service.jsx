/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FcCallTransfer } from "react-icons/fc";
import { MdEmail, MdWhatsapp } from "react-icons/md";
import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
// import Loading from "../loading/loading";

const Service = () => {
    const [event, setEvent] = useState({});
    const dataLoad = useLoaderData();
    console.log(dataLoad);
    const { id } = useParams();
    const idInt = parseInt(id);

    useEffect(() => {
        const selectedEvent = dataLoad?.find(data => data['_id'] === idInt)
        setEvent(selectedEvent);
    }, [])
    console.log(event);

    const { name, details_pic1, details_pic2, details_pic3, details_pic4, description, price } = event;

    return (
        <div className="max-w-screen-xl mx-auto my-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-0">
                <div className="">
                    <img className="w-full h-full transition duration-500 ease-in-out hover:scale-90" src={details_pic1} alt="" />
                </div>
                <div className="">
                    <div><img className="w-full h-72 transition duration-500 ease-in-out hover:scale-90" src={details_pic2} alt="" /></div>
                    <p className="py-2 text-center font-medium text-2xl italic"><span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text  animate-pulse	">{name}</span></p>
                    <div><img className="w-full h-72 transition duration-500 ease-in-out hover:scale-90" src={details_pic3} alt="" /></div>
                </div>
                <div className="">
                    <img className="w-full h-full  transition duration-500 ease-in-out hover:scale-90" src={details_pic4} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 ">
                <div className="col-span-2">
                    <h2 className="text-lg md:text-xl px-4 lg:px-0 lg:text-2xl text-justify font-medium font-mono pb-8">{description}</h2>
                    <div data-aos="fade-up" className='  flex justify-center' >
                        <div className="stats shadow ">

                            <div className="stat p-12 bg-teal-200">
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Happy Couples</div>
                                <div className="stat-value text-primary">1895 +</div>

                            </div>

                            <div className="stat  p-12 bg-teal-200">
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                                <div className="stat-title">Decoration</div>
                                <div className="stat-value text-secondary">980 +</div>

                            </div>

                            <div className="stat  p-12 bg-teal-200">
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                                <div className="stat-title">Weddings</div>
                                <div className="stat-value text-primary">1735 +</div>

                            </div>

                            <div className="stat  p-12 bg-teal-200">
                                <div className="stat-figure text-secondary">

                                </div>
                                <div className="stat-title">Locations</div>
                                <div className="stat-value">267 +</div>

                            </div>

                        </div>
                    </div>            <p className="px-4 mt-5 lg:px-0 text-justify text-lg italic  font-thin font-serif"><span className="text-xl font-semibold">Special Note:</span>I and all my team try to make the customer happy. We never do anything with bad intentions. You can feel free to make your special day golden with us.
                        The trust is yours and it is our responsibility to keep it</p>
                </div>

                <div className="ml-5 lg:ml-0">
                    <div className="p-4 bg-green-50 space-y-5 ">
                        <h2 className="text-xl font-bold font-serif uppercase">We provide this service for you at an affordable price</h2>
                        <button className="btn font-bold text-xl  no-animation w-full btn-outline btn-success">${price}</button>
                        <h2 className="text-xl font-bold font-serif ">Contact Us If You Would Like To Receive The Service</h2>
                        <div className="flex items-center gap-4">
                            <FcCallTransfer className="text-5xl text-green-500"></FcCallTransfer>
                            <div>
                                <p className="text-pink-500 font-medium text-lg">Call Us</p>
                                <p>(016)97865342</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <MdEmail className="text-5xl text-green-500"></MdEmail>
                            <div>
                                <p className="text-pink-500 font-medium text-lg">Email Us</p>
                                <p>help@event_horizon.com</p>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold italic">Other means of communication</h2>
                        <div className="flex  items-center gap-4">
                            <MdWhatsapp className="text-5xl text-green-500"></MdWhatsapp>
                            <FaFacebookMessenger className="text-4xl text-blue-600"></FaFacebookMessenger>
                            <FaInstagram className="text-4xl text-red-500"></FaInstagram>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;