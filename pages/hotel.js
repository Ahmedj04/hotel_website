import React, { useEffect, useState } from 'react'
import Carousel from 'better-react-carousel'
import axios from 'axios'



function hotel() {

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
        axios.get(url).then((response) => {
            setHotelDetails(response.data)
            console.log("hotel details loaded succesfully")
        }).catch((err) => {
            alert(JSON.stringify(err))
        })
    }

    function getRoomDetails() {
        let url = "api/all_rooms_details/t2k0032";
        axios.get(url).then((response) => {
            setRooms(response.data.rooms);
            console.log("room details loaded successfull")
        }).catch((err) => {
            alert(JSON.stringify(err))
        })
    }

    return (
        <main>
            <div className="bg-[url('https://themewagon.github.io/sogo/images/slider-7.jpg')] h-screen">
                <header className="px-10 py-16 font-bold">
                    <div className="columns-2">
                        <h1 className="text-2xl text-white">Engage Hotel</h1>
                        <h1 className='text-end text-white'>Menu</h1>
                    </div>
                </header>
                <div className='text-center pt-40 pb-44'>
                    <h1 className='text-white font-extralight tracking-widest'>WELCOME TO 5 STAR HOTEL</h1>
                    <h1 className='text-4xl font-bold mt-3 text-white font-bold'>A Best Place To Stay</h1>
                </div>
            </div>
            <section className="bg-slate-200 px-5 py-10">
                <div className="pb-20 relative">
                    <img className='rounded-md' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" ></img>
                    <img className='rounded-full h-40 absolute right-0 bottom-0 border-8' src="https://themewagon.github.io/sogo/images/food-1.jpg" alt="image" ></img>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold">Welcome!</h2>
                    <p className="text-slate-500 py-5 text-base tracking-wide">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <button className="px-6 py-2 bg-yellow-500 rounded-full text-white">Learn More</button>
                <span className="px-10 text-base"><em>or</em></span>
                <a className="text-yellow-500 tracking-wider">SEE VIDEO</a>

            </section>
            <section className="px-5 py-10">
                <div className='text-center'>
                    <h2 className="font-semibold text-4xl">Rooms & Suites</h2>
                    {/* <p className='py-5 text-slate-500 tracking-wide'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p> */}
                </div>

                {rooms?.map((room, index) => {
                    {/* console.log(room?.room_name) */ }
                    return (<React.Fragment key={index}>
                      <div className='border border-solid border-cyan-400 border-r-8 bg-transparent flex justify-between'>
                      <span>{room?.room_name}</span>
                      <button
                            className='block h-10 w-10 bg-blue-700 border border-black border-4'
                            onClick={() => {
                                setShowRoom(showRoom.visible === 0 ? { 'visible': 1, 'index': index } : { 'visible': 0, 'index': undefined })
                            }}> + </button>
                      </div>  
                        {
                            showRoom.visible === 1 && showRoom.index === index ?
                                <div>
                                    <p className='py-5 text-slate-500 tracking-wide text-center'>{room.room_description}</p>
                                        {Object.keys(room).includes('room_images')? <Carousel cols={1} rows={1} gap={10} autoPlay={1000} loop={true}
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
                                    </Carousel>: <img className='rounded-md' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}
                                    
                                   

                                    <div className="text-center py-10">
                                        <h2 className='text-4xl font-light'>{room?.room_type}</h2>
                                        <p className="mt-3 text-yellow-500 text-lg">{room?.unconditional_rates?.[0]?.baserate_currency + " " + room?.unconditional_rates?.[0]?.baserate_amount}</p>
                                    </div>

                                </div>
                                : <></>

                        }
                    </React.Fragment>)

                })}


                {/* <div>
                    <div>
                        <img className='rounded-md' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" ></img>
                        <div className="text-center py-10">
                            <h2 className='text-4xl font-light'>Single Room</h2>
                            <p className="mt-3 text-yellow-500 text-lg">90$ / PER NIGHT</p>
                        </div>

                    </div>
                    <div>
                        <img className='rounded-md' src="https://themewagon.github.io/sogo/images/img_2.jpg" alt="image" ></img>
                        <div className="text-center py-10">
                            <h2 className='text-4xl font-light'>Family Room</h2>
                            <p className="mt-3 text-yellow-500 text-lg">120$ / PER NIGHT</p>
                        </div>
                    </div>

                    <div>
                        <img className='rounded-md' src="https://themewagon.github.io/sogo/images/img_3.jpg" alt="image" ></img>
                        <div className="text-center py-10">
                            <h2 className='text-4xl font-light'>Presidential Room</h2>
                            <p className="mt-3 text-yellow-500 text-lg">250$ / PER NIGHT</p>
                        </div>
                    </div>

                </div> */}
            </section>
            <section className="px-5 py-10 bg-slate-200">
                <div className='text-center'>
                    <h2 className="font-semibold text-4xl">Photos</h2>
                    <p className='py-5 text-slate-500 tracking-wide'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
                            gap: 20,
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
                    <div>
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
                            <p className="text-gray-400">
                                <span className='text-white'><em>Address: </em></span><br />
                                <span className="">198 West 21th Street,</span><br />
                                <span className=''>Suite 721 New York NY 10016</span>
                            </p>
                            <p className="text-gray-400 py-5">
                                <span className='text-white'><em>Phone: </em></span><br />
                                <span className="">(+91) 435 3533</span><br />
                            </p>
                            <p className="text-gray-400 ">
                                <span className='text-white'><em>Email: </em></span><br />
                                <span className="">info@domain.com</span><br />
                            </p>
                        </div>

                    </div>

                    <div className='text-center text-gray-400'>
                        <p>Copyright &copy; 2023 All rights Reserved</p>
                        <p></p>
                    </div>

                </div>
            </footer>

        </main>
    )
}

export default hotel;