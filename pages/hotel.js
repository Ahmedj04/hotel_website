import React from 'react'

function hotel() {

    return (
        <main>
            <div className="bg-[url('https://themewagon.github.io/sogo/images/slider-7.jpg')] h-screen z-10">
                <header className="px-10 py-16 font-bold">
                    <div className="columns-2 justify-center">
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
                    <p className='py-5 text-slate-500 tracking-wide'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
                <div>
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


                </div>
            </section>

        </main>
    )
}

export default hotel;