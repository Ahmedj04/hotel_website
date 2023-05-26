import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Header from './Header';
import Loader from '../Loaders/Loader'

function Home({ allHotelDetails, setMenu, hotelDetailLoader }) {
    return (
        <section className="relative md:h-screen">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('https://themewagon.github.io/sogo/images/slider-7.jpg')] bg-no-repeat bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <Header
                allHotelDetails={allHotelDetails}
                setMenu={setMenu}
                hotelDetailLoader={hotelDetailLoader}
            />

            <div className=" relative text-center pt-32 pb-44 md:top-72 lg:top-5 xl:top-10">
                {hotelDetailLoader===0?<Loader size={`h-8 w-32`} /> :
               <>  <h1 className="text-white font-extralight tracking-widest lg:text-lg lg:font-normal 2xl:font-medium">WELCOME TO {allHotelDetails?.star_rating} <i><StarIcon className="text-2xl" sx={{ color: 'orange' }} /> </i> HOTEL</h1></>}
                <h1 className="text-4xl font-bold mt-3 text-white font-bold lg:text-7xl"> {hotelDetailLoader === 0 ? <Loader size='h-8 w-44 md:h-9 md:w-5/12 lg:h-16 lg:w-6/12' /> : allHotelDetails?.description_title} </h1>
            </div>
        </section>
    )
}

export default Home;