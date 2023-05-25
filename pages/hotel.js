import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@/components/NewTheme/modal';
import Footer from '@/components/NewTheme/Footer';
import CarousalComponent from '@/components/NewTheme/CarousalComponent';
import Services from '@/components/NewTheme/Services';
import Rooms from '@/components/NewTheme/Rooms';

function Hotel() {

    const [allHotelDetails, setHotelDetails] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [showRoom, setShowRoom] = useState({
        'visible': 0,
        'index': undefined,
    });
    const [menu, setMenu] = useState(false);
    const [showModalTC, setShowModalTC] = useState(0);
    const [showModalPrivacy, setShowModalPrivacy] = useState(0);

    useEffect(() => {
        getHotelDetails();
        getRoomDetails();
    }, []);

    function getHotelDetails() {
        let url = "/api/jammu-and-kashmir/srinagar/hotels/t2k0032";
        axios.get(url)
            .then((response) => {
                setHotelDetails(response.data)
                console.log("hotel details loaded succesfully")
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    function getRoomDetails() {
        let url = "api/all_rooms_details/t2k0032";
        axios.get(url)
            .then((response) => {
                setRooms(response.data.rooms);
                console.log("room details loaded successfull")
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    return (
        <main>
            {/* <section className="bg-[url('https://themewagon.github.io/sogo/images/slider-7.jpg')] h-fit bg-no-repeat md:max-h-screen lg:h-screen lg:bg-cover xl:bg-cover z=0">
                <header className="px-10 py-16 font-bold">
                    <div className="columns-2">
                        <h1 className="text-2xl text-white">Engage Hotel</h1>
                        <div className='text-end'><i className='text-end text-white font-extrabold'><MenuIcon /></i></div>
                        
                    </div>
                </header>
                <div className='text-center pt-32 pb-44 lg:pt-32'>
                    <h1 className='text-white font-extralight tracking-widest lg:text-lg lg:font-normal 2xl:font-medium'>WELCOME TO 5 <StarIcon /> HOTEL</h1>
                    <h1 className='text-4xl font-bold mt-3 text-white font-bold lg:text-7xl'>A Best Place To Stay</h1>
                </div>
            </section> */}

            <section className="relative md:h-screen">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('https://themewagon.github.io/sogo/images/slider-7.jpg')] bg-no-repeat bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <header className="relative px-7 md:px-10 py-12 md:py-16 font-bold">
                    <div className="flex justify-between">
                        <h1 className="text-xl text-white md:text-2xl">{allHotelDetails?.property_name}</h1>
                        <div className='flex gap-5 md:gap-10'>
                            <span className='hidden md:hidden lg:block'>
                                <ul className='lg:flex lg:gap-10 xl:gap-16 lg:text-white'>
                                    <a href="#about"><li className='hover:text-slate-300 hover:underline'>About</li></a>
                                    <a href="#rooms"><li className='hover:text-slate-300 hover:underline'>Rooms</li></a>
                                    <a href="#photos"><li className='hover:text-slate-300 hover:underline'>Photos</li></a>
                                    <a href="#services"><li className='hover:text-slate-300 hover:underline'>Services</li></a>
                                    <a href="#reviews"><li className='hover:text-slate-300 hover:underline'>Reviews</li></a>
                                    <a href="#footer"><li className='hover:text-slate-300 hover:underline'>Contact Us</li></a>
                                </ul>
                            </span>

                            <div className="relative w-20 lg:max-w-sm">
                                <select style={{ fontSize: "10px" }} className="text-xs text-white w-full relative -top-1 md:top-2 lg:-top-1 p-2 bg-transparent border rounded-md shadow-sm outline-none hover:border-indigo-600">
                                    <option className='text-gray-500'>Language</option>
                                    <option className='text-gray-500 lg:text-xs'>English</option>
                                    <option className='text-gray-500 lg:text-xs'>Arabic</option>
                                    <option className='text-gray-500 lg:text-xs'>French</option>
                                </select>
                            </div>
                            <i onClick={() => setMenu(true)} className="text-white lg:hidden "><MenuIcon className='relative -top-1  md:text-3xl md:top-2 cursor-pointer' sx={{ fontSize: 20 }} /></i>
                        </div>
                    </div>
                </header>
                <div className=" relative text-center pt-32 pb-44 md:top-72 lg:top-5 xl:top-10">
                    <h1 className="text-white font-extralight tracking-widest lg:text-lg lg:font-normal 2xl:font-medium">WELCOME TO {allHotelDetails?.star_rating} <i><StarIcon className="text-2xl" sx={{ color: 'orange' }} /> </i> HOTEL</h1>
                    <h1 className="text-4xl font-bold mt-3 text-white font-bold lg:text-7xl">{allHotelDetails?.description_title}</h1>
                </div>
            </section>



            {/* <section className='z=1 absolute mx-20 top-52 justify-center'>
                <div className="bg-white px-96">
                    <div className="p-5"> 

                    </div>
                </div>
            </section> */}


            <section id='about' className="bg-slate-200 px-5 py-10 lg:py-24 2xl:px-40 z=0">
                <div className="md:px-10 lg:flex lg:flex-row-reverse  lg:gap-20 xl:gap-10">
                    <div className="pb-20 relative">
                        <img className='rounded-md' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" ></img>
                        <img className='rounded-full h-40 md:h-60 md:-right-5 absolute right-0 bottom-0 border-8 lg:h-60 lg:-right-5 lg:bottom-20 xl:bottom-0' src="https://themewagon.github.io/sogo/images/food-1.jpg" alt="image" ></img>
                    </div>
                    <div className=" lg:w-8/12" >
                        <h2 className="text-4xl font-semibold lg:text-5xl lg:mt-0 xl:mt-5">Welcome!</h2>
                        <p className="text-slate-500 py-5 text-base tracking-wide lg:w-5/6 2xl:text-lg">{allHotelDetails?.description_body}</p>
                    </div>
                </div>
            </section>

            <Rooms
                rooms={rooms}
                showRoom={showRoom}
                setShowRoom={setShowRoom}
            />

            <CarousalComponent
                type='photos'
                data={allHotelDetails?.images}
                title='Photos'
            />

            <Services
                allHotelDetails={allHotelDetails}
            />

            <CarousalComponent
                type='review'
                data={allHotelDetails?.Reviews}
                title='People Says'
            />

            <Footer
                setShowModalPrivacy={setShowModalPrivacy}
                setShowModalTC={setShowModalTC}
                allHotelDetails={allHotelDetails}
            />


            {/* ------------------- modal view for footer-------------------------- */}

            <div className={showModalTC === 1 ? "block" : "hidden"}>
                <Modal
                    title={`Terms & Conditions`}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    setShowModal={(e) => setShowModalTC(e)}
                />
            </div>

            <div className={showModalPrivacy === 1 ? "block" : "hidden"}>
                <Modal
                    title={`Privacy Policy`}
                    description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                    setShowModal={(e) => setShowModalPrivacy(e)}
                />
            </div>


            {/*-------------------- menu bar for small and medium screen----------- */}

            {menu === true ?
                <React.Fragment>
                    <div className='absolute inset-0 w-full h-72 md:h-80 bg-white opacity-75 rounded-bl-3xl rounded-br-3xl  md:rounded-br-full'>
                        <i onClick={() => setMenu(false)} className='flex justify-end pt-5 pr-5 cursor-pointer hover:text-slate-500'><CloseIcon /></i>
                        <div className='text-center text-black pt-10 md:pt-12'>
                            <ul className='inline-block font-bold'>
                                {[{ "label": "About", "id": "#about" },
                                { "label": "Rooms", "id": "#rooms" },
                                { "label": "Photos", "id": "#photos" },
                                { "label": "Services", "id": "#services" },
                                { "label": "Reviews", "id": "#reviews" },
                                { "label": "Contact Us", "id": "#footer" }].map((item, index) => {
                                    return (
                                        <a href={`${item?.id}`} key={index} onClick={() => setMenu(false)}><li className='pb-1 md:pb-2 hover:text-slate-500'>{item?.label}</li></a>
                                    )
                                })}
                                {/* 
                                                <a href="#about" onClick={() => setMenu(false)}><li className='pb-1  hover:text-slate-500'>About</li></a>
                                                <a href="#rooms" onClick={() => setMenu(false)}><li className='pb-1 hover:text-slate-500'>Rooms</li></a>
                                                <a href="#photos" onClick={() => setMenu(false)}><li className='pb-1 hover:text-slate-500'>Photos</li></a>
                                                <a href="#services" onClick={() => setMenu(false)}><li className='pb-1 hover:text-slate-500'>Services</li></a>
                                                <a href="#reviews" onClick={() => setMenu(false)}><li className='pb-1 hover:text-slate-500'>Reviews</li></a>
                                                <a href="#footer" onClick={() => setMenu(false)}><li className='pb-1 hover:text-slate-500'>Contact Us</li></a> 
                                                */}
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
                : <></>
            }

        </main>
    )
}

export default Hotel;