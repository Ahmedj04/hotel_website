import React, { useEffect, useState } from 'react';
import Carousel from 'better-react-carousel';
import axios from 'axios';
import BedIcon from '@mui/icons-material/Bed';
import LandscapeIcon from '@mui/icons-material/Landscape';
import GroupsIcon from '@mui/icons-material/Groups';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import icon from '../components/GlobalData';

function Hotel() {

    let i = 0;
    const [allHotelDetails, setHotelDetails] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [showRoom, setShowRoom] = useState({
        'visible': 0,
        'index': undefined,
    });
    const [menu, setMenu] = useState(false);

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
                                    <a href="#about"><li>About</li></a>
                                    <a href="#rooms"><li>Rooms</li></a>
                                    <a href="#photos"><li>Photos</li></a>
                                    <a href="#services"><li>Services</li></a>
                                    <a href="#reviews"><li>Reviews</li></a>
                                    <a href="#footer"><li>Contact Us</li></a>
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
                        <img className='rounded-full h-40 absolute right-0 bottom-0 border-8 lg:h-60 lg:-right-5' src="https://themewagon.github.io/sogo/images/food-1.jpg" alt="image" ></img>
                    </div>
                    <div className=" lg:w-8/12" >
                        <h2 className="text-4xl font-semibold lg:text-5xl lg:mt-0 xl:mt-5">Welcome!</h2>
                        <p className="text-slate-500 py-5 text-base tracking-wide lg:w-5/6 2xl:text-lg">{allHotelDetails?.description_body}</p>
                    </div>
                </div>
            </section>

            <section id='rooms' className="px-5 py-10">
                <div className='text-center'>
                    <h2 className="font-semibold text-2xl md:text-4xl pb-10">Rooms & Suites</h2>
                </div>

                {rooms?.map((room, index) => {
                    {/* console.log(room?.room_name) */ }
                    return (<React.Fragment key={index}>
                        <div onClick={() => {
                            (showRoom.index != index) ? setShowRoom({ "visible": 1, "index": index }) : setShowRoom({ "visible": 0, "index": undefined })
                        }}
                            className={`py-3 mb-5 rounded shadow-md  flex justify-between hover:bg-slate-200 border cursor-pointer`}>
                            <span className="pl-5 pt-3 text-sm font-medium">{room?.room_name}</span>
                            <button className='h-10 w-10'> {showRoom.visible === 1 && showRoom.index === index ? "-" : "+"} </button>
                        </div>
                        {
                            showRoom.visible === 1 && showRoom.index === index ?
                                <div className="py-2 rounded shadow-lg">
                                    <div className="flex justify-between px-5">
                                        <p className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>{room?.room_name} - ({room?.room_type.replaceAll("_", " ")})</p>
                                        {room?.unconditional_rates?.map((resource, index) => {
                                            return <p key={index} className="text-lg text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                                        })}
                                    </div>

                                    <p className='py-5 px-3 text-slate-500 tracking-wide text-center'>{room.room_description}</p>
                                    {Object.keys(room).includes('room_images') ? <Carousel cols={1} rows={1} gap={10} autoPlay={1000} loop={true}
                                        responsiveLayout={[
                                            {
                                                breakpoint: 480,
                                                cols: 1,
                                                rows: 1,
                                                gap: 10,
                                                loop: true,
                                                autoplay: 1000
                                            },
                                            {
                                                breakpoint: 810,
                                                cols: 2,
                                                rows: 1,
                                                gap: 10,
                                                loop: true,
                                                autoplay: 1000
                                            },
                                            {
                                                breakpoint: 1020,
                                                cols: 2,
                                                rows: 1,
                                                gap: 10,
                                                loop: true,
                                                autoplay: 1000
                                            },
                                        ]}
                                    >
                                        {room?.room_images?.map((resource, index) => {

                                            return (
                                                <Carousel.Item key={index} >
                                                    <img width="100%" style={{ height: "350px" }} className="rounded-lg" src={resource?.image_link} />
                                                </Carousel.Item>
                                            )
                                        })}
                                    </Carousel> : <img className='rounded-md md:m-auto md:w-6/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}

                                    <div className="mt-5 pt-10 bg-slate-200 rounded-md">
                                        <h2 className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>Room Details</h2>
                                        <div className="px-5 py-5 lg:flex lg:justify-around lg:py-10">
                                            <p className='text-slate-500 pb-2'><SquareFootIcon /> &nbsp; {room.carpet_area} SQ.FT</p>
                                            <p className='text-slate-500 pb-2'><GroupsIcon />  &nbsp; {room.room_capacity} Adults</p>
                                            <p className='text-slate-500 pb-2'>{room?.views?.map((item, index) => {
                                                return (
                                                    <span key={index} >{index === 0 ? <LandscapeIcon /> : ','} &nbsp; {item?.view}  </span>
                                                );
                                            })}</p>

                                            {/* {Object.keys(room).includes("beds") ? room.beds.length > 1 ? <p className='text-slate-500 pb-2'>- {room.beds.length} Beds </p> : <p className='text-slate-500 pb-2'>- {room.beds.length} Bed</p> : <></>} */}
                                            {Object.keys(room).includes("beds") ?
                                                <p className='text-slate-500 pb-2'><BedIcon /> &nbsp; {room.beds.length} {room.beds.length > 1 ? "Beds" : "Bed"} <span> ({room?.beds?.map((item, index) => {
                                                    return (
                                                        <span key={index}>{index === 0 ? '' : ' , '} {item?.bed_width} * {item?.bed_length}</span>

                                                    );
                                                })}) cm</span>
                                                </p> : <></>}

                                        </div>
                                    </div>
                                    {Object.keys(room).includes("room_facilities") ?
                                        <div className="py-10">
                                            <h2 className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>Services</h2>
                                            <div className="grid grid-flow-row-dense px-5 pt-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-3">
                                                {room?.room_facilities?.map((item, index) => {
                                                    return (
                                                        <span className='text-gray-700' key={index}>
                                                            {/* &#10004 is code for tick mark  */}
                                                            <span>&#10004;
                                                                {item?.service_name.replaceAll("_", " ")}
                                                            </span>
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div> : <></>}
                                </div>
                                : <></>
                        }
                    </React.Fragment>)

                })}
            </section>

            <section id='photos' className="px-5 py-10 bg-slate-200">
                <div className='text-center'>
                    <h2 className="font-semibold text-2xl md:text-4xl m-4">Photos</h2>

                </div>

                <Carousel cols={1} rows={1} gap={10} autoPlay={1000} loop={true}
                    responsiveLayout={[
                        {
                            breakpoint: 480,
                            cols: 1,
                            rows: 1,
                            gap: 10,
                            loop: true,
                            autoplay: 1000
                        },
                        {
                            breakpoint: 810,
                            cols: 2,
                            rows: 1,
                            gap: 10,
                            loop: true,
                            autoplay: 1000
                        },
                        {
                            breakpoint: 1020,
                            cols: 2,
                            rows: 1,
                            gap: 10,
                            loop: true,
                            autoplay: 1000
                        },
                    ]}
                >
                    {allHotelDetails?.images?.map((resource, index) => {
                        return (
                            <Carousel.Item key={index} >
                                <img width="100%" style={{ height: "350px" }} className="rounded-lg" src={resource?.image_link} />
                            </Carousel.Item>
                        )
                    })}
                </Carousel>

            </section>
            <section className="px-5 py-10">
                <div id='services'>
                    <h2 className=" text-center font-semibold text-2xl md:text-4xl"> Property Services</h2>
                    <div className="py-10 grid grid-flow-row-dense grid-cols-5 lg:grid-cols-5 md:grid-cols-4 md:col-span-9  grid-cols-2  md:gap-3 gap-1 lg:gap-3">
                        {allHotelDetails?.services?.map((item, idx) => {
                            return (
                                <React.Fragment key={idx}>
                                    {(() => {
                                        switch (item?.service_id) {
                                            case 'ser001': return (
                                                <div>
                                                    {/*AC*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.ac}
                                                    </span>
                                                </div>)
                                            case 'ser002': return (
                                                <div>
                                                    {/*All Inclusive Available*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.inclusive}
                                                    </span>
                                                </div>)
                                            case 'ser003': return (
                                                <div>
                                                    {/*Child Friendly*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.childfriendly}
                                                    </span>
                                                </div>)
                                            case 'ser004': return (
                                                <div>
                                                    {/*Golf Course*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.golf}
                                                    </span>
                                                </div>)
                                            case 'ser005': return (
                                                <div>
                                                    {/*Airport Shuttle*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.airport}
                                                    </span>
                                                </div>)
                                            case 'ser006': return (
                                                <div>
                                                    {/*Bar Lounge*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.bar}
                                                    </span>
                                                </div>)
                                            case 'ser007': return (
                                                <div>
                                                    {/*Beach*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.beach}
                                                    </span>
                                                </div>)
                                            case 'ser008': return (
                                                <div>
                                                    {/*Business Center*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.bussinesscenter}
                                                    </span>
                                                </div>)
                                            case 'ser009': return (
                                                <div>
                                                    {/*Fitness Center*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.fitnesscenter}
                                                    </span>
                                                </div>)
                                            case 'ser0010': return (
                                                <div>
                                                    {/*Free Breakfast*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.breakfast}
                                                    </span>
                                                </div>)
                                            case 'ser0011': return (
                                                <div>
                                                    {/*Hot Tub*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.hottub}
                                                    </span>
                                                </div>)
                                            case 'ser0012': return (
                                                <div>
                                                    {/*Laundary Service*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.laundary}
                                                    </span>
                                                </div>)

                                            case 'ser0013': return (
                                                <div>
                                                    {/*Restaurant*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.restaurant}
                                                    </span>
                                                </div>)
                                            case 'ser0014': return (
                                                <div>
                                                    {/*Room Service*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.roomservice}
                                                    </span>
                                                </div>)
                                            case 'ser0015': return (
                                                <div>
                                                    {/*Spa*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.spa}
                                                    </span>
                                                </div>)
                                            case 'ser0016': return (
                                                <div>
                                                    {/*Kitchen*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.kitchen}
                                                    </span>
                                                </div>)
                                            case 'ser0017': return (
                                                <div>
                                                    {/*Parking*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.parking}
                                                    </span>
                                                </div>)

                                            case 'ser0018': return (
                                                <div>
                                                    {/*Pets Allowed*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.pets}
                                                    </span>
                                                </div>)
                                            case 'ser0019': return (
                                                <div>
                                                    {/*Smoke Free*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.smokefree}
                                                    </span>
                                                </div>)
                                            case 'ser0020': return (
                                                <div>
                                                    {/*Swimming Pool*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.pool}
                                                    </span>
                                                </div>)
                                            case 'ser0021': return (
                                                <div>
                                                    {/*Wheel Chair*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.wheelchair}
                                                    </span>
                                                </div>)
                                            case 'ser0022': return (
                                                <div>
                                                    {/*Wifi Type*/}
                                                    <span className="tooltip rounded-full hover:cursor-pointer hover:text-gray-900 text-gray-600 flex justify-center" title={item?.local_service_name}>
                                                        {icon?.Icons?.[i]?.wifi}
                                                    </span>
                                                </div>)

                                            default: return (<div></div>)
                                        }
                                    })()}
                                </React.Fragment>
                            )
                        })}</div>
                </div>
                <div id='reviews'>
                    <div className='text-center pb-10'>
                        <h2 className="font-semibold text-2xl md:text-4xl">People Says</h2>
                    </div>
                    <Carousel cols={1} rows={1} gap={10} autoPlay={1000} loop={true}
                        responsiveLayout={[
                            {
                                breakpoint: 480,
                                cols: 2,
                                rows: 1,
                                gap: 10,
                                loop: true,
                                autoplay: 1000
                            },
                            {
                                breakpoint: 810,
                                cols: 2,
                                rows: 1,
                                gap: 20,
                                loop: true,
                                autoplay: 1000
                            },
                            {
                                breakpoint: 1024,
                                cols: 1,
                                rows: 1,
                                gap: 10,
                                loop: true,
                                autoplay: 1000
                            },
                            {
                                breakpoint: 1280,
                                cols: 1,
                                rows: 1,
                                gap: 10,
                                loop: true,
                                autoplay: 1000
                            },
                        ]}
                    >
                        {allHotelDetails?.Reviews?.map((resource, index) => {
                            return (
                                <Carousel.Item key={index} >
                                    <p className="text-center text-slate-500 tracking-wide">{resource?.review_content}</p>

                                    <p className='text-center text-slate-500 tracking-wide py-10'><span>__ </span>{resource?.review_author}</p>

                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>

            </section>

            <footer id="footer" className="bg-zinc-900 ">
                <div className='container px-5 py-10'>
                    <div className="md:flex md:justify-evenly lg:justify-evenly">
                        <div className="pb-10">
                            <ul className='text-gray-400'>
                                <a href='#rooms'><li className='py-2'>The Rooms & Suites</li></a>
                                <a href='#about'><li className='py-2'>About Us</li></a>

                            </ul>
                        </div>

                        <div className="pb-10">
                            <ul className='text-gray-400'>
                                <li className='py-2'>Terms & Conditions</li>
                                <li className='py-2'>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className="pb-10">
                            <div>
                                <div className="text-gray-400 pb-5">
                                    <h1 className='text-white'><em>Address: </em></h1>
                                    <span className="">{allHotelDetails?.address?.[0]?.address_street_address},</span><br />
                                    <span className=''>{allHotelDetails?.address?.[0]?.address_city}, {allHotelDetails?.address?.[0]?.address_zipcode}</span><br />
                                </div>
                                {allHotelDetails?.contacts?.map((contact, index) => {
                                    return (
                                        (contact.contact_type == "Phone" || contact.contact_type == "Email") ?
                                            <div key={index} className='text-gray-400 pb-5'>
                                                <h1 className='text-white'><em>{contact?.contact_type} </em></h1>
                                                <p className="">{contact?.contact_data}</p>
                                            </div> : undefined
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='text-center text-gray-400 md:text-center lg:text-center'>
                        <p>Copyright &copy; 2023 All rights Reserved</p>
                        <p></p>
                    </div>

                </div>
            </footer>


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
                                {/*            <a href="#about" onClick={() => setMenu(false)}><li className='pb-1 hover:text-slate-500'>About</li></a>
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