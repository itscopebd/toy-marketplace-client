import React from 'react';
import banner1 from "../../assets/img/banner1.png";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />


                    <div className='top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 absolute w-8/12 text-center'>
                        <h3 className=' text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-green-500 to-pink-500 bg-clip-text w-full text-transparent'>The perfect combination <br />  of power and style. </h3>
                        <p className='my-3 hidden md:block'>There's some innocent flirtation between boy and girl cars. <br /> Some mild language -- at least one use of "hell." At 116 minutes, <br /> it's on the long side for animation and may be too much for some really little kids.</p>
                        <button className='btn-sm md:btn bg-[#8bc34a] border-[#8bc34a]'>Shop Now</button>
                    </div>
            </div>

        
        </div>
    );
};

export default Banner;