import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.jpg'
import background from '../../assets/background.png'
import './Team.css'

const Team = () => {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
        }}>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">


                    <div className='flex justify-center pt-24'>
                        <div data-aos="fade-up"
                            className='pt-28 px-3 md:px-0'>
                                 <h2 className='text-xl md:text-xl font-medium text-teal-700'>Sweet People</h2>
                            <h4 className='text-3xl md:text-5xl font-bold pt-5'>Meet Out Creative <br /> Event Organizer</h4>
                            <p className='text-xl font-sans font-medium italic pt-7 text-teal-700'>We are the only provider who can make your wedding ceremony <br /> more entertaining. So don`t hesitate to add us</p>
                        </div>
                    </div>



                    <div className='flex justify-center'>
                        <div className=" grid grid-cols-1 md:grid-cols-2 py-16">
                            <div className='m-4 mx-6 space-y-8'>


                                <div>
                                    <div className='text-center  bg-white shadow-xl w-64'>
                                        <div className='flex justify-center class pt-2'>
                                            <img className='h-60 w-60 imgBlack ' src={team1} alt="" />
                                        </div>
                                        <h2 className='py-4 text-xl font- font-mono'>George Regnery</h2>
                                    </div>
                                </div>

                                <div>
                                    <div className='text-center  bg-white shadow-xl w-64'>
                                        <div className='flex justify-center class pt-2'>
                                            <img className='h-60 w-60  imgBlack' src={team2} alt="" />
                                        </div>
                                        <h2 className='py-4 text-xl font- font-mono'>Helen Helga</h2>
                                    </div>
                                </div>







                            </div>
                            <div className='m-4 mt-16 mx-6 space-y-8'>
                                <div>
                                    <div className='text-center  bg-white shadow-xl w-64'>
                                        <div className='flex justify-center class pt-2'>
                                            <img className='h-60 w-60  imgBlack ' src={team4} alt="" />
                                        </div>
                                        <h2 className='py-4 text-xl font- font-mono'>Caroline Dana</h2>
                                    </div>
                                </div>

                                <div>
                                    <div className='text-center  bg-white shadow-xl w-64'>
                                        <div className='flex justify-center class pt-2'>
                                            <img className='h-60 w-60  imgBlack ' src={team3} alt="" />
                                        </div>
                                        <h2 className='py-4 text-xl font- font-mono'>Bruce Parsons</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Team;