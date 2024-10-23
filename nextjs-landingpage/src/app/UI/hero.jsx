import React from 'react';
import Image from 'next/image';
import heroImage from './images/hero.jpg';
import Button from './ui/button';

const Hero = () => {
    return (
        <div className="landingpage h-screen ">
            <div className='flex  flex-col sm:flex-row justify-center min-h-96 h-3/4 bg-white mt-36 rounded-3xl '>
                <div className="image--wrapper flex-1 ">
                    <Image
                        src={heroImage}
                        alt='hero'
                        className='rounded-3xl sm:h-full object-cover rounded-br-none rounded-tr-none'
                    >
                    </Image>
                </div>
                
                <div className=' w-full flex flex-col first:justify-start  last:*:justify-items-end p-0 overflow-auto flex-1'>
                    <div className='flex flex-2 flex-col '>
                        <h1 className='flex-2 text-4xl m-4 mb-2 text-black'>Hero</h1>
                        <h2 className=' text-2xl m-4 mt-0 text-black '>This is the hero section</h2>
                        <p className='m-6 text-gray-400 justify-center overflow-hidden '>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <Button className='flex '  text={'learn More'}></Button>
                    
                </div>
            </div>
     </div>
    );
};

export default Hero;