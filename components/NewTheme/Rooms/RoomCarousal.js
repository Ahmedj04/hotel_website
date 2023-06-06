import React from 'react'
import Carousel from 'better-react-carousel';


function RoomCarousal({ rooms, showRoom,setShowRoom , selectedRoom ,setSelectedRoom}) {
    return (
        <div className='hidden md:block lg:block'>
            <Carousel cols={3} rows={1} gap={0}  loop={false}
                responsiveLayout={[
                    {
                        breakpoint: 640,
                        cols: 3,
                        rows: 1,
                        gap: 0,
                        loop: false,
                        autoplay: 1000
                    },
                    {
                        breakpoint: 768,
                        cols: 3,
                        rows: 1,
                        gap: 0,
                        loop: false,
                        autoplay: 1000
                    },
                    {
                        breakpoint: 1020,
                        cols: 3,
                        rows: 1,
                        gap: 0,
                        loop: false,
                        autoplay: 1000
                    },
                    {
                        breakpoint: 1280,
                        cols: 3,
                        rows: 1,
                        gap: 0,
                        loop: false,
                        autoplay: 1000
                    },
                ]}
            >
                {rooms?.map((room, index) => {
                    return (
                        <Carousel.Item key={index} >
                            <div >

                                <div className={`text-center pb-5 md:py-5 lg:py-10 md:rounded-md ${selectedRoom?.room_id === room?.room_id ? `${`md:shadow-xl md:bg-slate-200 lg:shadow-xl lg:bg-slate-100`}` : ``}`}
                                    onClick={() => {
                                        (showRoom.index != index) ? setShowRoom({ "visible": 1, "index": index }) : setShowRoom({ "visible": 0, "index": undefined });
                                        setSelectedRoom(room);
                                    }}
                                >
                                    {Object.keys(room).includes('room_images') ? <img className='rounded-md md:w-10/12 md:m-auto lg:w-10/12' src={room?.room_images[0].image_link}></img> : <img className='rounded-md md:w-10/12 md:m-auto lg:w-10/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}

                                    <p className="mt-5 text-xl font-semibold">{room?.room_name}</p>

                                    {room?.unconditional_rates?.map((resource, index) => {
                                        return <p key={index} className="text-lg text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                                    })}

                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default RoomCarousal