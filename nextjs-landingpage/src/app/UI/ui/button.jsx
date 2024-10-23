import React from 'react';


const Button = ({ text }) => {
    return (
        <button className='w-8/12 h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8'>{text}</button>
    );
};

export default Button;