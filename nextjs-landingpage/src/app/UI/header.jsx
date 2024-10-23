import React from 'react';


const Header = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyWebsite
        </div>
        <ul className="flex space-x-4">
          <li className='flex'>
            <div className='flex  [&>*]:hover:text-blue-300  [&>*]:hover:fill-blue-300 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> 
                <a href="/" className="flex group">
                    Home
                </a>
            </div>
            
          </li>
          <li className='flex'>
            <div className='flex  [&>*]:hover:text-blue-300  [&>*]:hover:fill-blue-300 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> 
                <a href="/" className="flex group">
                    About
                </a>
            </div>
            
          </li>
          <li className='flex'>
            <div className='flex  [&>*]:hover:text-blue-300  [&>*]:hover:fill-blue-300 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> 
                <a href="/" className="flex group">
                    Services
                </a>
            </div>
            
          </li>
          <li className='flex'>
            <div className='flex  [&>*]:hover:text-blue-300  [&>*]:hover:fill-blue-300 '>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> 
                <a href="/" className="flex group">
                    Contact
                </a>
            </div>
            
          </li>
        </ul>

        <ul className='flex space-x-3'>
            <li>
                <a href="/register" className="bg-blue-400 p-2 px-3 rounded-3xl text-white hover:text-blue-200">Register</a>
            </li>
            <li>
                <a href="/login" className="text-white hover:text-blue-200">Login</a>
            </li> 
            
        </ul>
      </div>
    </nav>
  );
};

export default Header;
