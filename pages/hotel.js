import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import axios from 'axios'

function Hotel() {

    const [allHotelDetails, setHotelDetails] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [showRoom, setShowRoom] = useState({
        'visible': 0,
        'index': undefined,
    })

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
            <section className="bg-[url('https://themewagon.github.io/sogo/images/slider-7.jpg')] h-fit bg-no-repeat md:max-h-screen lg:h-screen lg:bg-cover xl:bg-cover z=0">
                <header className="px-10 py-16 font-bold">
                    <div className="columns-2">
                        <h1 className="text-2xl text-white">Engage Hotel</h1>
                        <h1 className='text-end text-white'>Menu</h1>
                    </div>
                </header>
                <div className='text-center pt-40 pb-44 lg:pt-32'>
                    <h1 className='text-white font-extralight tracking-widest lg:text-lg lg:font-normal 2xl:font-medium'>WELCOME TO 5 STAR HOTEL</h1>
                    <h1 className='text-4xl font-bold mt-3 text-white font-bold lg:text-7xl'>A Best Place To Stay</h1>
                </div>
            </section>

            {/* <section className='z=1 absolute mx-20 top-52 justify-center'>
                <div className="bg-white px-96">
                    <div className="p-5"> 

                    </div>
                </div>
            </section> */}


            <section className="bg-slate-200 px-5 py-10 lg:py-24 2xl:px-40 z=0">
                <div className="md:px-10 lg:flex lg:flex-row-reverse  lg:gap-20 xl:gap-10">
                    <div className="pb-20 relative">
                        <img className='rounded-md' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" ></img>
                        <img className='rounded-full h-40 absolute right-0 bottom-0 border-8 lg:h-60 lg:-right-5' src="https://themewagon.github.io/sogo/images/food-1.jpg" alt="image" ></img>
                    </div>
                    <div className=" lg:w-8/12" >
                        <h2 className="text-4xl font-semibold lg:text-5xl lg:mt-10 xl:mt-28">Welcome!</h2>
                        <p className="text-slate-500 py-5 text-base tracking-wide lg:w-5/6 2xl:text-lg">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    </div>
                </div>
            </section>

            <section className="px-5 py-10">
                <div className='text-center'>
                    <h2 className="font-semibold text-4xl pb-10">Rooms & Suites</h2>
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
                                    </Carousel> : <img className='rounded-md md:w-full' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}

                                    <div className="mt-5 pt-10 bg-slate-200 rounded-md">
                                        <h2 className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>Room Details</h2>
                                        <div className="px-5 py-5">
                                            <p className='text-slate-500 pb-2'>- {room.carpet_area} SQ.FT</p>
                                            <p className='text-slate-500 pb-2'>- {room.room_capacity} Adults</p>
                                            <p className='text-slate-500 pb-2'>{room?.views?.map((item, index) => {
                                                return (
                                                    <span key={index} >{index === 0 ? '-' : ','} {item?.view}  </span>
                                                );
                                            })}</p>

                                            {/* {Object.keys(room).includes("beds") ? room.beds.length > 1 ? <p className='text-slate-500 pb-2'>- {room.beds.length} Beds </p> : <p className='text-slate-500 pb-2'>- {room.beds.length} Bed</p> : <></>} */}
                                            {Object.keys(room).includes("beds") ?
                                                <p className='text-slate-500 pb-2'>- {room.beds.length} {room.beds.length > 1 ? "Beds" : "Bed"} <span> ({room?.beds?.map((item, index) => {
                                                    return (
                                                        <span key={index}>{index === 0 ? '' : ' , '} {item?.bed_width} * {item?.bed_length}</span>

                                                    );
                                                })}) cm</span>
                                                </p> : <></>}

                                        </div>
                                    </div>
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
                                                    </span>)
                                            })}
                                        </div>
                                    </div>
                                </div>
                                : <></>
                        }
                    </React.Fragment>)

                })}
            </section>

            <section className="px-5 py-10 bg-slate-200">
                <div className='text-center'>
                    <h2 className="font-semibold text-4xl m-4">Photos</h2>

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
                <div className='text-center pb-10'>
                    <h2 className="font-semibold text-4xl">People Says</h2>
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
                            cols: 2,
                            rows: 1,
                            gap: 10,
                            loop: true,
                            autoplay: 1000
                        },
                        {
                            breakpoint: 1280,
                            cols: 3,
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

            </section>
            <footer className="bg-zinc-900 ">
                <div className='container px-5 py-10'>
                    <div className="md:flex md:justify-evenly lg:justify-evenly">
                        <div className="pb-10">
                            <ul className='text-gray-400'>
                                <li className='py-2'>About Us</li>
                                <li className='py-2'>Terms & Conditions</li>
                                <li className='py-2'>Privacy Policy</li>
                                <li className='py-2'>Rooms</li>
                            </ul>
                        </div>

                        <div className="pb-10">
                            <ul className='text-gray-400'>
                                <li className='py-2'>The Rooms & Suites</li>
                                <li className='py-2'>About Us</li>
                                <li className='py-2'>Contact Us</li>
                                <li className='py-2'>Restaurant</li>
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

        </main>
    )
}

export default Hotel;