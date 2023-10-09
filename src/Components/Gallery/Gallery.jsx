import bgpng from '../../assets/result.png'

import Typewriter from 'typewriter-effect';
import couple from '../../assets/couple.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import Team from '../Team/Team';
import Collection from '../Collection/Collection';
import Includes from '../Includes/Includes';

const Gallery = () => {

    
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
              <div style={{
                backgroundImage: `url(${bgpng})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }} className=''>

                <div data-aos="zoom-in" className='text-center py-28 px-3 md:px-0 lg:py-60'>

                    <h2 className="text-5xl md:text-7xl font-extrabold font-mono text-center "><span className='animate-pulse text-teal-600'>Gallery</span></h2>
                    <p className='text-lg md:text-xl font-sans font-medium italic pt-7 text-teal-700'>By the grace of Allah we always work with integrity. From our side we do not <br /><br />skimp on the work.  We want to earn your trust</p>
                    <h2 className='uppercase text-2xl font-sans font-semibold pt-10'><span className="text-sky-500"> <Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["...pray for us..."]
                    }}>
                    </Typewriter></span></h2>
                </div>

                <div className='max-w-screen-xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2  pb-20'>


                        <div className=' lg:pl-20'>

                            <div className='flex justify-center'>
                                <img className='w-96 border-8 border-sky-100 shadow-xl rounded-tr-[120px] rounded-bl-[120px]' src={couple} alt="" />
                            </div>

                        </div>

                        <div className='flex justify-center'>

                            <div data-aos="fade-up"
                                className='pt-28 px-3 md:px-0'>
                                <h2 className='text-xl md:text-xl font-medium text-teal-700'>Who We Are</h2>
                                <h4 className='text-3xl md:text-5xl font-bold pt-5'>A way to beautify your <br /> wedding celebration</h4>
                                <p className='text-xl font-sans font-medium italic pt-7 text-teal-700'>We are the only provider who can make your wedding ceremony <br /> more entertaining. So don`t hesitate to add us</p>
                            </div>

                        </div>


                    </div>
                </div>


            </div>
            <div>
                <Includes></Includes>
            </div>
            <div>
                <Collection></Collection>
            </div>

            <div>
                <Team></Team>
            </div>

        </div>
    );
};

export default Gallery;