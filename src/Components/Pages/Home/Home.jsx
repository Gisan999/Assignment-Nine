import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Services from "../../Services/Services";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import background from '../../../assets/background.png'


const Home = () => {


    useEffect(() => {
        Aos.init();
    }, [])



    const event = useLoaderData();
    console.log(event);

    return (
        <div


        >
            <div>
                <Banner></Banner>
            </div>

            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
            }}


            >
                <div>
                    <h2 className="text-5xl text-center font-bold font-mono p-5 py-9 ">Our Services</h2>
                </div>
                <div className="max-w-screen-xl mx-auto flex justify-center ">

                    <div data-aos="zoom-in"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">

                        {
                            event?.map(event => <Services key={event['id']} event={event}></Services>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;