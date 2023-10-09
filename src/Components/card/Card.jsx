/* eslint-disable react/prop-types */
import { AiOutlineHeart } from "react-icons/ai";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Card = ({card}) => {

    useEffect(() => {
        Aos.init();
    }, [])
    const {husband_name, wife_name, country, image_url} = card;
    return (
        <div>
              <div  data-aos="fade-up">
                    <div className="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                        <div
                        
                        style={{
                            backgroundImage: `url(${image_url})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}


                        className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}>
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                        </div>
                        <div data-aos="flip-down"
                        
                        className="relative p-6 py-14 px-6 md:px-12">
                            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                               {husband_name}
                               <br />
                              <div className="flex justify-center">
                              <AiOutlineHeart></AiOutlineHeart>
                              </div>
                              {wife_name}
                            </h2>
                            <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                                {country}
                            </h5>
                         
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Card;