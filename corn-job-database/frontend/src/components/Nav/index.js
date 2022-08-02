import React from 'react';
import AppImage from '../../assets/images/App.png';
import User from '../../assets/images/user.jpg';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdSearch } from 'react-icons/md';

const domain = 'http://localhost:3000';

const Navbar = () => {
    const items = [
        {
            text: 'Home',
            url: '/'
        },
        {
            text: 'Posts',
            url: '/posts'
        },
        {
            text: 'Services',
            url: '/services'
        }
    ];

    const location = useLocation();

    console.log(location);

    return <nav className="bg-white border-b-gray-200 px-2 pt-3 lg:pt-0 sm:px-4  h-[70px]">
        <div className="container flex justify-between items-center mx-auto">
            <Link to="#" className="flex items-center mx-2">
                <img src={AppImage} className="mr-3 h-8 sm:h-10" alt="App Logo" />
                <span className="self-center text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-500 text-2xl font-semibold whitespace-nowrap ">Notification App</span>
            </Link>
            <div className="justify-between absolute lg:sticky top-10 right-10 lg:flex items-center hidden" id="mobile-menu-2">
                <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white ">
                    {items.map((item, index) => (
                        <li key={index}>
                            <Link to={item.url} className={`block font-medium text-base px-3 py-2 text-gray-700 hover:bg-blue-700 rounded hover:lg:rounded-xl hover:text-white lg:hover:text-blue-700 hover:lg:bg-gray-100  transition ${location.pathname === item.url && 'bg-blue-700 text-white lg:bg-gray-100 lg:text-blue-700 lg:rounded-xl lg:hover:text-blue-700'}`}

                            >{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center">
                <div className="relative md:block hidden mr-3">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <MdSearch className="w-5 h-5 text-gray-500" />
                        <span className="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                </div>
                <button type="button" className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-10 h-10 rounded-full object-cover" src={User} alt="User" />
                </button>

                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <GiHamburgerMenu className="w-6 h-6" />
                </button>
            </div>
        </div>
    </nav>
}

export default Navbar;