import React from 'react';
import '../css/Home.css'
import img_1 from '../assets/images/img-2.png';
import img_4 from '../assets/images/img-4.png';
import anima from '../assets/images/animat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Components/Card';
// import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Home() {
    return (
        <>
            <section className='section-1'>
                <div className="contaier relative">
                    <div className="left">

                        <h2>Kindergarten Program</h2>
                        <div className="cption_">
                            <h1>
                                Best Children’s <br /> Education
                            </h1>
                        </div>
                        <button className='my_btn'>Admission open 22-23</button>
                        <div className=" flex justify-center items-center h-screen">
                            <img
                                src={anima}
                                alt="Animated"
                                className="transition-all duration-700 animate-updown"
                            />
                        </div>
                    </div>
                    <div className="right">
                        <img src={img_1} alt="" />
                    </div>
                    <div className="leftSideImage absolute bottom-0 left-0 -z-110">
                        <img src={img_4} alt="" />
                    </div>
                </div>
            </section>

            <section className='bg-white'>
                <div>
                    <div className='md_sec'>
                        <div className="t_cap">
                            <h1>Our Offerings</h1>
                            <p className='text-sm'>Our multi-level kindergarten programs cater to the age group of 2-5 years <br />
                                with a curriculum focussing children.</p>
                        </div>
                        <div className="cardS">
                            <Card />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;