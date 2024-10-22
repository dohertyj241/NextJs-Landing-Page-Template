import React from 'react';
import Image from 'next/image';
import heroImage from './images/hero.jpg';
const Hero = () => {
    return (
        <div className='flex justify-center bg-white flex m-8 rounded-3xl '>
            <Image
                src={heroImage}
                alt='hero'
                width={2000}
                height={1200}
                sizes='(max-width: 800px) 60vw, 50vw'
                className='rounded-3xl rounded-br-none rounded-tr-none'
            > 
            </Image>
            <div className='h-24 w-full flex flex-col'>
            <h1 className='flex justify-center text-4xl m-4 mb-2 text-black'>Hero</h1>
            <h2 className='flex text-2xl m-4 mt-0 text-black justify-center'>This is the hero section</h2>
            <p className='m-4 text-gray-800 max-w-80 flex text-center justify-center '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8'>Learn More</button>

        </div>
        </div>
    );
};

export default Hero;