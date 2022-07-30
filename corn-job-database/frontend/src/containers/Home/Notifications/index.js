import React from "react";
import { Link } from 'react-router-dom';
import axios from '../../../utility/axios';
import User from '../../../assets/images/user.jpg';
import { MdClear, MdAdminPanelSettings } from 'react-icons/md';
import { RiShieldUserFill } from 'react-icons/ri';
import { FaTasks } from 'react-icons/fa';

const Notification = () => {

    React.useEffect(() => {
        axios.get('/post/getPosts')
            .then(res => {
                console.log(res.data);

            })
            .catch(err => {
                console.log(err.message);
            });
    });

    return <section className='lg:w-[500px] w-[90%] md:w-[60%] lg:ml-14 mt-16 lg:mt-0'>
        <h6 className='text-xl sm:text-2xl mt-5 lg:mt-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-yellow-500'>Notifications</h6>
        <div className="mt-3 mb-5 flex ">
            <div className="relative ">
                <button className="font-medium text-gray-600 bg-gray-200 px-4 py-1 rounded-3xl hover:bg-blue-600 hover:text-white">All</button>
                <div className="text-blue-700 absolute -top-2 -right-2 w-6 h-6 text-center font-normal text-sm rounded-full  bg-white">10</div>
            </div>
            <div className="relative ml-5">
                <button className="font-medium text-gray-600 bg-gray-200  px-4 py-1 rounded-3xl hover:bg-blue-600 hover:text-white">Unread</button>
                <div className="text-blue-700 absolute -top-2 -right-2 w-6 h-6 text-center font-normal text-sm rounded-full bg-white">5</div>
            </div>
        </div>
        <div id="toast-notification" className="w-full p-4 bg-white rounded-lg shadow cursor-pointer" role="alert">
            <div className="flex">
                <div className="relative inline-block shrink-0">
                    <img className="h-12 w-12 object-cover rounded-full" src={User} alt="Jese Leos" />
                    <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                        <RiShieldUserFill className="w-4 h-4 text-white" />
                    </span>
                </div>
                <div className="ml-3 text-sm font-normal">
                    <h5 className="text-sm font-semibold text-gray-900">Bonnie Green</h5>
                    <div className="text-sm font-normal text-gray-400">added new student to the...</div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:text-blue-700 hover:bg-gray-100 inline-flex h-8 w-8" data-dismiss-target="#toast-notification" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <MdClear className="w-5 h-5" />
                </button>
            </div>
        </div>

        <div id="toast-interactive" className="w-full mt-3 p-4 text-gray-500 bg-gray-100 rounded-lg shadow  dark:text-gray-400" role="alert">
            <div className="flex">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-600 bg-blue-100 rounded-lg">
                    <FaTasks className="w-6 h-6" />
                </div>
                <div className="ml-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900">New Task Avaibale</span>
                    <div className="mb-2 text-sm font-normal">
                        <span><span className="text-gray-900">Mijanur Rahman </span>is trying to get the permission..</span>
                    </div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-500">2 days ago</span>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                        <div>
                            <Link to="#" className="inline-flex justify-center w-full py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Accept</Link>
                        </div>
                        <div>
                            <Link to="#" className="inline-flex justify-center w-full py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Not now</Link>
                        </div>
                    </div>
                </div>
                <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-500 hover:text-blue-700 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8" data-dismiss-target="#toast-interactive" aria-label="Close">
                    <span className="sr-only">Close</span>
                    <MdClear className="w-5 h-5" />
                </button>
            </div>
        </div>
    </section>
}


export default Notification;