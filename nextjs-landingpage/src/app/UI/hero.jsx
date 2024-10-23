import React from 'react';
import Image from 'next/image';
import heroImage from './images/hero.jpg';


const Hero = () => {
    return (
        <div className="landingpage h-screen ">
            <div className='flex justify-center min-h-96 bg-white m-8 rounded-3xl p-0'>
                <div className="image--wrapper flex-1">
                    <Image
                        src={heroImage}
                        alt='hero'
                        width={2000}
                        height={1200}
                        className='rounded-3xl min-h-72 min-w-96 rounded-br-none rounded-tr-none'
                    >
                    </Image>
                </div>
                
                <div className=' w-full flex flex-col p-0 flex-1'>
                    <h1 className=' justify-center text-4xl m-4 mb-2 text-black'>Hero</h1>
                    <h2 className=' text-2xl m-4 mt-0 text-black justify-center'>This is the hero section</h2>
                    <p className='m-6 text-gray-800 justify-center overflow-hidden '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8'>Learn More</button>
                </div>
            </div>
     </div>
    );
};

export default Hero;