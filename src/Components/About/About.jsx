import bgpng from '../../assets/result.png'
import couple from '../../assets/couple.jpg'
import Typewriter from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import LIfeStyle from '../LIfeStyle/LIfeStyle';
import Team from '../Team/Team';

const About = () => {


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

                <div className='text-center py-28 px-3 md:px-0 lg:py-60'>

                    <h2 className="text-5xl md:text-7xl font-extrabold font-mono text-center ">About <span className='animate-pulse text-violet-600'>Us!</span></h2>
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



            <div style={{
                backgroundImage: `url(${bgpng})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            >
                <div className='pt-10'>
                    <LIfeStyle></LIfeStyle>
                </div>
            </div>
            <div  data-aos="fade-up" className=' relative bottom-14 flex justify-center' >
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
            </div>

            <div className='max-w-screen-xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div>


                        <div className='flex justify-center px-5 lg:px-5'>

                            <div data-aos="fade-up"
                                className='pt-28 px-3 md:px-0'>
                                <h2 className='text-xl md:text-xl font-medium text-teal-700'>LIFESTYLE Fun Facts</h2>
                                <h4 className='text-3xl md:text-5xl font-bold pt-5'>Explore our wedding Services</h4>
                                <p className='text-xl font-sans font-medium italic pt-7 text-teal-700'>We are the only provider who can make your wedding ceremony more entertaining.So don`t hesitate to add us</p>
                            </div>

                        </div>


                    </div>
                    <div  data-aos="fade-up" className='space-y-7 pt-20 px-5 lg:px-0'>
                        <div>
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-medium italic'>Professionalism</h2>
                                <h2>85%</h2>
                            </div>
                            <progress className="progress progress-accent w-full h-3" value={85} max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-medium italic'>Food Ordering</h2>
                                <h2>75%</h2>
                            </div>
                            <progress className="progress progress-accent w-full h-3" value={75} max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-medium italic'>Experience and Quality </h2>
                                <h2>85%</h2>
                            </div>
                            <progress className="progress progress-accent w-full h-3" value={85} max="100"></progress>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <h2 className='text-xl font-medium italic'>Guarantee</h2>
                                <h2>80%</h2>
                            </div>
                            <progress className="progress progress-accent w-full h-3" value={80} max="100"></progress>
                        </div>

                    </div>

                </div>

            </div>
            <div className='pt-12'>

                <hr />
                <hr />
                <hr />
            </div>
            <div><Team></Team></div>
        </div>
    );
};

export default About;