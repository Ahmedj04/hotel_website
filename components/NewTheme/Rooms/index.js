import React, { useEffect, useState } from 'react';
import CarousalComponent from '../CarousalComponent';
import RoomDetails from './RoomDetails';
import RoomServices from './RoomServices';
import Loader from '../Loaders/Loader';


function Rooms({ rooms, showRoom, setShowRoom, roomDetailLoader }) {

    const [selectedRoom, setSelectedRoom] = useState([]);

    //just for printing the value of state selectedRoom
    useEffect(() => (
        console.log(selectedRoom)
    ), [selectedRoom]) //it will be called when ever there is any change in the state selectedRoom

    return (
        <section id='rooms' className="px-5 py-10">

            <div className='text-center'>
                <h2 className="font-semibold text-2xl md:text-4xl pb-10">Rooms & Suites </h2>
            </div>
            <div className='md:flex md:gap-5'>
                {rooms?.map((room, index) => {
                    return (
                        <div className='md:w-1/2' key={index}>
                            <div className={`text-center pb-5 md:py-5 lg:py-10 md:rounded-md ${selectedRoom?.room_id===room?.room_id? `${`md:shadow-xl md:bg-slate-200 lg:shadow-xl lg:bg-slate-100`}`:``}`}
                                onClick={() => {
                                    (showRoom.index != index) ? setShowRoom({ "visible": 1, "index": index }) : setShowRoom({ "visible": 0, "index": undefined });
                                    setSelectedRoom(room);
                                }}
                            >
                                {Object.keys(room).includes('room_images') ? <img className='rounded-md md:w-10/12 md:m-auto lg:w-5/12' src={room?.room_images[0].image_link}></img> : <img className='rounded-md md:w-10/12 md:m-auto lg:w-5/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}

                                <p className="mt-5 text-xl font-semibold">{room?.room_name}</p>

                                {room?.unconditional_rates?.map((resource, index) => {
                                    return <p key={index} className="text-lg text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                                })}

                            </div>

                            {
                                showRoom.visible === 1 && showRoom.index === index ?
                                    <div className=" md:-mx-auto pt-5 mb-10 rounded shadow-lg bg-slate-100 md:hidden lg:hidden">
                                        <div className="flex justify-between px-5">
                                            <p className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>{room?.room_name} - ({room?.room_type.replaceAll("_", " ")})</p>
                                            {room?.unconditional_rates?.map((resource, index) => {
                                                return <p key={index} className="text-sm mt-2 text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                                            })}
                                        </div>

                                        <p className='py-5 px-3 text-slate-500 tracking-wide text-center'>{room.room_description}</p>
                                        {Object.keys(room).includes('room_images') ?
                                            <CarousalComponent
                                                id="roomPhotos"
                                                type='room'
                                                data={room?.room_images}
                                            />
                                            : <img className='rounded-md md:m-auto md:w-6/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />
                                        }

                                        <RoomDetails
                                            room={room}
                                        />

                                        {Object.keys(room).includes("room_facilities") ?
                                            <RoomServices
                                                room={room}
                                            />
                                            : <></>}
                                    </div>
                                    : <></>
                            }

                        </div>
                    );
                })}
            </div> 
            {selectedRoom.length != 0 ?     
             <div className="hidden md:block lg:block md:-mx-auto md:mt-8 md:pt-5 md:mb-10 rounded shadow-lg bg-slate-100">
                <div className="flex justify-between px-5">
                    <p className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>{selectedRoom?.room_name} - ({selectedRoom?.room_type?.replaceAll("_", " ")})</p>
                    {selectedRoom?.unconditional_rates?.map((resource, index) => {
                        return <p key={index} className="text-lg text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                    })}
                </div>

                <p className='py-5 px-3 text-slate-500 tracking-wide text-center'>{selectedRoom.room_description}</p>
                {Object.keys(selectedRoom).includes('room_images') ?
                    <CarousalComponent
                        id="roomPhotos"
                        type='room'
                        data={selectedRoom?.room_images}
                    />
                    : <img className='rounded-md md:m-auto md:w-5/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />
                }

                <RoomDetails
                    room={selectedRoom}
                />

                {Object.keys(selectedRoom).includes("room_facilities") ?
                    <RoomServices
                        room={selectedRoom}
                    />
                    : <></>}
            </div>: <></> }




            {/* {roomDetailLoader === 0 ? <> <Loader size={`w-11/12 h-12 py-3 mb-5 `} /><br /><Loader size={`w-11/12 h-12 py-3 mb-5 `} /><br /><Loader size={`w-11/12 h-12 py-3 mb-5 `} /><br /> </> :
                <>
                    {rooms?.map((room, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div onClick={() => {
                                    (showRoom.index != index) ? setShowRoom({ "visible": 1, "index": index }) : setShowRoom({ "visible": 0, "index": undefined })
                                }}
                                    className={`py-3 mb-5 rounded shadow-md  flex justify-between hover:bg-slate-200 border cursor-pointer`}>
                                    <span className="pl-5 pt-3 text-sm font-medium">{room?.room_name}</span>
                                    <button className='h-10 w-10'> {showRoom.visible === 1 && showRoom.index === index ? "-" : "+"} </button>
                                </div>

                                {
                                    showRoom.visible === 1 && showRoom.index === index ?
                                        <div className="py-2 rounded shadow-lg bg-slate-100">
                                            <div className="flex justify-between px-5">
                                                <p className=' text-slate-500 font-semibold tracking-wide text-center text-2xl'>{room?.room_name} - ({room?.room_type.replaceAll("_", " ")})</p>
                                                {room?.unconditional_rates?.map((resource, index) => {
                                                    return <p key={index} className="text-lg text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                                                })}
                                            </div>

                                            <p className='py-5 px-3 text-slate-500 tracking-wide text-center'>{room.room_description}</p>
                                            {Object.keys(room).includes('room_images') ?
                                                <CarousalComponent
                                                    id="roomPhotos"
                                                    type='room'
                                                    data={room?.room_images}
                                                />
                                                : <img className='rounded-md md:m-auto md:w-6/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />
                                            }

                                            <RoomDetails
                                                room={room}
                                            />

                                            {Object.keys(room).includes("room_facilities") ?
                                                <RoomServices
                                                    room={room}
                                                />
                                                : <></>}
                                        </div>
                                        : <></>
                                }
                            </React.Fragment>)

                    })}</>} */}
        </section>
    );
}

export default Rooms