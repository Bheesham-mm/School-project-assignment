import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import img_1 from '../assets/images/img-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,         // Email icon
    faClock,            // Clock icon
    faSearch,           // Search icon
    faMapMarkerAlt,     // Location icon
    faPhone,            // Call icon
    faChevronDown,      // Dropdown arrow
    faTimes             // Cross icon
} from '@fortawesome/free-solid-svg-icons';
import '../css/Header.css'


function Header() {
    const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility

    // Toggle dropdown on hover
    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle the dropdown visibility
    };

    const OpenSearchbox = () => {
        let elementToggle = document.getElementById('toggle_search');
        elementToggle.classList.toggle('hideSearchBox')
    }

    const closeSearchBox = () => {
        let elementToggle = document.getElementById('toggle_search');
        elementToggle.classList.toggle('hideSearchBox')
    }

    const rightSideShow = () => {
        let elementToggle = document.getElementById('right40');
        elementToggle.classList.add('rightShow')
    }

    const rightSideHide = () => {
        let elementToggle = document.getElementById('right40');
        elementToggle.classList.remove('rightShow')
    }

    const showLocalNav = () => {
        let elementToggle = document.getElementById('ShowingNavChild')
        elementToggle.classList.remove('hideNavChild')
        elementToggle.classList.add('showNavChild')
    }

    const hideLocalNav = () => {
        let elementToggle = document.getElementById('ShowingNavChild')
        elementToggle.classList.remove('showNavChild')
        elementToggle.classList.add('hideNavChild')
    }
    return (
        <>
            <div className='z-30'>
                <header className='flex font-roboto flex-col justify-normal'>
                    {/* Top Hedaer */}
                    <div className='bg-skyblue shadow-bottom-gray text-white flex flex-row justify-between p-3'>
                        <div className='flex justify-between gap-4'>
                            <div className=' flex font-roboto justify-center text-center items-center gap-2 text-sm'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>Support@kingdo.com</span>
                            </div>
                            <div className='flex justify-center text-center items-center gap-2 text-sm'>
                                <FontAwesomeIcon icon={faClock} />
                                <span >
                                    8.00am-4.00pm
                                </span>
                            </div>
                        </div>
                        <div className='flex justify-center text-center items-center gap-2 text-sm'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>
                                14/A, Kilix Home Tower, NYC
                            </span>
                        </div>
                    </div>
                    {/* Navigation bar */}
                    <nav className='shadow-bottom-gray bg-white p-5 flex flex-row justify-between items-center'>
                        <div className="logo cursor-pointer w-32">
                            <img src={logo} alt="" />
                        </div>
                        <div className="navigationBar_">
                            <ul className='flex flex-row justify-between items-center gap-3 text-sm'>
                                <li onMouseOver={() => document.getElementById('showNavig').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig').classList.add('hideNavChild')} className='cursor-pointer transition-colors duration-500 hover:text-orange-400 flex items-center' onMouseEnter={toggleDropdown}>Home <FontAwesomeIcon className='ml-2' icon={faChevronDown} /></li>
                                {/* Dropdown menu */}
                                <ul onMouseOver={() => document.getElementById('showNavig').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig').classList.add('hideNavChild')} id='showNavig' className="hideNavChild transition-all text-white duration-500 absolute df_css bg-skyblue shadow-md rounded-lg mt-2 w-32">
                                    <li className="hover-container px-4 py-2 cursor-pointer main-text"> <span className='hover-text'>----</span> Home style 1</li>
                                    <li className="px-4 py-2 hover-container cursor-pointer"> <span className='hover-text'>----</span> home style 2</li>
                                    <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> home style 3</li>
                                </ul>

                                <li className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>About </li>
                                <li onMouseOver={showLocalNav} onMouseOut={hideLocalNav} className='flex cursor-pointer transition-colors duration-500 hover:text-orange-400'>Programs <FontAwesomeIcon className='ml-2 mt-1' icon={faChevronDown} /></li>
                                {/* Dropdown menu */}
                                <div id='ShowingNavChild' onMouseOver={showLocalNav} onMouseOut={hideLocalNav} className="hideNavChild flex gap-2 justify-between h-80 main_css transition-all text-white duration-500 absolute bg-skyblue shadow-md rounded-lg mt-2">
                                    <div className='avi_card'>
                                        <div className="flex flex-col items-center justify-between">
                                            <div className='card_01'>
                                                <span className='_01'>01</span>
                                                <h3 className='inline-block'>Setting</h3>
                                                <br /><span className='ml-7'>4-5 Yrs</span>
                                            </div>
                                            <div className='card_01'>
                                                <span className='_01'>02</span>
                                                <h3 className='inline-block'>Nuesery Group</h3>
                                                <br /><span className='ml-7'>3-4 Yrs</span>
                                            </div>
                                            <div className='card_01'>
                                                <span className='_01'>03</span>
                                                <h3 className='inline-block'>Play Group</h3>
                                                <br /><span className='ml-7'>2-3 Yrs</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-between">
                                            <div className='card_01'>
                                                <span className='_01'>04</span>
                                                <h3 className='inline-block'>Nuesery</h3>
                                                <br /><span className='ml-7'>3-4 Yrs</span>
                                            </div>
                                            <div className='card_01'>
                                                <span className='_01'>05</span>
                                                <h3 className='inline-block'>Junior Kg</h3>
                                                <br /><span className='ml-7'>4-5 Yrs</span>
                                            </div>
                                            <div className='card_01'>
                                                <span className='_01 p-4'>06</span>
                                                <h3 className='inline-block'>Senior Kg</h3>
                                                <br /><span className='ml-7'>5-6 Yrs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='def_css'>
                                        <img src={img_1} className=' w-60' alt="" />
                                        <div className="color"></div>
                                        <h3>Join New Program</h3>
                                        <button>View More</button>
                                    </div>
                                </div>

                                <li onMouseOver={() => document.getElementById('showNavig_2').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig_2').classList.add('hideNavChild')} className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>Shop <FontAwesomeIcon icon={faChevronDown} /></li>
                                <ul onMouseOver={() => document.getElementById('showNavig_2').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig_2').classList.add('hideNavChild')} id='showNavig_2' className="hideNavChild transition-all text-white duration-500 absolute df_css bg-skyblue shadow-md rounded-lg mt-2 w-32">
                                    <li className="hover-container px-4 py-2 cursor-pointer main-text"> <span className='hover-text'>----</span>
                                        Shop Main
                                    </li>
                                    <li className="px-4 py-2 hover-container cursor-pointer"> <span className='hover-text'>----</span>
                                        Shop Details
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span>
                                        Cart
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span>
                                        Wishlist
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span>
                                        Checkout
                                    </li>
                                </ul>

                                <li onMouseOver={() => document.getElementById('showNavig_3').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig_3').classList.add('hideNavChild')} className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>Pages <FontAwesomeIcon icon={faChevronDown} /></li>
                                <div onMouseOver={() => document.getElementById('showNavig_3').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig_3').classList.add('hideNavChild')} id='showNavig_3' className="hideNavChild transition-all text-white duration-500 absolute df_css bg-skyblue shadow-md rounded-lg mt-2 w-32">
                                    <div className='flex flex-col '>
                                        <h2 className='mb-3'>Page Layout 1</h2>
                                        <ul className='flex flex-col justify-between'>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Program</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Program Details</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Teacher</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Teacher Details</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Time table</a></li>
                                        </ul>
                                    </div>
                                    <div className='flex flex-col '>
                                        <h2 className='mb-3'>Page Layout 2</h2>
                                        <ul className='flex flex-col justify-between'>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">About</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Contact</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Login</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Register</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Error Page</a></li>
                                        </ul>
                                    </div>

                                    <div className='flex flex-col '>
                                        <h2 className='mb-3'>Page Layout 3</h2>
                                        <ul className='flex flex-col justify-between'>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Testimonial</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Gallery</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">FAQ</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Class</a></li>
                                            <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span> <a href="#">Class Details</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <li onMouseOver={() => document.getElementById('showNavig_4').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig_4').classList.add('hideNavChild')} className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>News <FontAwesomeIcon icon={faChevronDown} /></li>
                                <ul onMouseOver={() => document.getElementById('showNavig_4').classList.remove('hideNavChild')} onMouseOut={() => document.getElementById('showNavig_4').classList.add('hideNavChild')} id='showNavig_4' className="hideNavChild transition-all text-white duration-500 absolute df_css bg-skyblue shadow-md rounded-lg mt-2 w-32">
                                    <li className="hover-container px-4 py-2 cursor-pointer main-text"> <span className='hover-text'>----</span>
                                        News Default
                                    </li>
                                    <li className="px-4 py-2 hover-container cursor-pointer"> <span className='hover-text'>----</span>
                                        News Sidebar
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span>
                                        News Classic
                                    </li>
                                    <li className="px-4 py-2 cursor-pointer hover-container"> <span className='hover-text'>----</span>
                                        News Details
                                    </li>
                                </ul>

                                <li className='cursor-pointer transition-colors duration-500 hover:text-orange-400'>Contact </li>
                                <li onClick={OpenSearchbox} className='cursor-pointer transition-colors duration-500 hover:text-orange-400 text-xs'><FontAwesomeIcon icon={faSearch} /></li>
                                <div className="contact text-gray-600" ><FontAwesomeIcon icon={faPhone} className='mr-1' /> <span className='cursor-pointer hover:text-orange-400'>+923432423433</span> </div>
                            </ul>
                        </div>
                        <div onClick={rightSideShow} className="rightSideHumbargar">
                            <div className='w-12 flex'>
                                <div className="div_span">
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="div_span">
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                <div id='toggle_search' className="fixed main_ hideSearchBox">
                    <div className="searchBar flex fixed top-5 bg-skyBlueT justify-center items-center text-center">
                        <div className='fixed searchBox'>
                            <span className='_dfIcon2 absolute left-0 transition-colors duration-500 cursor-pointer hover:text-orange-400 '><FontAwesomeIcon icon={faSearch} /></span>
                            <input type="text" id='myInput' placeholder='Search here...' />
                            <span onClick={closeSearchBox} className='_dfIcon hover:text-orange-400 cursor-pointer absolute right-0  transform hover:rotate-90 transition-transform duration-500 ease-in-out'>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="humbargar rightHide" id='right40'>
                    <div className='localDivesion'>
                        <div>
                            <div className='flex justify-between opacity-50'>
                                <div className="logo w-28 cursor-pointer"><img src={logo} alt="" /></div>
                                <div onClick={rightSideHide} className="buttonX hover:text-orange-400 cursor-pointer"><FontAwesomeIcon icon={faTimes} /></div>
                            </div>
                            <div>
                                <div className="searchBurgar relative">
                                    <div className='absolute top-0 left-0 text-gray-600 text-lg'><FontAwesomeIcon icon={faSearch} /></div>
                                    <input type="search" placeholder='Search here...' />
                                </div>
                            </div>
                            <div className='mainUlParent mt-12'>
                                <ul>
                                    <li>
                                        <div className="flex justify-between caption">
                                            <span className="capText">Home</span>
                                            <button className='text-lg defualtBtn'>+</button>
                                        </div>
                                        <ul>
                                            <li>Home Style 1</li>
                                            <li>Home Style 2</li>
                                            <li>Home Style 3</li>
                                        </ul>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div></div>
        </>
    );
}

export default Header;