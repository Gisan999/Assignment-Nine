/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Services = ({ event }) => {

    const { photo, price, name, description, _id } = event;

    return (
        <div>
            <div>
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:scale-125 transition duration-500 cursor-pointer">
                        <img className="" src={photo} alt="profile-picture" />
                    </div>
                    <div className="p-6 ">
                        <h4 className="mb-2 block font-sans text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {name}
                        </h4>
                        {
                            description.length > 80 ?
                                <div className="text-gray-500 font-semibold text-lg font-mono">{description.slice(0, 80)}...</div>
                                :
                                <p>{description}</p>
                        }
                        <p className="block  text-teal-500 bg-clip-text font-sans text-xl font-semibold  ">
                            $ {price}
                        </p>
                    </div>
                    <div className="pb-5 px-5">
                    <Link to={`/fakeData/${_id}`}> <button className="btn w-full btn-outline btn-info ">Show More Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;