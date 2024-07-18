import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-20 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <div className="flex items-center space-x-4">
         <h1 className='great-vibes-regular text-4xl'>QW</h1>
        </div>
        <ul className="hidden md:flex space-x-8 text-black text-lg font-medium">
          <li><Link to = {"/"} className=">hover:text-gray-700">Home</Link></li>
          <li><a href="#about" className=">hover:text-gray-700">About</a></li>
          <li><Link to = {"books"} className=">hover:text-gray-700">Books</Link></li>
          <li><Link to = {"/contact"} className=">hover:text-gray-700">Contact</Link></li>
       
        </ul>
        <div className="hidden md:block">
          <a href="https://www.instagram.com" className="text-gray-700 hover:text-gray-900">
          <div className='space-x-5'>
          <i className="fa-brands fa-instagram text-2xl"></i>
          <i className="fa-brands fa-facebook text-2xl"></i>
          <i className="fa-brands fa-tiktok text-2xl"></i>
          <i className="fa-brands fa-linkedin text-2xl"></i>
          </div>
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="px-4 pb-4 space-y-4">
            <li><Link to = {"/"} className="py-2 text-gray-700 hover:text-gray-700">Home</Link></li>
            <li><a href="#about" className=" py-2 text-gray-700 hover:text-gray-700">About</a></li>
            <li><Link to = {"books"} className="py-2 text-gray-700 hover:text-gray-700">Books</Link></li>
            <li><Link to = {"/contact"} className="py-2 text-gray-700 hover:text-gray-700">Contact</Link></li>
            <li className="flex justify-center">
              <a href="https://www.instagram.com" className="text-gray-700 hover:text-gray-900">
              <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
