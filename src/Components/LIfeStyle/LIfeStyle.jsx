import { useEffect } from 'react'
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const LIfeStyle = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <div className="max-w-screen-xl mx-auto mt-20 md:mt-32 lg:mt-48">
            <div className='flex flex-col lg:flex-row gap-20'>
               <div className='flex justify-center mt-8'>
               <div  data-aos="flip-left"className='items-center px-5 md:px-0 '>
                    <h2 className="text-2xl lg:text-3xl font-extrabold font-mono bg-gradient-to-b bg-clip-text text-transparent from-sky-500 to-teal-500">Event Horizon...
                    </h2>
                    <h3 className=" text-2xl md:text-3xl lg:text-5xl font-bold">We Always Try To Give 
                    <br />
                    Our Best...
                    </h3>
                    <p className='text-xl font-light font-mono mt-5'>We always do our work with integrity. 
                    <br />
                    From this point of view you can have full <br /> confidence in us</p>
                </div>
               </div>
                <div className='flex justify-center p-5 md:p-0'>
                    <div className=''>
                        <div><img className='border-4 md:border-8 md:w-[500px] lg:w-full border-white shadow-lg rounded-tr-[60px] md:rounded-tr-[100px] hover:scale-110 transition duration-500 cursor-pointer' src={photo2} alt="" /></div>
                        <div className='relative md:right-8 lg:right-16'><img className='w-40 md:w-64 lg:w-80 h-36 md:h-64 lg:h-80 border-4 md:border-8 border-white rounded-tl-[40px] md:rounded-tl-[80px] rounded-br-[40px] md:rounded-br-[80px] shadow-lg relative bottom-[60px] md:bottom-[170px] lg:bottom-[200px] left-4 md:left-0 md:right-20 lg:right-28 hover:scale-110 transition duration-500 cursor-pointer' src={photo1} alt="" /></div>
                        <div><img className='w-32 md:w-64 lg:w-80 h-16 md:h-20 lg:h-24  border-4 md:border-8 border-white rounded-tl-[40px] md:rounded-tl-[100px] rounded-br-[40px] md:rounded-br-[100px] shadow-lg relative bottom-[125px] md:bottom-[250px] lg:bottom-[300px] left-[200px] md:left-[245px] lg:left-[330px] hover:scale-110 transition duration-500 cursor-pointer' src={photo3} alt="" /></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LIfeStyle;