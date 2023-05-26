import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Loader from '../Loaders/Loader'

function Header({allHotelDetails, setMenu,hotelDetailLoader}) {
  return (
    <header className="relative px-7 md:px-10 py-12 md:py-16 font-bold">
    <div className="flex justify-between">
        <h1 className="text-xl text-white md:text-2xl">
        {hotelDetailLoader===0?<Loader size={`h-10 w-32`}/>:<>{allHotelDetails?.property_name}</>}
        
        </h1>
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
  )
}

export default Header