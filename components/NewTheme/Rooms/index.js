import React from 'react';
import CarousalComponent from '../CarousalComponent';
import RoomDetails from './RoomDetails';
import RoomServices from './RoomServices';
import Loader from '../Loaders/Loader';


function Rooms({ rooms, showRoom, setShowRoom, roomDetailLoader }) {
    return (
        <section id='rooms' className="px-5 py-10">
            <div className='text-center'>
                <h2 className="font-semibold text-2xl md:text-4xl pb-10">Rooms & Suites</h2>
            </div>
            {roomDetailLoader === 0 ? <> <Loader size={`w-11/12 h-12 py-3 mb-5 `} /><br /><Loader size={`w-11/12 h-12 py-3 mb-5 `} /><br /><Loader size={`w-11/12 h-12 py-3 mb-5 `} /><br /> </> :
                <>
                    {rooms?.map((room, index) => {
                        {/* console.log(room?.room_name) */ }
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

                    })}</>}
        </section>
    );
}

export default Rooms