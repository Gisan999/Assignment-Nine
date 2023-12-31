import banner from "../../assets/Banner.jpg"
import ring from "../../assets/ring.png"
import { AiOutlineHeart } from "react-icons/ai";
import Typewriter from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import LIfeStyle from "../LIfeStyle/LIfeStyle";
import bgpng from '../../assets/result.png'

const Banner = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div  style={{
            backgroundImage: `url(${bgpng})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
            <div className="max-w-screen-xl pt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
                <div className="ml-0 md:ml-10">
                    <div className="flex md:pl-3 lg:pl-0 justify-center">  <img className="w-3/4 md:w-[420px] border-8  border-white rounded-tl-[120px] rounded-br-[120px]  shadow-xl hover:scale-110 transition duration-500 cursor-pointer" src={banner} alt="" /></div>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className=" px-5 lg:px-0 mr-10">
                    <div className="w-20 md:w-40 lg:w-52">
                        <img className="" src={ring} alt="" />
                    </div>
                    <h2 className="text-2xl md:text-2xl lg:text-5xl font-bold font-serif">The Best Relationship In The World Is
                        <br /><span className="text-sky-500"> <Typewriter options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["Husband & Wife!!!"]
                        }}>
                        </Typewriter></span>
                    </h2>
                    <div className="text-xl font-light font-mono mt-5">Marriage is the sweet union of two hearts. Which helps them stay together till death...
                        <div className="flex">
                            <AiOutlineHeart></AiOutlineHeart>
                            <AiOutlineHeart></AiOutlineHeart>
                            <AiOutlineHeart></AiOutlineHeart>
                        </div>
                    </div>
                </div>
            </div>
            <LIfeStyle></LIfeStyle>

        </div>
    );
};

export default Banner;