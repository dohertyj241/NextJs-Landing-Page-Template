import React from 'react';
import Image from 'next/image';
import HeroImage from '../images/hero.jpg';
import Button from './button';

const HeroCard = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row h-screen m-6 max-w-5xl rounded-3xl bg-white shadow-xl shadow-stone-300">
                <Image 
                    src={HeroImage} 
                    alt="hero" 
                    className="sm:flex-1 w-full sm:w-1/2 h-full object-cover rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl" 
                />
                <div className="flex flex-1 p-6 flex-col justify-between">
                    <div>
                        <h1 className="text-4xl mb-2 text-black">Hero</h1>
                        <h2 className="text-2xl mt-0 text-black">This is the hero section</h2>
                        <p className="mt-4 text-gray-400">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button text="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
