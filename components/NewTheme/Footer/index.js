import React from 'react'

function Footer({setShowModalPrivacy,setShowModalTC,allHotelDetails}) {
  return (
    <footer id="footer" className="bg-zinc-900 ">
                <div className='container px-5 py-10'>
                    <div className="md:flex md:justify-evenly lg:justify-evenly">
                        <div className="pb-10">
                            <ul className='text-gray-400'>
                                <a href='#rooms'><li className='py-2 hover:text-white'>The Rooms & Suites</li></a>
                                <a href='#about'><li className='py-2 hover:text-white'>About Us</li></a>

                            </ul>
                        </div>

                        <div className="pb-10">
                            <ul className='text-gray-400'>
                                <li className='py-2 hover:text-white' onClick={() => setShowModalTC(1)}>Terms & Conditions</li>
                                <li className='py-2 hover:text-white' onClick={() => setShowModalPrivacy(1)}>Privacy Policy</li>
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
  )
}

export default Footer