import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@/components/NewTheme/modal';
import Footer from '@/components/NewTheme/Footer';
import CarousalComponent from '@/components/NewTheme/CarousalComponent';
import Services from '@/components/NewTheme/Services';
import Rooms from '@/components/NewTheme/Rooms';
import About from '@/components/NewTheme/About';
import Home from '@/components/NewTheme/Home';
import { english, arabic, french } from '@/components/Language/NewTheme';

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
    const [hotelDetailLoader, setHotelDetailLoader] = useState(0);
    const [roomDetailLoader, setRoomDetailLoader] = useState(0);
    const [lang, setLang] = useState(english);

    useEffect(() => {
        getLanguage();
        getHotelDetails();
        getRoomDetails();    
    }, []);

    function getLanguage(){
        let language = localStorage.getItem("lang");
        if(language === null){
            setLang(english)
        }else if(language === 'english'){
            setLang(english)
        }else if(language === 'french'){
            setLang(french)
        }else{
            setLang(arabic)
        }
    }

    function getHotelDetails() {
        let url = "/api/jammu-and-kashmir/srinagar/hotels/t2k001";
        axios.get(url)
            .then((response) => {
                setHotelDetails(response.data)
                console.log("hotel details loaded succesfully")
                setHotelDetailLoader(1)

            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    function getRoomDetails() {
        let url = "api/all_rooms_details/t2k001";
        axios.get(url)
            .then((response) => {
                setRooms(response.data.rooms);
                console.log("room details loaded successfull")
                setRoomDetailLoader(1);
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    return (
        <main>

            <Home
                allHotelDetails={allHotelDetails}
                setMenu={setMenu}
                lang={lang}
                setLang={setLang}
                hotelDetailLoader={hotelDetailLoader}
            />

            {/* <section className='z=1 absolute mx-20 top-52 justify-center'>
                <div className="bg-white px-96">
                    <div className="p-5"> 

                    </div>
                </div>
            </section> */}

            <About
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
                lang={lang}
            />

            <Rooms
                rooms={rooms}
                showRoom={showRoom}
                setShowRoom={setShowRoom}
                roomDetailLoader={roomDetailLoader}
                lang={lang}
            />


            <CarousalComponent
                id="photos"
                type='photos'
                data={allHotelDetails?.images}
                title={lang?.photos}
                hotelDetailLoader={hotelDetailLoader}
            />

            <Services
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
                lang={lang}
            />

            <CarousalComponent
                id="reviews"
                type='review'
                data={allHotelDetails?.Reviews}
                title={lang?.peopleSays}
                hotelDetailLoader={hotelDetailLoader}
            />

            <Footer
                setShowModalPrivacy={setShowModalPrivacy}
                setShowModalTC={setShowModalTC}
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
                lang={lang}
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
                                {[{ "label": lang?.about, "id": "#about" },
                                { "label": lang?.rooms, "id": "#rooms" },
                                { "label": lang?.photos, "id": "#photos" },
                                { "label": lang?.services, "id": "#services" },
                                { "label": lang?.reviews, "id": "#reviews" },
                                { "label": lang?.contactUs, "id": "#footer" }
                                ].map((item, index) => {
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